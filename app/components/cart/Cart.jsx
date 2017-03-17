'use strict'

import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Table, Button, Image,
         FormControl, FormGroup, ControlLabel } from 'react-bootstrap'
import { updateCartItemAndGetUpdatedCart, deleteCartItemAndGetUpdatedCart } from '../../reducers/action-creators/cart'
import { LinkContainer } from 'react-router-bootstrap'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedQuantity: ''
    }
  }

  // changeQuantity(event){
  //   event.preventDefault()
  //   const itemChanges = {
  //     orderItem: {
  //       size: this.state.selectedItem.size,
  //       quantity: event.target.value
  //     },
  //     productId: this.props.currentProduct.id,
  //     orderId: this.props.orderId.length ? this.props.orderId : null
  //   }
  //   this.props.dispatch(updateCartItemAndGetUpdatedCart(itemChanges))
  // }

  removeFromCart = (cartId, itemId) => this.props.handleRemoveItem(cartId, itemId)

  handleChange = (cartId, itemId) => event => {
    const selectedQuantity = event.target.value
    this.setState({ selectedQuantity })
    this.props.handleUpdateItem(cartId, itemId, this.state)
  }

  getTotal = () => {
    const cart = this.props.cart.order_items
    let total = 0
    cart && cart.forEach(item => {
      total += item.product.price * item.quantity
    })
    return total.toFixed(2)
  }

  render() {
    const cart = this.props.cart.order_items || []

    return (
      <div>
        <h1 className="center page-title">Order Summary</h1>
        <div className="cart">
          <div className="cart-items">
            <Table>
              <tbody>
                <tr>
                  <td>Item</td>
                  <td>Size</td>
                  <td>Qty</td>
                  <td>Price</td>
                  <td>Subtotal</td>
                </tr>
                { cart && cart.map(item => {
                  const quantities = Array((item.totalInStock) || 1).fill().map((_, idx) => idx + 1)

                  return (
                    <tr key={item.id}>
                      <td>
                        <div>
                          <Image
                            responsive
                            className="cart-item"
                            src={item.product.image_URL}
                            alt={`${item.product.name} photo`}
                            href={`/products/${item.product.category}/${item.product.id}`}
                          />
                        </div>
                        <div>
                          <a
                            onClick={() => this.removeFromCart(this.props.cart.id, item.id)}
                            className="cart-item-button">
                            Remove
                          </a>
                        </div>
                      </td>
                      <td>{item.size}</td>
                      <td>
                        <form>
                          <FormGroup
                            controlId="quantity">
                            <ControlLabel className="detail sr-only">Quantity:</ControlLabel>
                            <FormControl
                              componentClass="select"
                              type="text"
                              value={this.state.selectedQuantity}
                              onChange={this.handleChange}>
                              { quantities && quantities.map(quantity => {
                                  quantity === item.quantity ?

                                  <option selected={true} key={quantity} value={quantity}>{quantity}</option>
                                  :
                                  <option key={quantity} value={quantity}>{quantity}</option>
                                }) }
                            </FormControl>
                          </FormGroup>
                        </form>
                      </td>
                      <td>{`$${item.product.price}`}</td>
                      <td>{`$${(+item.product.price * item.quantity).toFixed(2)}`}</td>
                    </tr>
                    )
                  })
                }
                </tbody>
            </Table>
          </div>
        </div>
        <Row className="cart-total">
          <Col xs={12} sm={12} md={12} lg={12}>
            <h3>Total</h3>
            {cart && `$${this.getTotal()}`}
          </Col>
        </Row>
        <Row className="cart-checkout">
          <Col xs={12} sm={12} md={12} lg={12}>
            <LinkContainer to={{ pathname: `/checkout` }}>
              <Button bsStyle="primary">Checkout</Button>
            </LinkContainer>
          </Col>
        </Row>
      </div>
    )
  }
}

Cart.propTypes = {
  cart: PropTypes.object.isRequired,
  handleRemoveItem: PropTypes.func.isRequired
}

const mapStateToProps = state => ({ cart: state.cart })
const mapDispatchToProps = dispatch => ({
  handleRemoveItem: (cartId, itemId) => dispatch(deleteCartItemAndGetUpdatedCart(cartId, itemId)),
  handleUpdateItem: (cartId, itemId, updateObj) => dispatch(updateCartItemAndGetUpdatedCart(cartId, itemId, updateObj))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
