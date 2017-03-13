'use strict'

'use strict'

import React, { PropTypes } from 'react'
import ReviewForm from './ProductReviewForm'

const Reviews = props => {
  const reviews = props.reviews || []
  return (
    <div className="reviews">
      { reviews.length > 0 ?
        reviews.map(review => (
          <div key={review.id} className="review">
            <p className="italic reviewHeading">
              {`${review.created_at.substring(0, 10)}  -  ${review.title}`}
            </p>
            <p className="reviewText">{review.comment}</p>
          </div>
        ))
        : <p>Be the first to review this product!</p>
      }
      <ReviewForm currentProduct={props.currentProduct} />
    </div>
)}

Reviews.propTypes = {
  reviews: PropTypes.array,
  currentProduct: PropTypes.object.isRequired
}

export default Reviews
