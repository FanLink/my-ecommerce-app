import React from 'react';
import { Link } from "react-router-dom";
import "./style.css";
import CustomizedSelects from '../commons/Select';

const CartItem = ({item,handleQtyChange,removeFromCartHandler}) => {
  const handleOnChange = (e)=>{
     handleQtyChange(item.product, e.target.value)
  }
  const handleOnClick = () => {
    removeFromCartHandler(item.product)
  }
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src={item.imageUrl}
          alt={item.name} />
      </div>
      <Link to={`/product/${item.product}`} className="cartItem__name">
        <p>{item.name}</p>
      </Link>
      <p className="cartitem__price">${item.price}</p>
      <CustomizedSelects value={item.qty} handleChange={handleOnChange} dataArr={item.countInStock} className="cartItem__select"/>
      <button onClick = {handleOnClick} className="cartItem__deleteBtn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default CartItem;
