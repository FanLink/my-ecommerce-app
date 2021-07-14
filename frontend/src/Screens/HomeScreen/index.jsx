import React, { useEffect } from 'react';
import './HomeScreen.css'
import Product from '../../components/Product';
import { useSelector, useDispatch, batch } from "react-redux"

import SpinnerLoading from '../../components/commons/Spinner';
import { fetchAllProducts } from '../../redux/productSlice';

const HomeScreen = () => {
  const dispatch = useDispatch()
  const getProducts = useSelector(state => state.products)
  const { products, loading, error } = getProducts;

  useEffect(() => {
    batch(() => {
      dispatch(fetchAllProducts())
    })
  }, [dispatch])
  return (
    <div> {loading ? <SpinnerLoading /> : error ? <h2>{error}</h2> : <>
      <div className="homescreen">
        {products.length === 0 ? <div className="homescreen__noresults">{"No results were returned for that search"}</div> : 
        <div className="homescreen_products">
          {products.map((product) => <Product key={product._id} product={product} />)}
        </div>}
      </div>
    </>
    }</div>

  );
};


HomeScreen.propTypes = {

};


export default HomeScreen;
