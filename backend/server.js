import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cartRoutes from './routes/cartRoutes.js';
import ordersRoutes from'./routes/ordersRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';
import productsRoutes from './routes/productsRoutes.js';

dotenv.config();


const app=express();
const port=3000;

app.use(cors());
app.use(express.json());

app.use('/api',paymentRoutes);
app.use('/api/carts',cartRoutes);
app.use('/api/orders',ordersRoutes);
app.use('/api/products',productsRoutes);





app.listen(port,()=>{
  console.log(`server is running on port ${port} `)
});