import express from 'express';
import { prisma } from '../prismaClient.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const orders = await prisma.order.findMany({
      include: {
        items: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    res.json(orders);
  } catch (error) {
    console.error('Get orders error:', error);
    res.status(500).json({
      error: 'Failed to fetch orders',
    });
  }
});

router.post('/', async (req, res) => {
  const {
    customerName,
    pickupDate,
    phoneNumber,
    emailAddress,
    carts,
    orderNumber
  } = req.body;

  const newOrder = await prisma.order.create({
   data:{ 
    orderNumber,
    customerName,
    pickupDate:new Date(pickupDate),
    phoneNumber,
    emailAddress,
    items:{
      create:carts.map((item)=>({
        productCode:item.code,
        unitPriceCents:item.price,
        quantity:item.quantity,
        image:item.image?? null,
      })),
    },
  },
    include:{
      items:true,
    },
  });

  
  res.status(201).json(newOrder);
});

export default router;