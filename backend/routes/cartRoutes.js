import express from 'express';
import { carts, setCarts } from '../data/carts.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json(carts);
});

router.get('/payment-summary', (req, res) => {
  let priceBeforeTax = 0;

  carts.forEach((item) => {
    priceBeforeTax += item.price * item.quantity;
  });

  const estimatedTax = priceBeforeTax * 0.1;
  const totalPrice = priceBeforeTax + estimatedTax;

  res.json({ priceBeforeTax, estimatedTax, totalPrice });
});

router.post('/', (req, res) => {
  const { code, price, image, quantity, estimatedCompletionDate } = req.body;

  const existingItem = carts.find((item) => item.code === code);

  if (existingItem) {
    existingItem.quantity += quantity;
    return res.json(existingItem);
  }

  const newCartItem = {
    code,
    price,
    image,
    quantity,
    estimatedCompletionDate
  };

  carts.push(newCartItem);
  res.status(201).json(newCartItem);
});

router.delete('/:code', (req, res) => {
  const cartItemCode = req.params.code;
  const newCarts = carts.filter((item) => item.code !== cartItemCode);
  setCarts(newCarts);
  res.json(newCarts);
});

router.put('/:code', (req, res) => {
  const cartItemCode = req.params.code;
  const { quantity } = req.body;

  const cartItem = carts.find((item) => item.code === cartItemCode);

  if (quantity <= 0) {
    const newCarts = carts.filter((item) => item.code !== cartItemCode);
    setCarts(newCarts);
    return res.json(newCarts);
  }

  if (!cartItem) {
    return res.status(404).json({ message: 'Cart item not found' });
  }

  cartItem.quantity = quantity;
  return res.json(carts);
});

export default router;