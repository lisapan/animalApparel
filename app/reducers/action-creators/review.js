import axios from 'axios'
import { CREATE_REVIEW } from './constants'
import { getProductById } from './products'

/* ------------     ACTION CREATORS     ------------------ */

export const createReview = () => ({
  type: CREATE_REVIEW,
  loading: true
})

/* ------------     THUNKS     ------------------ */

export const addReview = newReview => {
  return dispatch => {
    dispatch(createReview())
    return axios.post('/api/reviews', newReview)
    .then(response => dispatch(getProductById(newReview.product_id)))
    .then(response => console.log('We did it!'))
    .catch(err => console.error(`Creating review: ${newReview} unsuccesful`, err))
  }
}
