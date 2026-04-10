import express from 'express';
import { orders, addOrder } from '../data/orders.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json(orders);
});

router.post('/', (req, res) => {
  const {
    customerName,
    pickupDate,
    phoneNumber,
    emailAddress,
    carts,
    orderNumber
  } = req.body;

  const newOrder = {
    orderNumber,
    customerName,
    pickupDate,
    phoneNumber,
    emailAddress,
    carts
  };

  addOrder(newOrder);
  res.status(201).json(newOrder);
});

export default router;