import React from 'react'
import CheckoutForm from './CheckoutForm';

class Checkout extends React.Component {

  handleSubmit = (values) => {
    new Promise(resolve => {
        setTimeout(() => {  // simulate server latency
          window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
          resolve()
        }, 500)
      })
  }

  render() {
    return (
      <div>
        <h1>CHECKOUT</h1>
        <CheckoutForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default Checkout
