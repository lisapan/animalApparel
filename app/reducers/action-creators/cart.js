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

//HELPER FUNCTION TO GRAB THE UPDATED CART AFTER UPDATE/DELETE
export const getCart = (orderId) => {
  return axios.get(`/api/cart/${orderId}`)
  .then(res => res.data)
}

export const getAndRenderCart = (cartId) => {
  return dispatch => {
    getCart(cartId)
    .then(res => res.data)
    .then(cart => dispatch(receiveCart(cart)))
    .catch(err => console.error(`Error: No cart found with id ${cartId}`))
  }
}

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
    .then(updatedCart => dispatch(receiveCart(updatedCart)))
    .catch(err => console.error(`Error: No item found with id ${itemId}. Unable to update item.`))
  }
}

export const deleteCartItemAndGetUpdatedCart = (cartId, itemId) => {
  return dispatch => {
    dispatch(deleteCartItem())

    return axios.delete(`/api/cart/${cartId}/${itemId}`)
    .then(res => res.data)
    .then(updatedCart => dispatch(receiveCart(updatedCart)))
    .catch(err => console.error(`Error: No item found with id ${itemId}. Unable to delete item.`))
  }
}
