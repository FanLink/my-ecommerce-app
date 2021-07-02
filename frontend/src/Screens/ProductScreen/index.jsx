import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./ProductScreen.css"
import SpinnerLoading from '../../components/commons/Spinner';
import CustomizedSelects from '../../components/commons/Select';
import { fetchProductById } from '../../redux/productDetailsSlice';
import { addToCart } from '../../redux/cartSlice';
const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const getProductDetails = useSelector(state => state.product);
  const { loading, error, product } = getProductDetails;
  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(fetchProductById(match.params.id))
    }
  }, [dispatch, product, match]);
  const handleAddToCart = () => {
    dispatch(addToCart({id: product._id, qty}));
    history.push("/cart")
  }
  return (
    <> {loading ? <SpinnerLoading /> : error ? <h2>{error}</h2> :
      <div className="productscreen">
        <div className="productscreen__left">
          <div className="left__image">
            <img src={product.imageUrl}
              alt={product.name} />
          </div>
          <div className="left__info">
            <p className="left__name">{product.name}</p>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
          </div>
        </div>
        <div className="productscreen__right">
          <div className="right__info">
            <p>Price:<span>${product.price}</span></p>
            <p>Status: {product.countInStock ? <span> In Stock </span> : <span> Out Stock</span>}</p>
            <p>Qty
              <CustomizedSelects value={qty} handleChange={(e) => setQty(e.target.value)} dataArr={product.countInStock} />
            </p>
            <p>
              <button type="button" onClick={handleAddToCart}>Add to Cart</button>
            </p>
          </div>
        </div>
      </div>
    }
    </>
  );
};


export default ProductScreen;
