import React, { Component, PropTypes } from 'react'
import ShippingAddressForm from './ShippingAddressForm';
import BillingAddressForm from './BillingAddressForm';
import PaymentMethodForm from './PaymentMethodForm';
import ReviewOrderForm from './ReviewOrderForm';

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
    new Promise(resolve => {
        setTimeout(() => {  // simulate server latency
          window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
          resolve()
        }, 500)
      })
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
  onSubmit: PropTypes.func.isRequired
}
export default Checkout
