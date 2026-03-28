import { Link } from 'react-router-dom';
import { FaShoppingBag } from "react-icons/fa";
import { PagesBottom } from '../../componebts/PagesBottom';
import './OrderPage.css';

export function OrderPage() {
  const currentStep = 3;
  // 0 = Order Accepted
  // 1 = In Production
  // 2 = Production Complete
  // 3 = Out for Delivery
  // 4 = Delivered

  const orderSteps = [
    'Order Accepted',
    'In Production',
    'Production Complete',
    'Out for Delivery',
    'Delivered'
  ];

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
          <h1 className="order-page-title">Order Status</h1>

          <div className="order-layout">
            <section className="order-details-card">
              <div className="order-card-header">
                <div>
                  <div className="order-number-label">Order Number</div>
                  <div className="order-number">#LB-2026-0317</div>
                </div>

                <div className="order-status-badge">
                  Out for Delivery
                </div>
              </div>

              <div className="order-info-grid">
                <div className="order-info-item">
                  <div className="order-info-label">Customer</div>
                  <div className="order-info-value">Travis Zhang</div>
                </div>

                <div className="order-info-item">
                  <div className="order-info-label">Order Date</div>
                  <div className="order-info-value">March 27, 2026</div>
                </div>

                <div className="order-info-item">
                  <div className="order-info-label">Delivery Time</div>
                  <div className="order-info-value">2:00 PM - 4:00 PM</div>
                </div>

                <div className="order-info-item">
                  <div className="order-info-label">Delivery Address</div>
                  <div className="order-info-value">Burnaby, BC</div>
                </div>
              </div>

              <div className="ordered-items-section">
                <div className="section-title">Ordered Items</div>

                <div className="ordered-item">
                  <img
                    className="ordered-item-image"
                    src="/images/lina-slider2.png"
                    alt="Cake"
                  />

                  <div className="ordered-item-content">
                    <div className="ordered-item-name">
                      Custom Birthday Cake
                    </div>
                    <div className="ordered-item-meta">
                      Size: 6 inch
                    </div>
                    <div className="ordered-item-meta">
                      Flavor: Strawberry Cream
                    </div>
                    <div className="ordered-item-meta">
                      Quantity: 1
                    </div>
                  </div>

                  <div className="ordered-item-price">
                    $68.60
                  </div>
                </div>
              </div>
            </section>

            <aside className="order-summary-card">
              <div className="section-title">Tracking Progress</div>

              <div className="progress-line-wrapper">
                <div className="progress-line"></div>
                <div
                  className="progress-line-active"
                  style={{ width: `${(currentStep / (orderSteps.length - 1)) * 100}%` }}
                ></div>

                <div className="progress-steps">
                  {orderSteps.map((step, index) => {
                    const isCompleted = index <= currentStep;
                    const isCurrent = index === currentStep;

                    return (
                      <div className="progress-step" key={step}>
                        <div
                          className={`progress-dot ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''}`}
                        >
                          {index + 1}
                        </div>

                        <div className={`progress-text ${isCompleted ? 'active' : ''}`}>
                          {step}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="status-note-box">
                <div className="status-note-title">Latest Update</div>
                <div className="status-note-text">
                  Your order has left the bakery and is currently on the way.
                </div>
              </div>

              <div className="summary-divider"></div>

              <div className="order-summary-row">
                <div>Subtotal</div>
                <div>$68.60</div>
              </div>

              <div className="order-summary-row">
                <div>Delivery Fee</div>
                <div>$0.00</div>
              </div>

              <div className="order-summary-row">
                <div>Tax</div>
                <div>$6.86</div>
              </div>

              <div className="order-summary-row total">
                <div>Total</div>
                <div>$75.46</div>
              </div>

              <div className="order-button-group">
                <button className="order-primary-button">
                  Contact Support
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