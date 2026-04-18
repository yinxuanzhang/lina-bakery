import './homepage.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { TopHeader } from '../../components/TopHeader';
import { PagesBottom } from '../../components/PagesBottom';
import dayjs from 'dayjs';
import { centsTobuck } from '../../../utils/money';
import { Link } from 'react-router-dom';


export function HomePage({ API_BASE_URL,cartsTotalQuantities, loadCarts, loadPaymentSummary,cartsId }) {
  const [bannerIndex, setBannerIndex] = useState(0);
  const bannerPages = [
    '/images/lina-slider1.png',
    '/images/lina-slider2.png'
    
  ];
  
  const [products, setProducts] = useState([]);
  const[searchText,setSearchText]=useState('');
  function normalizeText(text){
    return String(text).toLowerCase().replace(/[-\s]/g,'');
  }
  const[addedCode,setAddedCode]=useState(null);
  function changeToAdded(item){
    setAddedCode(item.code);
    setTimeout(()=>{setAddedCode(null)},
    3000
  );
  }
  const filterProducts=products.map((productType)=>{
    const keyWords=normalizeText(searchText.trim());
    if(!keyWords){
      return productType;
    }
    const titleMatched=normalizeText(productType.title).includes(keyWords);
    if(titleMatched){
      return productType;
    }
    const filteredItems=productType.items.filter((item)=>{
      return normalizeText(item.code).includes(keyWords);
    });
    if (filteredItems.length==0){
      return null;
    }
    return{
      ...productType,
      items:filteredItems
    };

  }).filter(Boolean);
  useEffect(() => {
    const timer = setInterval(() => {
      setBannerIndex((prev) =>
        prev === bannerPages.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    async function loadProducts() {
      const response = await axios.get(`${API_BASE_URL}/api/products`);
      setProducts(response.data);
    }

    loadProducts();

    return () => clearInterval(timer);
  }, []);

  async function addToCart(item,cartsId) {
    const request = await axios.post(`${API_BASE_URL}/api/carts`, 
      {cartsId:cartsId,
      items:{
      code: item.code,
      price: item.price,
      image: item.image,
      quantity: 1,
      estimatedCompletionDate: dayjs().add(5, 'day').format('MMMM D')
    }
  });

    return request.data;
  }

  return (
    <>
      <div className="hero-section">
        <div className="hero-slider">
          {bannerPages.map((item, index) => {
            return (
              <div
                className={`fade-slide ${bannerIndex === index ? 'active-slide' : ''}`}
                key={index}
              >
                <img src={item} alt="Lina Bakery banner" />
              </div>
            );
          })}

          <TopHeader cartsTotalQuantities={cartsTotalQuantities} searchText={searchText} setSearchText={setSearchText}/>

          <div className="main-nav">
            <div className="lina-bakery-logo">
              <img src="/images/lina-logo.png" alt="Lina Bakery logo" />
            </div>

            <ul className="ul-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/delivery-page">Delivery Information</Link></li>
              <li><Link to="/about-lina">About Lina</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="middle-section-banner">
        <div className="leftPicture">
          <img src="/images/banner-left.png" alt="Handmade cakes" />
          <p>Handmade</p>
        </div>

        <div className="rightPicture">
          <img src="/images/banner-right.png" alt="Freshly made cakes" />
          <p>Freshly Made</p>
        </div>
      </div>

      <div className="products-section" id='products-section'>
        {filterProducts.map((productType) => {
          return (
            <section
              className="product-series-section"
              key={productType.title}
            >
              <div className="series-header">
                <h2 className="series-title">{productType.title}</h2>
              </div>

              <div className="products-Gride">
                {productType.items.map((item) => {
                  const canAddToCart = typeof item.price === 'number';

                  return (
                    <div className="product" key={item.code}>
                      <img src={item.image} alt={item.code} />

                      <div className="each-product-info">
                        <div className="product-code">{item.code}</div>

                        <div className="product-price">
                          {typeof item.price === 'number'
                            ? `$${centsTobuck(item.price)}`
                            : item.price}
                        </div>

                        {item.size && (
                          <div className="product-note">{item.size}</div>
                        )}

                        {canAddToCart ? (

                         <button
                            onClick={async () => {
                              await addToCart(item,cartsId);
                              await loadCarts();
                              await loadPaymentSummary();
                              changeToAdded(item)
                            }} 
                          >
                            {addedCode==item.code? 'Added' :'Add'}
                          </button>) 
                          
                         : (
                          <button disabled>
                            Contact Us
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      <div className="new-discount-product">
        <div>
          <img src="/images/slide2.webp" alt="Lina Bakery featured cake" />
        </div>
      </div>

      <PagesBottom />
    </>
  );
}