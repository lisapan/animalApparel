import React from 'react'
import { connect } from 'react-redux'
import { Field, FieldArray, reduxForm, formValueSelector } from 'redux-form'
import { Col } from 'react-bootstrap'

const required = value => value ? undefined : 'Required'


let ReviewOrderForm = (props) => {
  const { billingValues, shippingValues, paymentValues, handleSubmit, invalid, pristine, reset, submitting, previousPage } = props
  return (
    <div>
      <h3>Order Review</h3>

      <form onSubmit={handleSubmit}>
        <Grid fluid={true}>
          <Col xs={12} sm={12} md={9} lg={9} >
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
              Card Number: **** **** **** {paymentValues.paymentCardNumber.slice(-4)}
            </p>
            <button type="button" className="previous" onClick={previousPage}>Previous</button>
            <button type="submit" disabled={pristine || submitting}>Submit</button>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3}>
            <div>
              <h3> Order Summary </h3>
            </div>
            <div>
              Subtotal
            </div>
            <div>
              Shipping
            </div>
            <div>
              Estimated Tax
            </div>
            <div>
              Updated Total
            </div>
          </Col>
        </Grid>
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
