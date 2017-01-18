import axios from 'axios'
import { REQUEST_PRODUCTS, RECEIVE_PRODUCTS, REQUEST_CURRENT_PRODUCT,
         RECEIVE_CURRENT_PRODUCT, REQUEST_RELATED_PRODUCTS,
         RECEIVE_RELATED_PRODUCTS } from './constants'

/* ------------     ACTION CREATORS     ------------------ */

export const requestProducts = () => ({
  type: REQUEST_PRODUCTS,
  loading: true
})

export const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  loading: false,
  products
})

export const requestCurrentProduct = () => ({
  type: REQUEST_CURRENT_PRODUCT,
  loading: true
})

export const receiveCurrentProduct = currentProduct => ({
  type: RECEIVE_CURRENT_PRODUCT,
  loading: false,
  currentProduct
})

export const requestRelatedProducts = () => ({
  type: REQUEST_RELATED_PRODUCTS,
  loading: true
})

export const receiveRelatedProducts = relatedProducts => ({
  type: RECEIVE_RELATED_PRODUCTS,
  loading: false,
  relatedProducts
})

/* ------------     THUNKS     ------------------ */

export const getProductById = productId => {
  return dispatch => {
    dispatch(requestCurrentProduct())
    return axios.get(`/api/products/product/${productId}`)
    .then(response => {
      dispatch(receiveCurrentProduct(response.data))
      return response.data.name
    })
    .then(name => {
      const newName = name.slice(name.indexOf(' ') + 1)
      dispatch(requestRelatedProducts())
      return axios.get(`/api/products/product/${productId}/${newName}`)
    })
    .then(response => {
      dispatch(receiveRelatedProducts(response.data))
    })
    .catch(console.error)
  }
}

export const getProductsByTag = tag => {
  return dispatch => {
    dispatch(requestProducts())
    return axios.get(`/api/products`)
    .then(response => {
      dispatch(receiveProducts(response.data.filter(elem => elem.tags.indexOf(tag) >= 0)))
    })
    .catch(console.error)
  }
}
