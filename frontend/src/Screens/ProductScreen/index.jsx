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
    dispatch(addToCart({ id: product._id, qty }));
    history.push("/cart")
  }
  return (
    <> {loading ? <SpinnerLoading /> : error ? <h2>{error}</h2> :
      <div className="productscreen">
        <div className="productscreen__left">
          <div className="left__image">
            <img src={product.aboutUrl}
              alt={product.name} />
            <h3>Aboout This Game: </h3>
            <p>{product.about}</p>
          </div>
          <div className="left__info">
            <p className="left__name">{product.name}</p>
            <p>Price: <strong>${product.price}</strong></p>
            <p>{product.description}</p>
            <p>Reviews: {product.reviews}</p>
            <p>Realease Date: {product.release}</p>
            <p>Developer: {product.developer}</p>
            <p>Genres: {product.genres && product.genres.map((genre) => (
              <span key={genre} className="left__genre">{genre}</span>
            ))}
            </p>
          </div>
        </div>
        <div className="productscreen__right">
          <div className="right__info">
            <p>Price:<span>${product.price}</span></p>
            <p>Status: {product.countInStock ? <span> In Stock </span> : <span> Out Stock</span>}</p>
            <div className = "info__select">Qty:
              <CustomizedSelects value={qty} handleChange={(e) => setQty(e.target.value)} dataArr={product.countInStock} />
            </div>
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
