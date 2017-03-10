import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { Grid, Row, Col, Button } from 'react-bootstrap'

const required = value => value ? undefined : 'Required'

let ReviewOrderForm = props => {

  const { billingValues, shippingValues, paymentValues,
          handleSubmit, pristine, previousPage, submitting } = props

  return (
    <Grid fluid>
      <form onSubmit={handleSubmit}>
        <Row>
          <Col xs={12} sm={12} md={8} lg={8}>
            <Row className="checkoutFormField">
              <h3>Order Review</h3>
            </Row>
            <Row className="checkoutFormField">
              <label> Shipping Address </label>
              <p>
                {`${shippingValues.shippingFirstName} ${shippingValues.shippingLastName}`}
              </p>
            </Row>
            <Row>
              <p>
                {`${shippingValues.shippingAddressLine1} ${shippingValues.shippingAddressLine2}`}
              </p>
            </Row>
            <Row>
              <p>
                {`${shippingValues.shippingCity}, ${shippingValues.shippingState} ${shippingValues.shippingZipcode}`}
              </p>
            </Row>
            <Row className="checkoutFormField">
              <label> Billing Address </label>
              <p>{billingValues.billingAddressLine1}</p>
            </Row>
            <Row>
              <p>{billingValues.billingAddressLine2}</p>
            </Row>
            <Row>
              <p>
                {`${billingValues.billingCity}, ${billingValues.billingState} ${billingValues.billingZipcode}`}
              </p>
            </Row>
            <Row className="checkoutFormField">
              <label>Payment Method</label>
              <p>
                {paymentValues.paymentCreditCard}
              </p>
              <p>
                {`Name: ${paymentValues.paymentCardName}`}
              </p>
              <p>
                {`Card Number: **** **** **** ${paymentValues.paymentCardNumber.slice(-4)}`}
              </p>
            </Row>
            <Row className="checkoutFormField">
              <Button
                className="product-detail previous"
                bsStyle="primary"
                bsSize="large"
                type="button"
                onClick={previousPage}>
                Edit Payment Info
              </Button>
              <Button
                className="product-detail"
                bsStyle="primary"
                bsSize="large"
                type="submit"
                disabled={pristine || submitting}>
                Submit Order
              </Button>
            </Row>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <Row className="checkoutFormField">
              <h3> Order Summary </h3>
            </Row>
            <Row className="checkoutFormField">
              <p>Subtotal:</p>
            </Row>
            <Row>
              <p>Shipping: 0.00</p>
            </Row>
            <Row>
              <p>Estimated Tax: 0.00</p>
            </Row>
            <Row>
              <p>Total:</p>
            </Row>
          </Col>
        </Row>
      </form>
    </Grid>
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
