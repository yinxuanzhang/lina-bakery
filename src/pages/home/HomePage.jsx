import './homepage.css'
import axios from 'axios';
import { useState,useEffect } from 'react';
import { TopHeader } from '../../componebts/TopHeader';
import { PagesBottom } from '../../componebts/PageSBottom';
import dayjs from 'dayjs';
import { centsTobuck } from '../../../utils/money';
import { Link } from 'react-router-dom';
export function HomePage({cartsTotalQuantities,loadCarts,loadPaymentSummary}){
  
  const[bannerIndex,setBannerIndex]=useState(0);
  const bannerPages=["/images/lina-slider1.png",
    "/images/lina-slider2.png",
    "/images/lina-slider3.png",
    
  ]
  const [products,setProducts]=useState([]);
  
  useEffect(()=>{
    const timer=setInterval(()=>{
      setBannerIndex((prev)=>prev===bannerPages.length-1 ? 0:prev+1);
    },3000);
    async function loadProducts(){
      const response= await axios.get('http://localhost:3000/api/products');
      setProducts(response.data);
    }
    loadProducts();
    return ()=>clearInterval(timer);
  },[]);
  async function addToCart(item){
    const request=await axios.post('http://localhost:3000/api/carts',{
      "code":item.code,
      "price":item.price,
      "image":item.image,
      "quantity":1,
      "estimatedCompletionDate": dayjs().add(3,'day').format('MMMM D')
    });
    return request.data;
  }
  return(<>
  
  <div className="hero-section">
  <div className="hero-slider">
    {bannerPages.map((item,index)=>{
          return(
            <div className={`fade-slide ${bannerIndex === index ? 'active-slide' : ''}`} key={index}>
            <img src={item} alt=""/>
          </div>
          )
    })}
  <TopHeader cartsTotalQuantities={cartsTotalQuantities}/>
  <div className="main-nav">
      <div className="lina-bakery-logo"><img src="/images/lina-logo.png" /></div>
      <ul className="ul-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/delivery-page">Delivery Information</Link></li>
        <li><Link to="/about-lina">About Lina</Link></li>
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
    {products.map((productType)=>{
     return productType.items.map((item)=>{
      
      return(
      <>
      
      <div className="product" key={item.id}>
      <img src={item.image} alt="" />
      <div className='each-product-info'>
        <div>{item.code}</div>
        <div>${centsTobuck(item.price)}</div>
        <button onClick={async()=>{
          await addToCart(item);
          await loadCarts();
          await loadPaymentSummary();
        }}>Add</button>
      </div>
      </div>
      </>);
      });
    })}
  </div>

  <div className='new-discount-product'>
    <div><img src="/images/slide2.webp" alt="" /></div>
  </div>
  <PagesBottom/>
</>);
}