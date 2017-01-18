'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector, reset } from 'redux-form'
import { Grid, Row, Col } from 'react-bootstrap'

class ReviewForm extends Component {
  constructor(props) {
    super(props)
    this.doSubmit = this.doSubmit.bind(this)
  }

  doSubmit(values) {
    values.product_id = this.props.currentProduct.id
    this.props.handleAddReview(values)
    this.props.dispatch(reset('review'))
  }

  render() {
    return (
      <Row className="reviewForm">
        <form onSubmit={this.props.handleSubmit(this.doSubmit)}>
          <Col xs={12} sm={12} md={6} lg={6}>
            <label htmlFor="title">Title</label>
            <Field name="title" component="input" type="text"/>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <label htmlFor="stars">Stars</label>
            <Field name="comment" component="input" type="text"/>
          </Col>
          <Row>
            <label htmlFor="comment">Comment</label>
            <Field name="stars" component="input" type="text"/>
          </Row>
          <button type="submit">Submit</button>
        </form>
      </Row>
    )
  }
}

// Decorate the form component
ReviewForm = reduxForm({
  form: 'review'
})(ReviewForm)

const selector = formValueSelector('ReviewForm')

ReviewForm = connect(
  state => {
    const values = selector(state, 'title', 'comment', 'stars')
    if (values.stars) values.stars = values.stars.toString()
    return values
  }
)(ReviewForm)

export default ReviewForm;
