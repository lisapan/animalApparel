import { SET_ORDER_ID } from './action-creators/constants'

const orderIdReducer = (orderId = '', action) => {
  switch (action.type) {
    case SET_ORDER_ID: return action.orderId
    default: return orderId
  }
}

export default orderIdReducer
