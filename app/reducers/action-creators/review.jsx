import axios from 'axios'
import { CREATE_REVIEW } from './constants'
import { getProductById } from './products'

/* ------------     ACTION CREATORS     ------------------ */

export const createReview = () => ({
  type: CREATE_REVIEW,
  loading: true
})

/* ------------     THUNKS     ------------------ */

export const addReview = newReview => dispatch => {
  dispatch(createReview())
  return axios.post('/api/reviews', newReview)
  .then(response => dispatch(getProductById(newReview.category, newReview.product_id)))
  .catch(err => console.error(`Creating review: ${newReview} unsuccesful.\n${err}`))
}
