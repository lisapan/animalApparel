'use strict'

import React, { Component } from 'react'
import StarRating from 'react-star-rating'
import { field, reduxForm } from 'redux-form'

class ReviewForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <Field name="title" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="comment">Comment</label>
          <Field name="comment" component="input" type="text"/>
        </div>
        <form action="/api" method="POST">
          <StarRating name="product-rating" caption="Rate your product!" totalStars={5} />
          <button type="submit" className="btn btn-submit">Submit Rating</button>
        </form>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

// Decorate the form component
ReviewForm = reduxForm({
  form: 'review' // a unique name for this form
})(ReviewForm);

export default ReviewForm;
