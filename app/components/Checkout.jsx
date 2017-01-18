import React, { Component, PropTypes } from 'react'
import ShippingAddressForm from './ShippingAddressForm';
import BillingAddressForm from './BillingAddressForm';
import PaymentMethodForm from './PaymentMethodForm';
import ReviewOrderForm from './ReviewOrderForm';
import { updateOrder } from '../reducers/action-creators/checkout'
import {connect} from 'react-redux'

class Checkout extends Component {

  constructor(props) {
    super(props)
    this.state = {
      page: 1
    }
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (values) => {
    const result = {}
    result.shippingInfo = values
    result.status = 'submitted'
    this.props.dispatch(updateOrder(this.props.cart.id, result))
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
  cart: PropTypes.object.isRequired
}


const mapState = (state) => ({ cart: state.cart })

export default connect(mapState)(Checkout)
