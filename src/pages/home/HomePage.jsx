import './homepage.css'
import { FiSearch, FiUser, FiShoppingBag, FiMessageCircle, FiGlobe } from "react-icons/fi";
import { useState } from 'react';

export function HomePage(){
  const[openLanguageMenue,setOpenLanguageMenue]=useState(false);
  return(<>
  
  <div className="hero-section">
  <div className="hero-slider">
    <div className="slide-page"><img src="/images/lina-slider1.png" alt=""/></div>
    <div className="top-header" >
    <div className='top-header-cad'>$CAD</div>
    <div className='language-dropdown-wrapper'>
      <button className='language-dropdown-button'onClick={()=>{setOpenLanguageMenue(!openLanguageMenue)}}><FiGlobe /></button>
      {openLanguageMenue&&(<div className='language-dropdown'>
        <button className='language-option' onClick={()=>{setOpenLanguageMenue(false)}}>
          中文
        </button>
        <button className='language-option' onClick={()=>setOpenLanguageMenue(false)}>
          English
        </button>
      </div>)}
    </div>
    
    
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
      <div>J-01</div>
      <div>$85</div>
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

  <div className='new-discount-product'>
    <div><img src="/images/slide2.webp" alt="" /></div>
  </div>
  <div className='pages-bottom'>
    <div className='footer-information'>
      <div className='about-us'>
        <div className='footer-header'>About us</div>
        <div className='footer-single-information'>address:7288 188 street Surrey BC</div>
        <div className='footer-single-information'>email:1789893950@qq.com</div>
        <div className='footer-single-information'>owner:Lina Ma</div>
      </div>

   

      <div className='contact-with-us'>
        <div className='footer-header'>Contact Us</div>
        <div className='footer-single-information'>phone</div>
        <div className='footer-single-information'>Business Hours | 7:00 - 21:30</div>
        <div className='footer-single-information'>Phone | 7785133120</div>
        <div className='footer-single-information'>Email:1789893950@qq.com</div>
        <div className='footer-single-information'><a href='https://www.instagram.com/'>Instgram</a></div>
      </div>
    </div>
  </div>
</>);
}