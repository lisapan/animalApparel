import React, { Component } from 'react'
import ReviewForm from './ReviewForm'

class ReviewFormPage extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(values) {
    values.product_id = this.props.currentProduct.id
    console.log(values)
    this.props.handleAddReview(values)
    resetForm()
  }

  render() {
    return (
      <ReviewForm onSubmit={this.handleSubmit} />
    )
  }
}

export default ReviewFormPage
