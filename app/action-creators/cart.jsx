import { RECEIVE_CART_ITEM, UPDATE_CART_ITEM, REMOVE_CART_ITEM } from '../constants';
import axios from 'axios';

export const receiveCartItem = product => ({
    type: RECEIVE_CART_ITEM,
    product
})

export const updateCartItem = product => ({
    type: UPDATE_CART_ITEM,
    product
})

export const removeCartItem = product => ({
    type: REMOVE_CART_ITEM,
    product
})


