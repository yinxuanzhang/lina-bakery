import express from 'express';
import { stripe } from '../lib/stripe.js';

const router = express.Router();

router.post('/create-checkout-session', async (req, res) => {
  try {
    const { carts, pickupDate } = req.body;

    const line_items = carts.map((item) => ({
      quantity: item.quantity,
      price_data: {
        currency: 'cad',
        product_data: {
          name: item.code
        },
        unit_amount: item.price
      }
    }));

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items,
      success_url: `${process.env.CLIENT_URL}/order-confirmation?pickupDate=${encodeURIComponent(pickupDate)}`,
      cancel_url: `${process.env.CLIENT_URL}/order`
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Stripe session error:', error);
    res.status(500).json({ message: 'Failed to create checkout session' });
  }
});

router.post(
  '/stripe-webhook',
  express.raw({ type: 'application/json' }),
  (req, res) => {
    const sig = req.headers['stripe-signature'];
    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (error) {
      console.error('Webhook signature verification failed', error.message);
      return res.sendStatus(400);
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      console.log('payment success, session id:', session.id);

      // 以后这里可以更新订单状态
    }

    res.sendStatus(200);
  }
);

export default router;