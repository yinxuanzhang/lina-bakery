import './deliverypage.css';
import { TopHeader } from '../../components/TopHeader';
import { PagesBottom } from '../../components/PagesBottom';
import { Link } from 'react-router-dom';

export function DeliveryPage({ cartsTotalQuantities }) {
  return (
    <>
      <div className="delivery-hero-section">
        <div className="delivery-hero-banner">
          <img src="/images/lina-slider2.png" alt="" />

          <TopHeader cartsTotalQuantities={cartsTotalQuantities} />

          <div className="main-nav">
            <div className="lina-bakery-logo">
              <img src="/images/lina-logo.png" alt="" />
            </div>
            <ul className="ul-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/delivery-page">Delivery Information</Link></li>
              <li><Link to="/about-lina">About Lina</Link></li>
            </ul>
          </div>

          <div className="delivery-page-title">
            <h1>Delivery Information</h1>
          </div>
        </div>
      </div>

      <div className="delivery-content">
        <div className="delivery-card">
          <h2>Delivery Policy</h2>
          <p>
            Due to limited staff availability, delivery is generally not available at this time.
          </p>
          <p>
            If you would like to request delivery, please feel free to contact us by email.
          </p>
          <p>
            When our schedule allows, we may be able to arrange delivery for your order.
          </p>
          <p>
            An additional delivery fee will be charged depending on the distance and delivery time.
          </p>
          <p>
            Thank you for your understanding and support.
          </p>
        </div>

        <div className="delivery-contact-box">
          <h3>Contact Us</h3>
          <p>For delivery inquiries, please email us at:</p>
          <p className="delivery-email">linabakery@example.com</p>
        </div>
      </div>

      <PagesBottom />
    </>
  );
}