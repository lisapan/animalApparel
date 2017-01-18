import React, { PropTypes, Component } from 'react'
import { Table, Button, Thumbnail, Glyphicon } from 'react-bootstrap'
import { updateCartItemAndGetUpdatedCart, deleteCartItemAndGetUpdatedCart } from '../reducers/action-creators/cart'
import { LinkContainer } from 'react-router-bootstrap'

export default class CartComponent extends Component {
  constructor(props) {
    super(props)
    this.changeQuantity = this.changeQuantity.bind(this)
    this.removeFromCart = this.removeFromCart.bind(this)
    this.getTotal = this.getTotal.bind(this)
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

  getTotal() {
    const cart = this.props.cart.order_items
    let total = 0
    cart.forEach(item => {
      total += +item.product.price * item.quantity
    })
    return total.toFixed(2)
  }

  render() {
    const cart = this.props.cart.order_items

    return (
      <div className="cart">
        <h1>Cart</h1>
        <Table responsive={true}>
          <thead>
            <tr>
              <th>Order Summary</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Product</td>
              <td></td >
              <td>Size</td>
              <td>Quantity</td>
              <td>Price</td>
              <td>Subtotal</td>
            </tr>
            {
              cart && cart.map(item => (
                <tr key={item.id}>
                  <td>
                    <Thumbnail className="cart-item" src={item.product.imageURL} alt={`${item.product.name} photo`} href={`/products/product/${item.product.id}`}>
                                          </Thumbnail>
                  </td>
                  <td>
                    <h4>{item.product.name}</h4>
                    <Button bsStyle="primary" className="cart-item-button"><Glyphicon glyph="pencil" /></Button>
                    <Button bsStyle="primary" className="cart-item-button"><Glyphicon glyph="trash" /></Button>
                  </td>
                  <td>{item.size}</td>
                  <td>{item.quantity}</td>
                  <td>{`$${item.product.price}`}</td>
                  <td>{`$${(+item.product.price * item.quantity).toFixed(2)}`}</td>

                </tr>
              ))
            }
          </tbody>
        </Table>
        <div>Total</div>
        <div>{cart && `$${this.getTotal()}`}</div>
        <LinkContainer to={{ pathname: `/checkout` }}><Button type="button" >Checkout</Button></LinkContainer>
      </div>
    )
  }

}
