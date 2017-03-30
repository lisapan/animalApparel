import axios from 'axios'
import { browserHistory } from 'react-router';
import { SUBMIT_ORDER, RETRIEVE_SUBMITTED_ORDER } from './constants';

/* ------------     ACTION CREATORS     ------------------ */

export const submitOrder = () => ({
  type: SUBMIT_ORDER,
  loading: true
})

export const retrieveSubmittedOrder = submittedOrder => ({
  type: RETRIEVE_SUBMITTED_ORDER,
  loading: true,
  submittedOrder
})
/* ------------     THUNKS     ------------------ */

export const updateOrder = (orderId, values) => {
  return dispatch => {
    dispatch(submitOrder())
    return axios.put(`/api/cart/order/${orderId}`, values)
    .then(response => {
      console.log('action creator checkout.js to submittedOrder')
      console.log(response.data)
      dispatch(retrieveSubmittedOrder(response.data))
      browserHistory.push(`/orderConfirmation`)
    })
    .catch(console.error)
  }
}
