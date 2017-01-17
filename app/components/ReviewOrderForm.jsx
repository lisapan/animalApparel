import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Field, FieldArray, reduxForm, formValueSelector } from 'redux-form'
import { Grid, Row, Col, Button } from 'react-bootstrap'

const required = value => value ? undefined : 'Required'


let ReviewOrderForm = (props) => {
  const { billingValues, shippingValues, paymentValues, handleSubmit, pristine, previousPage, submitting } = props
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid fluid={true}>
          <Col xs={12} sm={12} md={8} lg={8}  >
            <div className="checkoutFormField">
              <h3>Order Review</h3>
            </div>
            <div className="checkoutFormField">
              <label> Shipping Address </label>
              <p>
                {shippingValues.shippingFirstName}&nbsp;{shippingValues.shippingLastName}
                <br />
                {shippingValues.shippingAddressLine1}
                &nbsp;
                {shippingValues.shippingAddressLine2}
                <br />
                {shippingValues.shippingCity}, {shippingValues.shippingState} {shippingValues.shippingZipcode}
              </p>
            </div>
            <div className="checkoutFormField">
              <label> Billing Address </label>
              <p>
                {billingValues.billingAddressLine1}
                &nbsp;
                {billingValues.billingAddressLine2}
                <br />
                {billingValues.billingCity}, {billingValues.billingState} {billingValues.billingZipcode}
              </p>
            </div>
            <div className="checkoutFormField">
              <label>Payment Method</label>
              <p>
                {paymentValues.paymentCreditCard}
                <br />
                Name: {paymentValues.paymentCardName}
                <br />
                Card Number: **** **** **** {paymentValues.paymentCardNumber.slice(-4)}
              </p>
            </div>
            <div className="checkoutFormField">
              <Button className="product-detail previous" bsStyle="primary" bsSize="large" type="button" onClick={previousPage}>Edit Payment Info</Button>
              <Button className="product-detail" bsStyle="primary" bsSize="large" type="submit" disabled={pristine || submitting}>Submit Order</Button>
            </div>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <div className="checkoutFormField">
              <h3> Order Summary </h3>
            </div>
            <div className="checkoutFormField">
              <p>
                Subtotal:
                <br />
                Shipping: 0.00
                <br />
                Estimated Tax: 0.00
                <br />
                Total:
              </p>
            </div>
          </Col>
        </Grid>
      </form>
    </div>
  )
}

ReviewOrderForm.propTypes = {
  billingValues: PropTypes.object.isRequired,
  shippingValues: PropTypes.object.isRequired,
  paymentValues:  PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
  submitting: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired
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
