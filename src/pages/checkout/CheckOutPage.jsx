import { PagesBottom } from '../../componebts/PageSBottom';
import { Link } from 'react-router-dom';
import { FaShoppingCart} from "react-icons/fa";
import { useState,useEffect } from 'react';
import axios from 'axios';
import './checkoutpage.css';

export function CheckOutPage() {
  const [carts,setCarts]=useState([]);
useEffect(()=>{
 async function loadCarts(){
  const response= await axios.get('http://localhost:3000/api/carts');
  setCarts(response.data);
 }
 loadCarts();
},[]);
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
            Checkout (3 items)
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
                <div className="cart-item-container">
                <div className="delivery-date">
                  Estimated completion date:
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
                      {cartItem.price}
                    </div>

                    <div className="product-quantity">
                      Quantity: <span className="quantity-label">{cartItem.quantity}</span>

                      <input
                        className="new-quantity-input"
                        type="number"
                        defaultValue={1}
                      />

                      <span className="update-quantity-link">Update</span>
                      <span className="save-quantity-link">Save</span>
                      <span className="delete-quantity-link">Delete</span>
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
                <div>Items (4):</div>
                <div className="payment-summary-money">$68.60</div>
              </div>

              <div className="payment-summary-row">
                <div>Shipping &amp; handling:</div>
                <div className="payment-summary-money">$0.00</div>
              </div>

              <div className="payment-summary-row">
                <div>Total before tax:</div>
                <div className="payment-summary-money">$68.60</div>
              </div>

              <div className="payment-summary-row">
                <div>Estimated tax (10%):</div>
                <div className="payment-summary-money">$6.86</div>
              </div>

              <div className="payment-summary-row total-row">
                <div>Order total:</div>
                <div className="payment-summary-money">$75.46</div>
              </div>

              <div className="payment-buttons-container">
                <div className="paypal-button-container"></div>

                <button className="place-order-button button-primary">
                  Place your order
                </button>
              </div>
            </aside>
          </div>
        </main>
      </div>

      <PagesBottom />
    </>
  );
}