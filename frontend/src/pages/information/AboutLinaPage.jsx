import './aboutlina.css';
import { TopHeader } from '../../components/TopHeader';
import { PagesBottom } from '../../components/PagesBottom';
import { Link } from 'react-router-dom';

export function AboutLinaPage({ cartsTotalQuantities }) {
  return (
    <>
      <div className="about-hero-section">
        <div className="about-hero-banner">
          <img src="/images/lina-slider1.png" alt="" />

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

          <div className="about-page-title">
            
          </div>
        </div>
      </div>

      <div className="about-content">
        <div className="about-card">
          <h2>Our Story</h2>
          <p>
            Lina was born from a genuine love for desserts and the joy they bring to everyday life.
          </p>
          <p>
            We believe that every cake and every sweet creation should feel warm, thoughtful, and special.
          </p>
          <p>
            Each of our products is made by hand with care, patience, and attention to detail.
          </p>
          <p>
            We carefully choose quality ingredients to create desserts that not only look beautiful, but also taste memorable.
          </p>
          <p>
            At Lina, baking is more than making sweets — it is a way of sharing comfort, happiness, and love.
          </p>
        </div>

        <div className="about-highlight-section">
          <div className="about-highlight-box">
            <h3>Handmade</h3>
            <p>Every dessert is carefully crafted by hand.</p>
          </div>

          <div className="about-highlight-box">
            <h3>Quality Ingredients</h3>
            <p>We use selected ingredients to ensure both flavor and quality.</p>
          </div>

          <div className="about-highlight-box">
            <h3>Made with Love</h3>
            <p>Each creation begins with passion and is finished with care.</p>
          </div>
        </div>
      </div>

      <PagesBottom />
    </>
  );
}