import React from 'react';
import { Link } from "react-router-dom"
import "./Navbar.css"
import { useSelector } from 'react-redux';

const Navbar = ({handleToggle}) => {
  const cart = useSelector(state => state.cart);
  const {cartItems} = cart
  const getCartCount = () => {
    return cartItems.length;
  }
  return (
    <nav className="navbar">
      {/* logo */}
      <Link to={"/"} className="navbar__logo">
        <h2>Welcome My Warsehouse!</h2>
      </Link>
      {/* links */}
      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="navbar__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">
            {/* Icon */}
            Shop
          </Link>
        </li>
      </ul>
      {/* hamburger menu */}
      <div className="hamburger__menu" onClick={handleToggle}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};


export default Navbar;
