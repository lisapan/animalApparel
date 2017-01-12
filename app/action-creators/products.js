import { RECEIVE_PRODUCTS, RECEIVE_CURRENT_PRODUCT, RECEIVE_RELATED_PRODUCTS } from '../constants';
import axios from 'axios';

export const receiveProducts = products => ({
    type: RECEIVE_PRODUCTS,
    products
});

export const receiveCurrentProduct = currentProduct => ({
    type: RECEIVE_CURRENT_PRODUCT,
    currentProduct
});

export const receiveRelatedProducts = relatedProducts => ({
    type: RECEIVE_RELATED_PRODUCTS,
    relatedProducts
});


export const getRelatedProducts = (id, name) => {

  return dispatch => {
    return axios.get(`/api/products/product/${id}/${name}`)
      .then(response => {
        dispatch(receiveRelatedProducts(response.data))
      })
      .catch(console.error)
  }
}

export const getProductById = productId => {
  return dispatch => {
    return axios.get(`/api/products/product/${productId}`)
      .then(response => {
        console.log("response data "+ response)
        dispatch(receiveCurrentProduct(response.data))
        return response.data.name
      })
      .then(name => {
        return getRelatedProducts(productId, name)
      })
      .catch(console.error)
  }
}

export const getProductsByTag = tag => {
  return dispatch => {
    return axios.get(`/api/products`)
      .then(response => {
        dispatch(receiveProducts(response.data.filter(elem => elem.tags.indexOf(tag) >= 0)))
      })
      .catch(console.error)
  }
}
