import { Link } from 'react-router-dom';
import { FaShoppingBag } from "react-icons/fa";
import { PagesBottom } from '../../componebts/PageSBottom';
import dayjs from 'dayjs';
import './orderpage.css';
import { useState,useEffect } from 'react';
import { centsTobuck } from '../../../utils/money';
import axios from 'axios';



export function OrderPage({carts,orderPaymentSummary,loadCarts,loadPaymentSummary}) {
  async  function makeAnOrder(customerName,pickupDate,phoneNumber,emailAddress,carts){
    await axios.post('http://localhost:3000/api/orders',{
      customerName,
      pickupDate,
      phoneNumber,
      emailAddress,
      carts
    })
  }
   useEffect(()=>{
      loadCarts();
      loadPaymentSummary();
     },[carts]);
  const minDate=dayjs().add(5,'day').format('YYYY-MM-DD');
  const[pickupDate,setPickupDate]=useState('');
  const[customerName,setCustomerName]=useState('');
  const[phoneNumber,setPhoneNumber]=useState('');
   const[emailAddress,setEmailAddress]=useState('');
  return (
    <>
      <div className="order-page">
        <header className="order-header">
          <div className="order-logo">
            <Link to="/">
              <img src="/images/lina-logo.png" alt="Lina Bakery logo" />
            </Link>
          </div>

          <div className="order-header-title">
            My Order
          </div>

          <div className="order-header-icon">
            <FaShoppingBag />
          </div>
        </header>

        <main className="order-main">
          <h1 className="order-page-title">Order</h1>

          <div className="order-layout">
            <section className="order-details-card">
              <div className="order-card-header">
                <div>
                  <div className="order-number-label">Order Details</div>
                  <div className="order-number">{}</div>
                </div>

                <div className="order-status-badge">
                  Only Pickup 
                </div>
              </div>

              <div className="order-info-grid">
                <div className="order-info-item">
                  <div className="order-info-label">Customer</div>
                  <input className="order-info-value" type='text' value={customerName} onChange={(e)=>setCustomerName(e.target.value)}/>
                </div>

                <div className="order-info-item">
                  <div className="order-info-label">Pickup Date</div>
                  <input className="order-info-value" type='date' value={pickupDate} min={minDate}
                  onChange={(e)=>setPickupDate(e.target.value)}/>
                </div>

                <div className="order-info-item">
                  <div className="order-info-label">Mobile Phone</div>
                  <input className="order-info-value"  value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} />
                </div>

                <div className="order-info-item">
                  <div className="order-info-label">Email Address</div>
                  <input className="order-info-value" type='text' value={emailAddress} onChange={(e)=>setEmailAddress(e.target.value)}/>
                </div>
              </div>

              <div className="ordered-items-section">
                <div className="section-title">Ordered Items</div>
                <div className="ordered-item-content">
                    {carts.map((cartItem)=>{
                      return(
                    <>
                     <div className="ordered-item">
                      <img
                      className="ordered-item-image"
                      src={cartItem.image}
                      alt="Cake"
                      />
                      <div className="ordered-item-name">
                        {cartItem.code}
                      </div>
                      <div className="ordered-item-meta">
                        ${centsTobuck(cartItem.price)}
                      </div>
                      <div className="ordered-item-meta">
                      Flavor: Strawberry Cream
                      </div>
                    <div className="ordered-item-meta">
                      Quantity: {cartItem.quantity}
                    </div>
                    </div>
                    </>);
                    })}
                     <div className="ordered-item-price">
                      ${centsTobuck(orderPaymentSummary.priceBeforeTax)}
                    </div>
                </div>
              </div>
            </section>

            <aside className="order-summary-card">
              

            

              <div className="summary-divider"></div>

              <div className="order-summary-row">
                <div>Subtotal</div>
                <div>${centsTobuck(orderPaymentSummary.priceBeforeTax)}</div>
              </div>

              <div className="order-summary-row">
                <div>Delivery Fee</div>
                <div>$0.00</div>
              </div>

              <div className="order-summary-row">
                <div>Tax</div>
                <div>${centsTobuck(orderPaymentSummary.estimatedTax)}</div>
              </div>

              <div className="order-summary-row total">
                <div>Total</div>
                <div>${centsTobuck(orderPaymentSummary.totalPrice)}</div>
              </div>

              <div className="order-button-group">
                <button className="order-primary-button" onClick={async()=>{
                 await makeAnOrder(customerName,pickupDate,phoneNumber,emailAddress,carts);
                }}>
                  Check Out
                </button>

                <Link to="/" className="back-home-link">
                  <button className="order-secondary-button">
                    Back to Home
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