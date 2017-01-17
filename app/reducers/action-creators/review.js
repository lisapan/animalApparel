import axios from 'axios'
import { CREATE_REVIEW, RECEIVE_REVIEWS } from './constants'

/* ------------     ACTION CREATORS     ------------------ */

export const createReview = () => ({
  type: CREATE_REVIEW,
  loading: true
})

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  loading: false,
  reviews
})

/* ------------     THUNKS     ------------------ */

export const getReviews = (productId) => {
  return dispatch => {
    return axios.get(`/api/reviews/${productId}`)
      .then(response => dispatch(receiveReviews(response.data)))
      .catch(err => console.error(`Couldn't find reviews: ${err}`))
  }

}

export const addReview = (newReview, productId) => {
  return dispatch => {
    dispatch(createReview())
    return axios.post('/api/reviews', newReview)
    .then(() => {
      dispatch(getReviews(productId))
    })
    .catch(err => console.error(`Creating review: ${newReview} unsuccesful`, err))
  }
}
