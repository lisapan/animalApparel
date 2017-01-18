import { SET_ORDER_ID } from './action-creators/constants'

const orderIdReducer = (order_id = '', action) => {
  switch (action.type) {
    case SET_ORDER_ID: return action.order_id
    default: return order_id
  }
}

export default orderIdReducer
