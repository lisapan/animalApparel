import { RECEIVE_CART, DELETE_CART, RECEIVE_CART_ITEM,
         UPDATE_CART_ITEM, DELETE_CART_ITEM, CREATE_USER,
         INITIALIZE_USERS, REQUEST_PRODUCTS, RECEIVE_PRODUCTS,
         REQUEST_CURRENT_PRODUCT, RECEIVE_RELATED_PRODUCTS,
         AUTHENTICATED, CREATE_REVIEW } from './action-creators/constants'

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case RECEIVE_CART: return action.loading
    case DELETE_CART: return action.loading
    case RECEIVE_CART_ITEM: return action.loading
    case UPDATE_CART_ITEM: return action.loading
    case DELETE_CART_ITEM: return action.loading
    case AUTHENTICATED: return action.loading
    case INITIALIZE_USERS: return action.loading
    case CREATE_USER: return action.loading
    case REQUEST_PRODUCTS: return action.loading
    case RECEIVE_PRODUCTS: return action.loading
    case REQUEST_CURRENT_PRODUCT: return action.loading
    case RECEIVE_RELATED_PRODUCTS: return action.loading
    case CREATE_REVIEW: return action.loading

    default: return state
  }
}

export default loadingReducer
