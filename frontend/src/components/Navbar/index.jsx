import React, { useEffect } from 'react';
import { Link } from "react-router-dom"
import "./Navbar.css"
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../SearchBar';
import { getUser } from '../../redux/userSlice';

const Navbar = ({ handleToggle }) => {
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart
  const getCartCount = () => {
    return cartItems.length;
  }
  const userStore = useSelector(state => state.users)
  const {user} = userStore;
  const token = useSelector(state => state.token)
  const {jwtToken} = token;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser(jwtToken))
  }, [dispatch, jwtToken])
  return (
    <nav className="navbar">
      {/* logo */}
      <Link to={"/"} className="navbar__logo">
        <h2>Games Station</h2>
        <h3>Enjoy Your Time!</h3>
      </Link>
      {/* searchbar */}
      <SearchBar className="narbar__searchbar" />
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
           {/* <Link to="/login"> */}
          {user&&user.userName? <span style={{color: "rgb(88, 228, 39)", "font-size": "1.2rem"}}>{user.userName}</span> : <Link to="/login">
            Login
          </Link>
          }
        </li>
        <li>
          <Link to="/">
            About
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
