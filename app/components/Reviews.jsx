'use strict'

import React from 'react'

import React, { PropTypes } from 'react'
import ReviewForm from './ReviewForm'
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap'
const Reviews = (props) => {
  return (
    <div>
      <Row className="product-reviews">
        <h3>Reviews</h3>
      </Row>
      <Row>
        {
          props.reviews.map(review => (
            <Col className="review" key={ review.id } xs={12} sm={6} md={3} lg={3}>
              <h5>{ review.title }</h5>
              <p>{ review.message }</p>
            </Col>
          ))
        }
      </Row>
      <ReviewForm />
    </div>
  )
}

//Debugging tool. Will throw error if props are not correctly passed down.
Reviews.propTypes = {
  reviews: PropTypes.array.isRequired,
}

export default Reviews
