import { HomePage } from "./pages/home/HomePage"
import { CheckOutPage } from "./pages/checkout/CheckOutPage";
import { OrderPage } from "./pages/orders/OrderPage";
import{UserPage} from "./pages/user/UserPage"
import {Routes,Route} from 'react-router-dom';
function App() {
  

  return (
    <>
      <Routes>
      <Route index element={<HomePage/>}/>
      <Route path="checkout" element={<CheckOutPage/>}/>
      <Route path="order" element={<OrderPage />}/>
      <Route path="user" element={<UserPage />}/>
      </Routes>
    </>
  )
}

export default App
