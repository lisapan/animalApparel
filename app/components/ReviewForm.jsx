'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector, reset } from 'redux-form'

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
      <form onSubmit={this.props.handleSubmit(this.doSubmit)}>
        <div>
          <label htmlFor="title">Title</label>
          <Field name="title" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="comment">Comment</label>
          <Field name="comment" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="stars">Stars</label>
          <Field name="stars" component="input" type="text"/>
        </div>
        <button type="submit">Submit</button>
      </form>
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
