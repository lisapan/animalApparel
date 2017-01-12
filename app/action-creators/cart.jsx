import { RECEIVE_CART_ITEM } from '../constants';
import axios from 'axios';

export const receiveCartItem = product => ({
    type: RECEIVE_CART_ITEM,
    product
});



