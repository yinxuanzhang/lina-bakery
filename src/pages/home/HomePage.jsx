import './homepage.css'
import { FiSearch, FiUser, FiShoppingBag, FiMessageCircle, FiGlobe } from "react-icons/fi";
export function HomePage(){
  return(<>
  
  <div className="hero-section">
  <div className="hero-slider">
    <div className="slide-page"><img src="/images/lina-slider1.png" alt=""/></div>
    <div className="top-header" >
    <div className='top-header-cad'>$CAD</div>
    <button><FiGlobe /></button>
    {/*<div className="language-dropdown">
      <a href="#">English</a>
      <a href="#">简体中文</a>
    </div>*/}
    {/*<input className="search-input"/>*/}
    <button><FiSearch /></button>
    <button><FiMessageCircle /></button>
    <button><FiShoppingBag /></button>
  </div>
  <div className="main-nav">
      <div className="lina-bakery-logo"><img src="/images/lina-logo.png" /></div>
      <ul className="ul-list">
        <li><a href="/">Home</a></li>
        <li><a href="/delivery-page">Delivery Information</a></li>
        <li><a href="/about-page">About Lina</a></li>
      </ul>
  </div>
  </div>
  </div>

  <div className='middle-section-banner'>
    <div className='leftPicture'><img src="/images/banner-left.png" alt="" />
    <p>手工制作</p></div>
    <div className='rightPicture'><img src="/images/banner-right.png" alt="" />
    <p>新鲜出炉</p>
    </div>
  </div>

  <div className='products-Gride'>
    <div className="product">
      <img src="/images/resources/cellImage_0_0.jpg" alt="" />
    </div>
    <div className="product">
      <img src="/images/resources/cellImage_0_1.jpg" alt="" />
    </div>
    <div className="product">
      <img src="/images/resources/cellImage_0_2.jpg" alt="" />
    </div>
    <div className="product">
      <img src="/images/resources/cellImage_0_3.jpg" alt="" />
    </div>
    <div className="product">
      <img src="/images/resources/cellImage_0_6.jpg" alt="" />
    </div>
    <div className="product">
      <img src="/images/resources/cellImage_0_7.jpg" alt="" />
    </div>
    <div className="product">
      <img src="/images/resources/cellImage_0_8.jpg" alt="" />
    </div>
    <div className="product">
      <img src="/images/resources/cellImage_0_9.jpg" alt="" />
    </div>
    <div className="product">
      <img src="/images/resources/cellImage_0_17.jpg" alt="" />
    </div>
    <div className="product">
      <img src="/images/resources/cellImage_0_11.jpg" alt="" />
    </div>
  </div>
</>);
}