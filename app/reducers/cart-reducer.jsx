import { RECEIVE_CART } from './action-creators/constants';

export default function cartReducer(cart = {}, action) {
  switch (action.type) {
    case RECEIVE_CART: return action.cart
    default: return cart
  }
}
