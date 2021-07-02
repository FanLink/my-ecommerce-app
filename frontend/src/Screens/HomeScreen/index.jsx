import React, { useEffect } from 'react';
import './HomeScreen.css'
import Product from '../../components/Product';
import { useSelector, useDispatch } from "react-redux"

import SpinnerLoading from '../../components/commons/Spinner';
import { fetchAllProducts } from '../../redux/productSlice';

const HomeScreen = () => {
  const dispatch = useDispatch()
  const getProducts = useSelector(state => state.products)
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [dispatch])

  return (
    <> {loading ? <SpinnerLoading /> : error ? <h2>{error}</h2> :
      <div className="homescreen">
        <h2 className="homescreen__title">Lastest Products</h2>
        <div className="homescreen_products">
          {products && products.map((product) => <Product key={product._id} product={product} />)}
        </div>
      </div>
    }</>
  );
};


HomeScreen.propTypes = {

};


export default HomeScreen;
