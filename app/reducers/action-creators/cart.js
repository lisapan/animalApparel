import axios from 'axios'
import { RECEIVE_CART, DELETE_CART, RECEIVE_CART_ITEM,
         UPDATE_CART_ITEM, DELETE_CART_ITEM } from './constants'

/* ------------     ACTION CREATORS     ------------------ */

export const receiveCart = cart => ({
  type: RECEIVE_CART,
  loading: false,
  cart
})

export const deleteCartItem = () => ({
  type: DELETE_CART,
  loading: true
})

export const receiveCartItem = () => ({
  type: RECEIVE_CART_ITEM,
  loading: true
})

export const updateCartItem = () => ({
  type: UPDATE_CART_ITEM,
  loading: true
})

export const removeCartItem = () => ({
  type: DELETE_CART_ITEM,
  loading: true
})

/* ------------     THUNKS     ------------------ */

export const getCart = () => {
  return dispatch => {
    return axios.get('/api/cart')
    .then(res => res.data)
    .then(orderItemArr => dispatch(receiveCart(orderItemArr)))
    .catch(console.error)
  }
}

export const deleteCart = (orderId) => {
  return dispatch => {
    dispatch(deleteCart())
    return axios.delete(`/api/cart/:${orderId}`)
  }
}

export const addCartItemAndGetUpdatedCart = (orderItemObj) => {
  return dispatch => {
    dispatch(receiveCartItem())
    return axios.post('/api/cart', orderItemObj)
    .then(res => res.data)
    .then(createdOrderItem => getCart())
    .then(res => res.data)
    .then(updatedCart => dispatch(receiveCart(updatedCart)))
  }
}

export const updateCartItemAndGetUpdatedCart = (itemId) => {
  return dispatch => {
    dispatch(updateCartItem())
    return axios.put(`/api/cart/:${itemId}`)
    .then(res => res.data)
    .then(updatedOrderItem => getCart())
    .then(res => res.data)
    .then(updatedCart => dispatch(receiveCart(updatedCart)))
  }
}

export const deleteCartItemAndGetUpdatedCart = (itemId) => {
  return dispatch => {
    dispatch(deleteCartItem())
    return axios.delete(`/api/cart/:${itemId}`).then(res => res.data)
    .then(deletedOrderItem => getCart())
    .then(res => res.data)
    .then(updatedCart => dispatch(receiveCart(updatedCart)))
  }
}
