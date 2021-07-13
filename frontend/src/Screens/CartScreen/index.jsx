import React, { useEffect } from 'react';
import "./CartScreen.css"
import { Link } from 'react-router-dom';
import CartItem from '../../components/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import CountUp from 'react-countup';
import { changeQty, removeFromCart } from '../../redux/cartSlice';
import SpinnerLoading from '../../components/commons/Spinner';
const CartScreen = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart)
  const { cartItems, loading } = cart;
  const handleQtyChange = (id, qty) => {
    dispatch(changeQty({ id, qty }))
  }
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }
  const getSubTotal = () => {
    let count = 0;
    if (cartItems.length > 0) {
      cartItems.map(item => count += Number(item.qty))
    }
    return count;
  };
  const getTotalPrice = () => {
    let totalPrice = 0;
    if (cartItems.length > 0) {
      cartItems.map(item => totalPrice += item.price * Number(item.qty))
    }
    return totalPrice;
  }
  useEffect(() => { }, []);
  return (
    <> {loading ? <SpinnerLoading /> :
      <div className="cartscreen">

        <div className="cartscreen__left">
          <h2>Shopping Cart</h2>
          {cartItems.length === 0 ? <div>Your Cart is Empty <Link to="/">Go Back</Link></div> :
            cartItems.map(item => <CartItem
              key={item.product}
              item={item}
              handleQtyChange={handleQtyChange}
              removeFromCartHandler={removeFromCartHandler} />)}
        </div>
        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Subtotal {getSubTotal()} items</p>
            <p>${getTotalPrice()}</p>
          </div>
          <div>
            <button>Proceed To Checkout</button>
          </div>
        </div>
      </div>
    } </>
  );
};


export default CartScreen;
