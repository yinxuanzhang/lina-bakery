import { Link,useLocation } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import { PagesBottom } from '../../componebts/PageSBottom';
import './OrderConfirmationPage.css';

export function OrderConfirmationPage() {
  const location = useLocation();

  const pickupDate = location.state?.pickupDate || 'Not selected';
  const pickupAddress =
   "29-7288 188 Street Surrey BC. V4N 6W3";

  return (
    <>
      <div className="success-page">
        <header className="success-header">
          <div className="success-logo">
            <Link to="/">
              <img src="/images/lina-logo.png" alt="Lina Bakery logo" />
            </Link>
          </div>

          <div className="success-header-title">Order Success</div>

          <div className="success-header-icon">
            <FaCheckCircle />
          </div>
        </header>

        <main className="success-main">
          <div className="success-card">
            <div className="success-icon-wrapper">
              <FaCheckCircle className="success-big-icon" />
            </div>

            <h1 className="success-title">Order Successfully Placed</h1>

            <p className="success-text">
              Thank you for your order. Please pick it up at the address below
              on your selected date.
            </p>

            <div className="success-info-box">
              <div className="success-info-item">
                <div className="success-info-label">Picking Up Address</div>
                <div className="success-info-value">{pickupAddress}</div>
              </div>

              <div className="success-info-item">
                <div className="success-info-label">Picking Up Date</div>
                <div className="success-info-value">{pickupDate}</div>
              </div>
            </div>

            <Link to="/" className="success-home-link">
              <button className="success-home-button">Back to Home</button>
            </Link>
          </div>
        </main>
      </div>

      <PagesBottom />
    </>
  );
}