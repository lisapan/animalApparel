import React, { Component } from 'react'
import ReviewForm from './ReviewForm'

class ReviewFormPage extends Component {
  constructor(props) {
    super(props)
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(event)
    const reviewData = {
      title: event.target.title.value,
      message: event.target.message,value,
      stars: event.target.stars.value
    }
    this.props.handleAddReview(reviewData, this.props.currentProduct.id)
  }

  render() {
    return (
      <ReviewForm onSubmit={this.handleSubmit} />
    )
  }
}

export default ReviewFormPage
