import { PagesBottom } from '../../componebts/PageSBottom';
import { Link } from 'react-router-dom';
import { FaShoppingCart} from "react-icons/fa";
import './checkoutpage.css';

export function CheckOutPage() {
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
              <div className="cart-item-container">
                <div className="delivery-date">
                  Delivery date:
                  <span className="delivery-date-value"> Tuesday, April 7</span>
                </div>

                <div className="cart-item-details-grid">
                  <img
                    className="product-image"
                    src="/images/lina-slider1.png"
                    alt="Cake product"
                  />

                  <div className="cart-item-details">
                    <div className="product-name">
                      Intermediate Size Basketball
                    </div>

                    <div className="product-price">
                      $20.95
                    </div>

                    <div className="product-quantity">
                      Quantity: <span className="quantity-label">1</span>

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

                  <div className="delivery-options">
                    <div className="delivery-options-title">
                      Choose a delivery option:
                    </div>

                    <label className="delivery-option">
                      <input
                        className="delivery-option-input"
                        type="radio"
                        name="delivery-option"
                        defaultChecked
                      />
                      <div>
                        <div className="delivery-option-date">
                          Tuesday, April 7
                        </div>
                        <div className="delivery-option-price">
                          FREE Shipping
                        </div>
                      </div>
                    </label>

                    <label className="delivery-option">
                      <input
                        className="delivery-option-input"
                        type="radio"
                        name="delivery-option"
                      />
                      <div>
                        <div className="delivery-option-date">
                          Wednesday, April 1
                        </div>
                        <div className="delivery-option-price">
                          $4.99 - Shipping
                        </div>
                      </div>
                    </label>

                    <label className="delivery-option">
                      <input
                        className="delivery-option-input"
                        type="radio"
                        name="delivery-option"
                      />
                      <div>
                        <div className="delivery-option-date">
                          Monday, March 30
                        </div>
                        <div className="delivery-option-price">
                          $9.99 - Shipping
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
                
              </div>
              <div className="cart-item-container">
                <div className="delivery-date">
                  Delivery date:
                  <span className="delivery-date-value"> Tuesday, April 7</span>
                </div>

                <div className="cart-item-details-grid">
                  <img
                    className="product-image"
                    src="/images/lina-slider1.png"
                    alt="Cake product"
                  />

                  <div className="cart-item-details">
                    <div className="product-name">
                      Intermediate Size Basketball
                    </div>

                    <div className="product-price">
                      $20.95
                    </div>

                    <div className="product-quantity">
                      Quantity: <span className="quantity-label">1</span>

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

                  <div className="delivery-options">
                    <div className="delivery-options-title">
                      Choose a delivery option:
                    </div>

                    <label className="delivery-option">
                      <input
                        className="delivery-option-input"
                        type="radio"
                        name="delivery-option"
                        defaultChecked
                      />
                      <div>
                        <div className="delivery-option-date">
                          Tuesday, April 7
                        </div>
                        <div className="delivery-option-price">
                          FREE Shipping
                        </div>
                      </div>
                    </label>

                    <label className="delivery-option">
                      <input
                        className="delivery-option-input"
                        type="radio"
                        name="delivery-option"
                      />
                      <div>
                        <div className="delivery-option-date">
                          Wednesday, April 1
                        </div>
                        <div className="delivery-option-price">
                          $4.99 - Shipping
                        </div>
                      </div>
                    </label>

                    <label className="delivery-option">
                      <input
                        className="delivery-option-input"
                        type="radio"
                        name="delivery-option"
                      />
                      <div>
                        <div className="delivery-option-date">
                          Monday, March 30
                        </div>
                        <div className="delivery-option-price">
                          $9.99 - Shipping
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
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