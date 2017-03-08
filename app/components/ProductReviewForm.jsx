'use strict'

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector, reset } from 'redux-form'
import { addReview } from '../reducers/action-creators/review'
import { Row, Col, Button } from 'react-bootstrap'

class ReviewForm extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  submit(review) {
    event.preventDefault()
    review.product_id = this.props.currentProduct.id
    review.category = this.props.currentProduct.category
    console.log(review)
    this.props.handleAddReview(review)
    this.props.resetReview()
  }

  render() {
    return (
      <Row >
        <form className="reviewForm" onSubmit={this.props.handleSubmit(this.submit)}>
          <Col xs={12} sm={12} md={12} lg={12}>
            <h3 className="form-title">Leave your review:</h3>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            <label htmlFor="title">Title</label>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Field name="title" component="input" type="text" />
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            <label htmlFor="comment">Comment</label>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Field name="comment" component="textarea" type="text" />
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Button
              bsStyle="primary"
              bsSize="small"
              type="submit">
              { this.props.loading ? 'Submitting review...' : 'Submit Review' }
            </Button>
          </Col>
        </form>
      </Row>
    )
  }
}

ReviewForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleAddReview: PropTypes.func.isRequired,
  resetReview: PropTypes.func.isRequired,
  currentProduct: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
}

// Decorate the form component
ReviewForm = reduxForm({
  form: 'review'
})(ReviewForm)

const selector = formValueSelector('ReviewForm')

const formValues = state => {
  const values = selector(state, 'title', 'comment')
  return values
}

const mapStateToProps = state => ({
  values: formValues(state),
  loading: state.loading
})

const mapDispatchToProps = dispatch => ({
  resetReview: () => dispatch(reset('review')),
  handleAddReview: newReview => dispatch(addReview(newReview))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)
