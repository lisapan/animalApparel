import { RECEIVE_PRODUCTS } from './action-creators/constants'

export default function (state = [], action) {
  switch (action.type) {

    case RECEIVE_PRODUCTS: return action.products;

    default: return state;

  }
}
