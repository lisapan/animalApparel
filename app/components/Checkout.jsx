import React, { Component, PropTypes } from 'react'
import ShippingAddressForm from './ShippingAddressForm';
import BillingAddressForm from './BillingAddressForm';
import PaymentMethodForm from './PaymentMethodForm';
import ReviewOrderForm from './ReviewOrderForm';
import { updateOrder } from '../reducers/action-creators/checkout'

class Checkout extends Component {

  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }

  handleSubmit = (values) => {
    const result = {}
    result.shippingInfo = values
    result.status = 'submitted'
    console.log("db order", result)
    //const orderId = props.order
    this.props.dispatch(updateOrder(1, result))
    //'1' should be changed to real order id
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
      <div>
        <h1>CHECKOUT</h1>
        {page === 1 && <ShippingAddressForm onSubmit={this.nextPage}/>}
        {page === 2 && <BillingAddressForm previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 3 && <PaymentMethodForm previousPage={this.previousPage} onSubmit={this.nextPage} />}
        {page === 4 && <ReviewOrderForm previousPage={this.previousPage} onSubmit={this.handleSubmit} />}
      </div>
    );
  }
}

Checkout.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  //order: PropTypes.number.isRequired
}
export default Checkout
