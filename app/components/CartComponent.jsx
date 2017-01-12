import React, { PropTypes, Component } from 'react'
import { Table, Button } from 'react-bootstrap'

export default class CartComponent extends Component {
  constructor(props) {
    console.log(props)
    super(props)
    this.onUpdateProduct = this.onUpdateProduct.bind(this)
    this.onRemoveProduct = this.onRemoveProduct.bind(this)
    this.getSubtotal = this.getSubtotal.bind(this)
  }

  onUpdateProduct(){
    console.log("I'm udating!")
  }

  onRemoveProduct(){
    console.log("I removed something!")
  }

  getSubtotal() {
    const cart = this.props.cart
    let total = 0
    Object.keys(cart).forEach(key => {
      total += cart.key.price * cart.key.quantity
    })
    return total
  }



  render() {
    const cart = this.props.cart

    return (
      <div className="cart">
        <h1>Cart</h1>
        <Table>
          <thead>
            <tr>
              <th>Order Summary</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Items</td>
              <td>Color</td>
              <td>Size</td>
              <td>Quantity</td>
              <td>Price</td>
              <td>Total</td>
            </tr>
            {
              cart && Object.keys(cart).map(key => {
                <tr>
                  <td>
                    <div>
                      <img src={cart.key.imageURL} />
                    </div>
                    <div>
                      <div>
                        {cart.key.name}
                      </div>
                      <div>
                        {/*BUTTONS*/}
                      </div>
                    </div>
                  </td>
                  <td>{cart.key.color}</td>
                  <td>{cart.key.size}</td>
                  <td>{cart.key.quantity}</td>
                  <td>{`$${cart.key.price}`}</td>
                  <td>{`$${cart.key.price * cart.key.quantity}`}</td>
                </tr>
              })
            }
          </tbody>
        </Table>
        <div>Subtotal</div>
        <div>{`$${this.getSubtotal()}`}</div>
        <Button>Checkout</Button>
      </div>
    )
  }

}
