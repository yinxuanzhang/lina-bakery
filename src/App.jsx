import { HomePage } from "./pages/home/HomePage"
import { CheckOutPage } from "./pages/checkout/CheckOutPage";
import { OrderPage } from "./pages/orders/OrderPage";
import { DeliveryPage } from "./pages/information/DeliveryPage";

import{OrderConfirmationPage} from"./pages/orders/OrderConfirmationPage"
import{UserPage} from "./pages/user/UserPage";
import { AboutLinaPage } from "./pages/information/AboutLinaPage";
import {Routes,Route} from 'react-router-dom';
import { useState,useEffect } from "react";
import axios from "axios";
function App() {
  const [carts,setCarts]=useState([]);
  const[orderPaymentSummary,SetOrderPaymnetSummary]=useState({});
  async function loadCarts(){
    const response= await axios.get('http://localhost:3000/api/carts');
    setCarts(response.data);
   }
  async function loadPaymentSummary(){
    const response= await axios.get('http://localhost:3000/api/carts/payment-summary');
    SetOrderPaymnetSummary(response.data);
   }
   
  useEffect(() => {
    loadCarts();
    loadPaymentSummary();
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
      <Route index element={<HomePage cartsTotalQuantities={cartsTotalQuantities} loadCarts={loadCarts} conutCartQuantity={conutCartQuantity} loadPaymentSummary={loadPaymentSummary}/>}/>
      <Route path="checkout" element={<CheckOutPage carts={carts} cartsTotalQuantities={cartsTotalQuantities} loadCarts={loadCarts} orderPaymentSummary={orderPaymentSummary} loadPaymentSummary={loadPaymentSummary}/>}/>
      <Route path="order" element={<OrderPage carts={carts} orderPaymentSummary={orderPaymentSummary} loadCarts={loadCarts} loadPaymentSummary={loadPaymentSummary}/>}/>
      <Route path="user" element={<UserPage />}/>
      
      
      <Route path="order-confirmation" element={<OrderConfirmationPage/>}/>
      <Route path="delivery-page"element={<DeliveryPage cartsTotalQuantities={cartsTotalQuantities} />}/>
      <Route path="about-lina" element={<AboutLinaPage cartsTotalQuantities={cartsTotalQuantities} />}/>
      </Routes>
    </>
  )
}

export default App
