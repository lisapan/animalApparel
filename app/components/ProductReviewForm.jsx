'use strict'

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector, reset } from 'redux-form'
import { addReview } from '../reducers/action-creators/review'
import { Row, Col } from 'react-bootstrap'

class ReviewForm extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  submit(values) {
    values.product_id = this.props.currentProduct.id
    this.props.handleAddReview(values)
    this.props.resetReview()
  }

  render() {
    return (
      <Row className="reviewForm">
        <h3>Leave your review:</h3>
        <form onSubmit={this.props.handleSubmit(this.submit)}>
          <Col xs={12} sm={12} md={6} lg={6}>
            <label htmlFor="title">Title</label>
            <Field name="title" component="input" type="text" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <label htmlFor="comment">Comment</label>
            <Field name="comment" component="input" type="text" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <label htmlFor="stars">Stars</label>
            <Field name="stars" component="input" type="text" />
          </Col>
          <button type="submit">Submit</button>
        </form>
      </Row>
    )
  }
}

ReviewForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleAddReview: PropTypes.func.isRequired,
  resetReview: PropTypes.func.isRequired,
  currentProduct: PropTypes.object.isRequired
}

// Decorate the form component
ReviewForm = reduxForm({
  form: 'review'
})(ReviewForm)

const selector = formValueSelector('ReviewForm')

const mapStateToProps = state => {
  const values = selector(state, 'title', 'comment', 'stars')
  if (values.stars) values.stars = values.stars.toString()
  return values
}

const mapDispatchToProps = dispatch => ({
  resetReview: () => dispatch(reset('review')),
  handleAddReview: newReview => dispatch(addReview(newReview))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)
