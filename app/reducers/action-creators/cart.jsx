'use strict'

import axios from 'axios'
import { RECEIVE_CART, RECEIVE_CART_ITEM,
         UPDATE_CART_ITEM, DELETE_CART_ITEM } from './constants'


/* ------------     ACTION CREATORS     ------------------ */

export const receiveCart = cart => ({
  type: RECEIVE_CART,
  loading: false,
  cart
})

export const receiveCartItem = () => ({
  type: RECEIVE_CART_ITEM,
  loading: true
})

export const updateCartItem = () => ({
  type: UPDATE_CART_ITEM,
  loading: true
})

export const deleteCartItem = () => ({
  type: DELETE_CART_ITEM,
  loading: true
})

/* ------------     THUNKS     ------------------ */

export const getAndRenderCart = () => dispatch => {
  return axios.get(`/api/cart`)
  .then(res => dispatch(receiveCart(res.data)))
  .catch(err => console.error(err))
}

export const addCartItemAndGetUpdatedCart = orderItemObj => {
  return dispatch => {
    dispatch(receiveCartItem())

    return axios.post('/api/cart', orderItemObj)
    .then(res => dispatch(receiveCart(res.data)))
    .catch(err => console.error(err))
  }
}

export const updateCartItemAndGetUpdatedCart = (itemId, itemChanges) => {
  return dispatch => {
    dispatch(updateCartItem())

    return axios.put(`/api/cart/${itemId}`, itemChanges)
    .then(res => dispatch(receiveCart(res.data)))
    .catch(err => console.error(err))
  }
}

export const deleteCartItemAndGetUpdatedCart = itemId => {
  return dispatch => {
    dispatch(deleteCartItem())

    return axios.delete(`/api/cart/${itemId}`)
    .then(res => dispatch(receiveCart(res.data)))
    .catch(err => console.error(err))
  }
}
