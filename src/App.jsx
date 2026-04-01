import { HomePage } from "./pages/home/HomePage"
import { CheckOutPage } from "./pages/checkout/CheckOutPage";
import { OrderPage } from "./pages/orders/OrderPage";
import{UserPage} from "./pages/user/UserPage"
import {Routes,Route} from 'react-router-dom';
import { useState,useEffect } from "react";
import axios from "axios";
function App() {
  const [carts,setCarts]=useState([]);
  async function loadCarts(){
    const response= await axios.get('http://localhost:3000/api/carts');
    setCarts(response.data);
   }
  
  useEffect(() => {
    loadCarts();
  }, []);
 
   
   function conutCartQuantity(){
    if(!carts) return 0;
    let quantity=0;
    carts.forEach((cartItem)=>{
      quantity+=cartItem.quantity;
    });
    return quantity;
   }
   const cartsTotalQuantities=conutCartQuantity();

  return (
    <>
      <Routes>
      <Route index element={<HomePage cartsTotalQuantities={cartsTotalQuantities} loadCarts={loadCarts} conutCartQuantity={conutCartQuantity}/>}/>
      <Route path="checkout" element={<CheckOutPage carts={carts} cartsTotalQuantities={cartsTotalQuantities} loadCarts={loadCarts}/>}/>
      <Route path="order" element={<OrderPage />}/>
      <Route path="user" element={<UserPage />}/>
      </Routes>
    </>
  )
}

export default App
