import axios from "axios"
import constants from "../Constant";
const getProducts = (currentPage) => {
 return axios.get(`${constants.apis.products}?page=${currentPage}`) 
}
const getProductById =(id) => {
  return axios.get(`${constants.apis.products}/${id}`)
}

const searchProducts = (searchTerm) => {
  return axios.get(`${constants.apis.search}?filters=${searchTerm}`)
  
}

const getUser = (token) => {
  return axios.get(constants.apis.users, {
    headers: {
      'Authorization': token
    }
  } )
  
}

const registUser = (userInfor) => {
  return axios.post(constants.apis.register,userInfor)
}

const userLogin = (userInfor) => {
  return axios.post(constants.apis.login,userInfor)
}
export const Client = {
  getProducts,
  getProductById,
  getUser,
  registUser,
  userLogin,
  searchProducts
}