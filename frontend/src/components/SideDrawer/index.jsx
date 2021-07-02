import React from 'react';
import "./SideDrawer.css";
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';

const SideDrawer = ({ show, click }) => {
  const sideDrawerClasses = ["sidedrawer"]
  if (show) {
    sideDrawerClasses.push("show")
  }
  const cart = useSelector(state => state.cart);
  const {cartItems} = cart
  const getCartCount = () => {
    return cartItems.length;
  }
  return (
    <div className={sideDrawerClasses.join(" ")}>
      <ul className="sidedrawer__links" onClick={click}>
        <li>
          <Link to="/cart">
              <i className="fas fa-shopping-cart"></i>
              <span>
              Cart <span className="sidedrawer__cartbadge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">
            shop
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideDrawer;
