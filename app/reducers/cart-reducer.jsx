import {
  RECEIVE_CART_ITEM,
  UPDATE_CART_ITEM,
  REMOVE_CART_ITEM
} from '../constants';

const initialCartState = {
    list: {}
};

export default function (state = initialCartState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    //Add item to cart, which is an object whose keys are product id.
    case RECEIVE_CART_ITEM:
      newState.list[action.product.id.toString()] = action.product
      break;

    //Update the quantity on an item in the cart.
    case UPDATE_CART_ITEM:
      newState.list[action.product.id.toString()][quantity] = action.product.quantity
      break;

    //Remove an item from the cart.
    case REMOVE_CART_ITEM;
      delete newState.list[action.product.id.toString()]
      break;

    default:
      return state;

  }

  return newState;

}
