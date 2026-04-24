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
import{v4 as uuidv4} from 'uuid';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
function App() {
  function getOrCreateCartsId(){
    let cartsId=localStorage.getItem("cartsId");
    if(!cartsId){
      cartsId=uuidv4();
      localStorage.setItem("cartsId",cartsId);
    }
    return cartsId;
  }
  const [carts,setCarts]=useState([]);
  const[orderPaymentSummary,SetOrderPaymnetSummary]=useState({});
  const[cartsId]=useState(()=>getOrCreateCartsId());
  console.log(cartsId);
  async function loadCarts(){
    const response= await axios.get(`${API_BASE_URL}/api/carts/${cartsId}`);
    setCarts(response.data);
   }
  async function loadPaymentSummary(){
    const response= await axios.get(`${API_BASE_URL}/api/carts/${cartsId}/payment-summary`);
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
      <Route index element={<HomePage API_BASE_URL={API_BASE_URL} cartsTotalQuantities={cartsTotalQuantities} loadCarts={loadCarts} conutCartQuantity={conutCartQuantity} loadPaymentSummary={loadPaymentSummary} cartsId={cartsId}/>}/>
      <Route path="checkout" element={<CheckOutPage API_BASE_URL={API_BASE_URL} carts={carts} cartsTotalQuantities={cartsTotalQuantities} loadCarts={loadCarts} orderPaymentSummary={orderPaymentSummary} loadPaymentSummary={loadPaymentSummary} cartsId={cartsId}/>}/>
      <Route path="order" element={<OrderPage API_BASE_URL={API_BASE_URL} cartsId={cartsId} carts={carts} orderPaymentSummary={orderPaymentSummary} loadCarts={loadCarts} loadPaymentSummary={loadPaymentSummary}/>}/>
      <Route path="user" element={<UserPage />}/>
      
      
      <Route path="order-confirmation" element={<OrderConfirmationPage/>}/>
      <Route path="delivery-page"element={<DeliveryPage cartsTotalQuantities={cartsTotalQuantities} />}/>
      <Route path="about-lina" element={<AboutLinaPage cartsTotalQuantities={cartsTotalQuantities} />}/>
      </Routes>
    </>
  )
}

export default App
