import express from 'express';
import { getCart,setCart } from '../data/carts.js';

const router = express.Router();

router.get('/:cartsId', (req, res) => {
  const cartsId=req.params.cartsId
  const carts=getCart(cartsId)
  res.json(carts);
});

router.get('/:cartsId/payment-summary', (req, res) => {
  
  const cartsId=req.params.cartsId;
  const carts=getCart(cartsId);
  let priceBeforeTax = 0;
  carts.forEach((item) => {
    priceBeforeTax += item.price * item.quantity;
  });

  const estimatedTax = priceBeforeTax * 0.1;
  const totalPrice = priceBeforeTax + estimatedTax;

  res.json({ priceBeforeTax, estimatedTax, totalPrice });
});

router.post('/', (req, res) => {
  //const { code, price, image, quantity, estimatedCompletionDate } = req.body;
  const {cartsId,items}=req.body;
  const carts=getCart(cartsId);
  const existingItem = carts.find((item) => item.code === items.code);

  if (existingItem) {
    existingItem.quantity += items.quantity;
    return res.json(existingItem);
  }

  const newCartItem = {
    code:items.code,
    price:items.price,
    image:items.image,
    quantity:items.quantity,
    estimatedCompletionDate:items.estimatedCompletionDate
  };

  carts.push(newCartItem);
  setCart(cartsId,carts);
  res.status(201).json(newCartItem);
});

router.delete('/:code', (req, res) => {
  const cartItemCode = req.params.code;
  const newCarts = carts.filter((item) => item.code !== cartItemCode);
  setCart(newCarts);
  res.json(newCarts);
});

router.put('/:code', (req, res) => {
  const cartItemCode = req.params.code;
  const { quantity } = req.body;

  const cartItem = carts.find((item) => item.code === cartItemCode);

  if (quantity <= 0) {
    const newCarts = carts.filter((item) => item.code !== cartItemCode);
    setCart(newCarts);
    return res.json(newCarts);
  }

  if (!cartItem) {
    return res.status(404).json({ message: 'Cart item not found' });
  }

  cartItem.quantity = quantity;
  return res.json(carts);
});

export default router;