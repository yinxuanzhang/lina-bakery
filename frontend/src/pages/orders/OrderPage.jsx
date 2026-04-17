import { Link } from 'react-router-dom';
import { FaShoppingBag } from "react-icons/fa";
import { PagesBottom } from '../../components/PagesBottom';
import dayjs from 'dayjs';
import './orderpage.css';
import { useState, useEffect } from 'react';
import { centsTobuck } from '../../../utils/money';

import axios from 'axios';

export function OrderPage({API_BASE_URL, cartsId,carts, orderPaymentSummary, loadCarts, loadPaymentSummary }) {


  useEffect(() => {
    loadCarts();
    loadPaymentSummary();
  }, [carts]);

  const minDate = dayjs().add(5, 'day').format('YYYY-MM-DD');
  const [pickupDate, setPickupDate] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  
  async function checkOutConfirm() {
    if (
      customerName.trim() !== '' &&
      pickupDate.trim() !== '' &&
      phoneNumber.trim() !== '' &&
      emailAddress.trim() !== ''&&
      carts.length!==0
    ) {
      try {
        

        const response = await axios.post(
          `${API_BASE_URL}/api/create-checkout-session`,
          { cartsId,pickupDate,customerName,phoneNumber,emailAddress}
        );

        window.location.href = response.data.url;
        
      } catch (error) {
        alert("Order failed. Please try again.");
      }
    } else {
      alert("Please complete all required information.");
    }
  }

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
          <h1 className="order-page-title">Order Details</h1>

          <div className="order-layout">
            <section className="order-details-card">
              <div className="order-card-header">
                <div>
                  <div className="order-number-label">Order Details</div>
                  <div className="order-number">Custom Cake Order</div>
                </div>

                <div className="order-status-badge">
                  Pickup Only
                </div>
              </div>

              <div className="order-info-grid">
                <div className="order-info-item">
                  <label className="order-info-label">Customer Name</label>
                  <input
                    className="order-info-value"
                    type="text"
                    placeholder="Enter your name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                  />
                </div>

                <div className="order-info-item">
                  <label className="order-info-label">Pickup Date</label>
                  <input
                    className="order-info-value"
                    type="date"
                    value={pickupDate}
                    min={minDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                  />
                </div>

                <div className="order-info-item">
                  <label className="order-info-label">Mobile Phone</label>
                  <input
                    className="order-info-value"
                    type="text"
                    placeholder="Enter your phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>

                <div className="order-info-item">
                  <label className="order-info-label">Email Address</label>
                  <input
                    className="order-info-value"
                    type="email"
                    placeholder="Enter your email"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                  />
                </div>
              </div>

              <div className="ordered-items-section">
                <div className="section-title">Ordered Items</div>

                <div className="ordered-items-list">
                  {carts.map((cartItem) => {
                    return (
                      <div className="ordered-item" key={cartItem.code}>
                        <img
                          className="ordered-item-image"
                          src={cartItem.image}
                          alt={cartItem.code}
                        />

                        <div className="ordered-item-content">
                          <div className="ordered-item-name">
                            {cartItem.code}
                          </div>

                          <div className="ordered-item-meta">
                            Price: ${centsTobuck(cartItem.price)}
                          </div>

                          <div className="ordered-item-meta">
                            Flavor: Strawberry Cream
                          </div>

                          <div className="ordered-item-meta">
                            Quantity: {cartItem.quantity}
                          </div>
                        </div>

                        <div className="ordered-item-price">
                          ${centsTobuck(cartItem.price * cartItem.quantity)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            <aside className="order-summary-card">
              <div className="summary-card-title">Order Summary</div>

              <div className="summary-note-box">
                Please review your information carefully before proceeding to payment.
              </div>

              <div className="summary-divider"></div>

              <div className="order-summary-row">
                <div>Subtotal</div>
                <div>${centsTobuck(orderPaymentSummary.priceBeforeTax) || 0}</div>
              </div>

              <div className="order-summary-row">
                <div>Delivery Fee</div>
                <div>$0.00</div>
              </div>

              <div className="order-summary-row">
                <div>Tax</div>
                <div>${centsTobuck(orderPaymentSummary.estimatedTax) || 0}</div>
              </div>

              <div className="order-summary-row total">
                <div>Total</div>
                <div>${centsTobuck(orderPaymentSummary.totalPrice) || 0}</div>
              </div>

              <div className="order-button-group">
                <button
                  className="order-primary-button"
                  onClick={() => {
                    checkOutConfirm();
                  }}
                >
                  Proceed to Checkout
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