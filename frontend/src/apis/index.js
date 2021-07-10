import axios from "axios"
import constants from "../Constant"
const getProducts = () => {
 return axios.get(constants.apis.products) 
}
const getProductById =(id) => {
  return axios.get(`${constants.apis.products}/${id}`)
}

export const Client = {
  getProducts,
  getProductById
}