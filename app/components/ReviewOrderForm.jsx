import React from 'react'
import { connect } from 'react-redux'
import { Field, FieldArray, reduxForm, formValueSelector } from 'redux-form'

const required = value => value ? undefined : 'Required'


let ReviewOrderForm = (props) => {
  const { billingValues, shippingValues, paymentValues, handleSubmit, invalid, pristine, reset, submitting, previousPage } = props
  return (
    <div>
      <h2>Order Review</h2>

      <form onSubmit={handleSubmit}>
      <div>
        <h4> Shipping Address </h4>
        <p>
          {shippingValues.shippingFirstName}&nbsp;{shippingValues.shippingLastName}
          <br />
          {shippingValues.shippingAddressLine1}
          &nbsp;
          {shippingValues.shippingAddressLine2}
          <br />
          {shippingValues.shippingCity}, {shippingValues.shippingState} {shippingValues.shippingZipcode}
        </p>
        <h4> Billing Address </h4>
        <p>
          {billingValues.billingAddressLine1}
          &nbsp;
          {billingValues.billingAddressLine2}
          <br />
          {billingValues.billingCity}, {billingValues.billingState} {billingValues.billingZipcode}
        </p>
        <h4>Payment Method</h4>
        <p>
          {paymentValues.paymentCreditCard}
          <br />
          Name: {paymentValues.paymentCardName}
          <br />
          Card Number: ****{paymentValues.paymentCardNumber}
        </p>
        <button type="button" className="previous" onClick={previousPage}>Previous</button>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
      </div>
      </form>
    </div>
  )
}

ReviewOrderForm = reduxForm({
  form: 'checkout',     // a unique identifier for this form
  destroyOnUnmount: false,        // <------ preserve form data
  forceUnregisterOnUnmount: true  // <------ unregister fields on unmount
})(ReviewOrderForm)

const selector = formValueSelector('checkout')
ReviewOrderForm = connect(
  state => {
    const billingValues = selector(state, 'billingAddressLine1', 'billingAddressLine2', 'billingCity', 'billingPhone', 'billingState', 'billingZipcode')
    const paymentValues = selector(state, 'paymentCardName', 'paymentCardNumber', 'paymentCreditCard')
    const shippingValues = selector(state, 'shippingAddressLine1', 'shippingAddressLine2', 'shippingCity', 'shippingFirstName', 'shippingLastName', 'shippingPhone', 'shippingState', 'shippingZipcode')
    return {
      billingValues, paymentValues, shippingValues
    }

  }
)(ReviewOrderForm)

export default ReviewOrderForm
