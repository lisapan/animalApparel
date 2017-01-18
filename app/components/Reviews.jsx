'use strict'

import React, { PropTypes } from 'react'
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap'
import { Rating } from 'react-rating'

const Reviews = (props) => {
  return (
    <Grid className= "reviewGrid">
      {
        props.reviews && props.reviews.map(review => {
          return (
            <Row key={ review.id }>
              <Row className="reviewTitle">
                <Col>
                  <h5>{ review.title }</h5>
                </Col>
                <Col>
                </Col>
              </Row>
              <Row className="reviewComment">
                <h4>{ review.comment }</h4>
              </Row>
            </Row>
          )
        })
      }
    </Grid>
  )
}

export default Reviews
