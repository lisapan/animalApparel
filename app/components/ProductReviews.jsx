'use strict'

import React, { PropTypes } from 'react'
import { Row, Col } from 'react-bootstrap'

const Reviews = (props) => {
  const reviews = props.reviews || []
  return (
    <Row className="reviews">
      { reviews.length > 0 ?
        reviews.map(review => (
          <div key={review.id} >
            <Row className="reviewTitle">
              <Col xs={12} sm={12} md={12} lg={12}>
                <h5>{review.title}</h5>
              </Col>
            </Row>
            <Row className="reviewText">
              <Col xs={12} sm={12} md={12} lg={12}>
                <h4>{review.comment}</h4>
              </Col>
            </Row>
          </div>
        ))
        : <Col xs={12} sm={12} md={12} lg={12}>
            <h3>Be the first to review this product!</h3>
          </Col>
      }
    </Row>
)}

Reviews.propTypes = {
  reviews: PropTypes.array
}

export default Reviews
