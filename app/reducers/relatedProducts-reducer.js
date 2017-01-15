import {
  RECEIVE_RELATED_PRODUCTS
} from '../constants'

export default function (state = [], action) {


  switch (action.type) {

    case RECEIVE_RELATED_PRODUCTS:
      return action.relatedProducts;

    default:
      return state;

  }
}
