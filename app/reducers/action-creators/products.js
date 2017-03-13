'use strict'

import axios from 'axios'
import { REQUEST_PRODUCTS, RECEIVE_PRODUCTS, REQUEST_CURRENT_PRODUCT,
         RECEIVE_CURRENT_PRODUCT, RECEIVE_RELATED_PRODUCTS } from './constants'

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
  currentProduct
})

export const receiveRelatedProducts = relatedProducts => ({
  type: RECEIVE_RELATED_PRODUCTS,
  loading: false,
  relatedProducts
})

/* ------------     THUNKS     ------------------ */

export const getProductById = (category, productId) => dispatch => {
  dispatch(requestCurrentProduct())
  return axios.get(`/api/products/${category}/${productId}`)
  .then(response => {
    dispatch(receiveCurrentProduct(response.data.product))
    dispatch(receiveRelatedProducts(response.data.relatedProducts))
  })
  .catch(err => console.error(err))
}

export const getSaleProducts = () => dispatch => {
  dispatch(requestProducts())
  return axios.get('/api/products/sale')
  .then(response => dispatch(receiveProducts(response.data)))
  .catch(err => console.error(err))
}

export const getSaleProductsByCategory = category => dispatch => {
  dispatch(requestProducts())
  return axios.get(`/api/products/sale/${category}`)
  .then(response => dispatch(receiveProducts(response.data)))
  .catch(err => console.error(err))
}

export const getProductsByCategory = category => dispatch => {
  dispatch(requestProducts())
  return axios.get(`/api/products/${category}`)
  .then(response => dispatch(receiveProducts(response.data)))
  .catch(err => console.error(err))
}
