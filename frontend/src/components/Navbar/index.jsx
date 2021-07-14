import React, { useEffect } from 'react';
import { Link, useRouteMatch } from "react-router-dom"
import "./Navbar.css"
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../SearchBar';
import { getUser, logOutUser } from '../../redux/userSlice';
import UserMenu from '../UserMenu';
import { searchProducts } from '../../redux/productSlice';

const Navbar = ({ handleToggle }) => {
  const match = useRouteMatch();
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
  const handleLogout = () => {
    dispatch(logOutUser())
  }
  useEffect(() => {
    dispatch(getUser(jwtToken))
  }, [dispatch, jwtToken])
  const onSearchSubnit = (value) => {
    dispatch(searchProducts(value))
  }
  return (
    <nav className="navbar">
      {/* logo */}
      <Link to={"/"} className="navbar__logo">
        <h2>Games Station</h2>
        <h3>Enjoy Your Time!</h3>
      </Link>
      {/* searchbar */}
      {match.isExact ? <SearchBar className="narbar__searchbar" onSearchSubnit= {onSearchSubnit}/> : ""}
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
          {user&&user.userName? <UserMenu userName = {user.userName}
          handleLogout = {handleLogout} /> : <Link to="/login">
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
