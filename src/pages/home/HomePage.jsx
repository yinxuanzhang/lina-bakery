import './homepage.css';
import { useEffect, useState } from 'react';
import { ProductGrid } from '../../componebts/ProductsGrid';
import { TopHeader } from '../../componebts/TopHeader';
import { PagesBottom } from '../../componebts/PagesBottom';

const bannerPages = [
  '/images/lina-slider1.png',
  '/images/lina-slider2.png',
  '/images/lina-slider3.png',
];

export function HomePage() {
  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBannerIndex((prev) => (prev === bannerPages.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="hero-section">
        <div className="hero-slider">
          {bannerPages.map((item, index) => (
            <div
              className={`fade-slide ${bannerIndex === index ? 'active-slide' : ''}`}
              key={item}
            >
              <img src={item} alt={`Lina Bakery banner ${index + 1}`} />
            </div>
          ))}

          <div className="hero-overlay" />

          <TopHeader />

          <div className="main-nav">
            <div className="lina-bakery-logo">
              <img src="/images/lina-logo.png" alt="Lina Bakery logo" />
            </div>
            <ul className="ul-list">
              <li><a href="/">Home</a></li>
              <li><a href="/delivery-page">Delivery Information</a></li>
              <li><a href="/about-page">About Lina</a></li>
            </ul>
            <div className="hero-copy">
              <p>Fresh every day, handmade with love.</p>
              <a href="/delivery-page" className="hero-button">Order for delivery</a>
            </div>
          </div>
        </div>
      </section>

      <section className="middle-section-banner">
        <div className="feature-card leftPicture">
          <img src="/images/banner-left.png" alt="Handmade bakery products" />
          <p>手工制作</p>
        </div>
        <div className="feature-card rightPicture">
          <img src="/images/banner-right.png" alt="Freshly baked products" />
          <p>新鲜出炉</p>
        </div>
      </section>

      <section className="products-Gride">
        {ProductGrid.flatMap((productType) =>
          productType.items.map((item) => (
            <article className="product" key={item.id}>
              <img src={item.image} alt={item.code} />
              <div className="each-product-info">
                <div className="product-code">{item.code}</div>
                <div className="product-price">{item.price}</div>
              </div>
              <button className="add-button">Add</button>
            </article>
          )),
        )}
      </section>

      <section className="new-discount-product">
        <img src="/images/slide2.webp" alt="New seasonal discount products" />
      </section>

      <PagesBottom />
    </>
  );
}
