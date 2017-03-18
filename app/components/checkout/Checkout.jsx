'use strict'

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import ShippingAddressForm from './ShippingAddressForm'
import BillingAddressForm from './BillingAddressForm'
import PaymentMethodForm from './PaymentMethodForm'
import ReviewOrderForm from './ReviewOrderForm'

import { updateOrder } from '../../reducers/action-creators/checkout'

class Checkout extends Component {

  constructor(props) {
    super(props)
    this.state = { page: 1 }
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(values) {

    const shippingAddress = {
      name: `${values.shippingFirstName} ${values.shippingLastName}`,
      address1: values.shippingAddressLine1,
      address2: values.shippingAddressLine2,
      city: values.shippingCity,
      state: values.shippingState,
      zipcode: values.shippingZipcode
    }

    const billingAddress = {
      address1: values.billingAddressLine1,
      address2: values.billingAddressLine2,
      city: values.billingCity,
      state: values.billingState,
      zipcode: values.billingZipcode
    }

    const paymentMethod = {
      creditCard: values.paymentCreditCard,
      cardName: values.paymentCardName,
      cardNumber: values.paymentCardNumber,
      expiration: `${values.paymentExpirationMonth}/${values.paymentExpirationYear}`,
      securityCode: values.paymentSecurityCode
    }

    const result = {
      shippingInfo: {shippingAddress, billingAddress, paymentMethod},
      status: 'submitted'
    }

    this.props.submitOrder(this.props.cart.id, result)
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    const { page } = this.state

    return (
      <div className="checkoutFormDiv">
        <h1>CHECKOUT</h1>
        { page === 1 && <ShippingAddressForm onSubmit={this.nextPage} /> }
        { page === 2 && <BillingAddressForm previousPage={this.previousPage} onSubmit={this.nextPage} /> }
        { page === 3 && <PaymentMethodForm previousPage={this.previousPage} onSubmit={this.nextPage} /> }
        { page === 4 && <ReviewOrderForm previousPage={this.previousPage} onSubmit={this.handleSubmit} /> }
      </div>
    )
  }
}

Checkout.propTypes = {
  submitOrder: PropTypes.func.isRequired,
  cart: PropTypes.object.isRequired
}

const mapStateToProps = state => ({ cart: state.cart })

const mapDispatchToProps = dispatch => ({
  submitOrder: (cartId, shippingInfo) => dispatch(updateOrder(cartId, shippingInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
