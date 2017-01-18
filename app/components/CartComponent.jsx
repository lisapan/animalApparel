import React, { PropTypes, Component } from 'react'
import { Table, Button } from 'react-bootstrap'
import { updateCartItemAndGetUpdatedCart, deleteCartItemAndGetUpdatedCart } from '../reducers/action-creators/cart'

export default class CartComponent extends Component {
  constructor(props) {
    super(props)
    this.changeQuantity = this.changeQuantity.bind(this)
    this.removeFromCart = this.removeFromCart.bind(this)
    this.getSubtotal = this.getSubtotal.bind(this)
  }

  changeQuantity(event){
    event.preventDefault()
    const itemChanges = {
      orderItem: {
        size: this.state.selectedItem.size,
        quantity: event.target.value
      },
      productId: this.props.currentProduct.id,
      orderId: this.props.orderId.length ? this.props.orderId : null
    }
    this.props.dispatch(updateCartItemAndGetUpdatedCart(itemChanges))
  }

  removeFromCart(event) {
    event.preventDefault()
    const item = {
      orderItem: {
        size: this.state.selectedItem.size,
        quantity: this.state.selectedQuantity
      },
      productId: this.props.currentProduct.id,
      orderId: this.props.orderId.length ? this.props.orderId : null
    }
    this.props.dispatch(deleteCartItemAndGetUpdatedCart(item))
  }

  getSubtotal() {
    const cart = this.props.cart
    let total = 0
    cart.forEach(item => {
      total += item.product.price * item.quantity
    })
    return total
  }

  render() {
    const cart = this.props.cart.order_items

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
              <td>Size</td>
              <td>Quantity</td>
              <td>Price</td>
              <td>Total</td>
            </tr>
            {
              cart && cart.map(item => (
                <tr key={item.id}>
                  <td>
                    <div>
                      <img src={item.product.imageURL} />
                    </div>
                    <div>
                      <div>
                        {item.product.name}
                      </div>
                      <div>
                        {/*BUTTONS*/}
                      </div>
                    </div>
                  </td>
                  <td>{item.size}</td>
                  <td>{item.quantity}</td>
                  <td>{`$${item.product.price}`}</td>
                  <td>{`$${item.product.price * item.quantity}`}</td>
                </tr>
              ))
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
