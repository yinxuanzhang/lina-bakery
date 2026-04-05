import { PagesBottom } from '../../componebts/PageSBottom';
import { Link } from 'react-router-dom';
import { FaShoppingCart} from "react-icons/fa";
import axios from 'axios';
import './checkoutpage.css';
import { useEffect} from 'react';
import { centsTobuck } from '../../../utils/money';


export function CheckOutPage({carts,cartsTotalQuantities,loadCarts,orderPaymentSummary,loadPaymentSummary}) {
  
  
   async function deleteCartItem(code){
     await axios.delete(`http://localhost:3000/api/carts/${code}`);
     await loadCarts();
     await loadPaymentSummary();
   }
   async function minusOneToCart(cartItem){
    await axios.put(`http://localhost:3000/api/carts/${cartItem.code}`,{quantity:cartItem.quantity-=1});
    await loadCarts();
    await loadPaymentSummary();
   }
   
   async function addOneToCart(cartItem){
    await axios.put(`http://localhost:3000/api/carts/${cartItem.code}`,{quantity:cartItem.quantity+=1});
    await loadCarts();
    await loadPaymentSummary();
   }
   
  
  
   useEffect(()=>{
    loadCarts();
    loadPaymentSummary();
   },[carts]);
   
  return (
    <>
      <div className="checkout-page">
        <header className="checkout-header">
          <div className="checkout-logo">
            <Link to="/">
              <img src="/images/lina-logo.png" alt="Lina Bakery logo" />
            </Link>
          </div>

          <div className="checkout-header-title">
            Checkout ({cartsTotalQuantities} Items) 
          </div>

          <div className="checkout-header-icon">
            
            <FaShoppingCart/>
          </div>
        </header>

        <main className="checkout-main">
          <h1 className="page-title">Review your order</h1>

          <div className="checkout-grid">
            <section className="cart-summary">
             {carts.map((cartItem)=>{
              return(
                <div className="cart-item-container" key={cartItem.code}>
                <div className="delivery-date">
                  Fastest completion date:
                  <span className="delivery-date-value"> {cartItem.estimatedCompletionDate}</span>
                </div>

                <div className="cart-item-details-grid">
                  <img
                    className="product-image"
                    src={cartItem.image}
                    alt="Cake product"
                  />

                  <div className="cart-item-details">
                    <div className="product-name">
                      {cartItem.code}
                    </div>

                    <div className="product-price">
                      ${centsTobuck(cartItem.price)}
                    </div>

                    <div className="product-quantity">
                      Quantity:<span className="quantity-label"> {cartItem.quantity}</span>
                      
                      <span className="update-quantity-link" onClick={ async ()=>{
                        await addOneToCart(cartItem);
                      }}> Add</span>
                      <span className="save-quantity-link" onClick={ async ()=>{
                        await minusOneToCart(cartItem);
                      }}>Down</span>
                      <span className="delete-quantity-link" onClick={async ()=>{
                       await deleteCartItem(cartItem.code);
                      }}>Delete</span>
                    </div>
                  </div>

                 
                </div>
                
              </div>
              );
             })}
            </section>

            <aside className="payment-summary">
              <div className="payment-summary-title">
                Order Summary
              </div>

              <div className="payment-summary-row">
                <div>Items ({cartsTotalQuantities}):</div>
               
                <div className="payment-summary-money">${centsTobuck(orderPaymentSummary.priceBeforeTax)||0}</div>
              </div>

              <div className="payment-summary-row">
                <div>Shipping &amp; handling:</div>
                <div className="payment-summary-money">$0.00</div>
              </div>

              <div className="payment-summary-row">
                <div>Total before tax:</div>
                <div className="payment-summary-money">${centsTobuck(orderPaymentSummary.priceBeforeTax)||0}</div>
              </div>

              <div className="payment-summary-row">
                <div>Estimated tax (10%):</div>
                <div className="payment-summary-money">${centsTobuck(orderPaymentSummary.estimatedTax)||0}</div>
              </div>

              <div className="payment-summary-row total-row">
                <div>Order total:</div>
                <div className="payment-summary-money">${centsTobuck(orderPaymentSummary.totalPrice)||0}</div>
              </div>

              <div className="payment-buttons-container">
                <div className="paypal-button-container"></div>
              <Link to="/order">
                <button className="place-order-button button-primary">
                  confirm your order
                </button>
              </Link>
              </div>
            </aside>
          </div>
        </main>
      </div>

      <PagesBottom />
    </>
  );
}