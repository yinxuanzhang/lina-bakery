import { FaSearch, FaUser, FaShoppingBag, FaGlobe } from "react-icons/fa";
import { useState } from "react";
import { Link } from 'react-router-dom';
import './TopHeader.css';

export function TopHeader({ cartsTotalQuantities }) {
  const [openLanguageMenu, setOpenLanguageMenu] = useState(false);
  const [openSearchButton, setOpenSearchButton] = useState(false);

  return (
    <div className="top-header">
      <div className="top-header-cad">
        <p>$CAD</p>
      </div>

      <div className="language-dropdown-wrapper">
        <button
          className="language-dropdown-button"
          onClick={() => {
            setOpenLanguageMenu(!openLanguageMenu);
          }}
        >
          <FaGlobe />
        </button>

        {openLanguageMenu && (
          <div className="language-dropdown">
            <button
              className="language-option"
              onClick={() => {
                setOpenLanguageMenu(false);
              }}
            >
              中文
            </button>
            <button
              className="language-option"
              onClick={() => {
                setOpenLanguageMenu(false);
              }}
            >
              English
            </button>
          </div>
        )}
      </div>

      <div className="search-button-wrapper">
        {openSearchButton && (
          <input
            className="search-input-box"
            placeholder="Search Products"
          />
        )}

        <button
          onClick={() => {
            setOpenSearchButton(!openSearchButton);
          }}
        >
          <FaSearch />
        </button>
      </div>

      <div className="user-sign-in">
        <Link to="/user">
          <button>
            <FaUser />
          </button>
        </Link>
      </div>

      <div className="go-to-order-page">
        <Link to="/checkout">
          <button className="cart-button">
            <FaShoppingBag />
            <span className="cart-quantity">{cartsTotalQuantities}</span>
          </button>
        </Link>
      </div>
    </div>
  );
}