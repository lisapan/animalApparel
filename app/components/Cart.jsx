import React, { PropTypes } from 'react';
import { Cart, Product, CheckoutButton } from 'react-shopping-cart';

export default class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.onUpdateProduct = this.onUpdateProduct.bind(this)
    this.onRemoveProduct = this.onRemoveProduct.bind(this)
  }

  onUpdateProduct(event){

  }

  onRemoveProduct(event){

  }

  render() {
    return (

    )
  }

}

//Debugging tool. Will throw error if props are not correctly passed down.
Cart.propTypes = {
  cart: PropTypes.array.isRequired,
}
