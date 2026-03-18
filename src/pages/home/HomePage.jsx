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
</>);
}