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

export const getAndRenderCart = cartId => dispatch => {
  return axios.get(`/api/cart/${cartId}`)
  .then(res => dispatch(receiveCart(res.data)))
  .catch(err => console.error(`Error: No cart found with id ${cartId}`))
}

export const addCartItemAndGetUpdatedCart = (orderItemObj) => {
  return dispatch => {
    dispatch(receiveCartItem())

    return axios.post('/api/cart', orderItemObj)
    .then(res => dispatch(receiveCart(res.data)))
    .catch(console.error)
  }
}

export const updateCartItemAndGetUpdatedCart = (itemChanges) => {
  return dispatch => {
    dispatch(updateCartItem())

    return axios.put('/api/cart/', itemChanges)
    .then(res => dispatch(receiveCart(res.data)))
    .catch(err => console.error(`Error: No item found with id ${itemId}. Unable to update item.`))
  }
}

export const deleteCartItemAndGetUpdatedCart = (cartId, itemId) => {
  return dispatch => {
    dispatch(deleteCartItem())

    return axios.delete(`/api/cart/${cartId}/${itemId}`)
    .then(res => dispatch(receiveCart(res.data)))
    .catch(err => console.error(`Error: No item found with id ${itemId}. Unable to delete item.`))
  }
}
