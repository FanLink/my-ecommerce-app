import React, { useEffect, useState } from 'react';
import './style.css'
import Product from '../../components/Product';
import { useSelector, useDispatch, batch } from "react-redux"

import SpinnerLoading from '../../components/commons/Spinner';
import { fetchAllProducts } from '../../redux/productSlice';
import Pagination from "@material-ui/lab/Pagination"

const HomeScreen = () => {
  const dispatch = useDispatch();
  const getProducts = useSelector(state => state.products)
  const { products, loading, error, page, totals } = getProducts;
  const [currentPage, setCurrentPage] = useState(page);

  useEffect(() => {
    batch(() => {
      dispatch(fetchAllProducts(currentPage))
    })
  }, [dispatch, currentPage])
  return (
    <>{loading ? <SpinnerLoading /> : error ? <h2>{error}</h2> :
    <div className="homescreen">
      {products.length === 0 ? <div className="homescreen__noresults">{"No results were returned for that search"}</div> :
          <div className="homescreen_products">
            {products.map((product) => <Product key={product._id} product={product} />)}
          </div>
      }
      {products.length !== 0 && <Pagination className="products__pagination" page={currentPage} onChange={(e, page) => setCurrentPage(page)} count={totals} variant="outlined" color="primary" />}
    </div>
    }</>
  );
};


HomeScreen.propTypes = {

};


export default HomeScreen;
