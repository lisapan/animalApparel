import { RECEIVE_CURRENT_PRODUCT } from './action-creators/constants'

export default function (state = {}, action) {
  switch (action.type) {

    case RECEIVE_CURRENT_PRODUCT:
      return action.currentProduct;

    default:
      return state;

  }
}
