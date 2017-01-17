import { SET_ORDER_ID } from './constants'

/* ------------     ACTION CREATORS     ------------------ */
export const setOrderId = orderId => ({
  type: SET_ORDER_ID,
  orderId
})
