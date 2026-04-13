import express from 'express';
import { stripe } from '../lib/stripe.js';
import { v4 as uuidv4 } from 'uuid';
import { prisma } from '../prismaClient.js';

const router = express.Router();

async function createOrder({
  carts,
  pickupDate,
  customerName,
  phoneNumber,
  emailAddress,
  orderNumber,
}) {
  return prisma.order.create({
    data: {
      orderNumber,
      pickupDate: new Date(pickupDate),
      customerName,
      phoneNumber,
      emailAddress,
      items: {
        create: carts.map((item) => ({
          productCode: item.code,
          unitPriceCents: item.price,
          quantity: item.quantity,
          image: item.image ?? null,
        })),
      },
    },
    include: {
      items: true,
    },
  });
}

router.post('/create-checkout-session', async (req, res) => {
  try {
    const { carts, pickupDate, customerName, phoneNumber, emailAddress } = req.body;

    if (!Array.isArray(carts) || carts.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    const orderNumber = uuidv4();

    const line_items = carts.map((item) => ({
      quantity: item.quantity,
      price_data: {
        currency: 'cad',
        product_data: {
          name: item.code,
          metadata: {
            productCode: item.code,
            image: item.image ?? '',
          },
        },
        unit_amount: item.price,
      },
    }));

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items,
      success_url: `${process.env.CLIENT_URL}/order-confirmation?pickupDate=${encodeURIComponent(
        pickupDate
      )}`,
      cancel_url: `${process.env.CLIENT_URL}/order`,
      client_reference_id: orderNumber,
      metadata: {
        orderNumber,
        pickupDate,
        customerName,
        phoneNumber,
        emailAddress,
      },
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Stripe session error:', error);
    res.status(500).json({ message: 'Failed to create checkout session' });
  }
});

router.post(
  '/stripe-webhook',
  
  async (req, res) => {
    const sig = req.headers['stripe-signature'];
    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (error) {
      console.error('Webhook signature verification failed:', error.message);
      return res.sendStatus(400);
    }

    try {
      if (event.type === 'checkout.session.completed') {
        const session = event.data.object;
        console.log('payment success, session id:', session.id);

        const existingOrder = await prisma.order.findUnique({
          where: {
            orderNumber: session.metadata.orderNumber,
          },
        });

        if (existingOrder) {
          return res.sendStatus(200);
        }

        const lineItems = await stripe.checkout.sessions.listLineItems(session.id, {
          limit: 100,
        });

        const carts = lineItems.data.map((item) => ({
          code:
            item.price?.product_details?.metadata?.productCode ??
            item.description ??
            'UNKNOWN',
          price: item.price?.unit_amount ?? 0,
          quantity: item.quantity ?? 1,
          image: item.price?.product_details?.metadata?.image || null,
        }));

        await createOrder({
          carts,
          orderNumber: session.metadata.orderNumber,
          pickupDate: session.metadata.pickupDate,
          customerName: session.metadata.customerName,
          phoneNumber: session.metadata.phoneNumber,
          emailAddress: session.metadata.emailAddress,
        });
      }

      res.sendStatus(200);
    } catch (error) {
      console.error('Webhook processing error:', error);
      res.sendStatus(500);
    }
  }
);

export default router;