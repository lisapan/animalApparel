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

export const getCart = (orderId) => {
  return dispatch => {
    return axios.get(`/api/cart/${orderId}`)
    .then(res => res.data)
    .then(cart => dispatch(receiveCart(cart)))
    .catch(console.error)
  }
}

//TODO
// export const deleteCart = (orderId) => {
//   return dispatch => {
//     dispatch(deleteCart())
//     return axios.delete(`/api/cart/:${orderId}`)
//     .then(deletedCart => )
//   }
// }

export const addCartItemAndGetUpdatedCart = (orderItemObj) => {
  return dispatch => {
    dispatch(receiveCartItem())
    return axios.post('/api/cart', orderItemObj)
    .then(res => res.data)
    .then(cart => dispatch(receiveCart(cart)))
    .catch(console.error)
  }
}

export const updateCartItemAndGetUpdatedCart = (itemChanges) => {
  return dispatch => {
    dispatch(updateCartItem())
    return axios.put('/api/cart/', itemChanges)
    .then(res => res.data)
    .then(updatedOrderItem => getCart())
    .then(res => res.data)
    .then(updatedCart => dispatch(receiveCart(updatedCart)))
    .catch(console.error)
  }
}

export const deleteCartItemAndGetUpdatedCart = (itemId) => {
  return dispatch => {
    dispatch(deleteCartItem())
    return axios.delete(`/api/cart/`).then(res => res.data)
    .then(deletedOrderItem => getCart())
    .catch(console.error)
  }
}
