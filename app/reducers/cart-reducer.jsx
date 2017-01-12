import {
  RECEIVE_CART_ITEM
} from '../constants';


const initialCartState = {
  list: {}
};

export default function (state = initialCartState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_CART_ITEM:
      newState.list[action.product.id.toString()] = action.product
      break;

    default:
      return state;

  }

  return newState;

}
