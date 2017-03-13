import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col, Table, Button, Image, Glyphicon } from 'react-bootstrap'
import { updateCartItemAndGetUpdatedCart, deleteCartItemAndGetUpdatedCart } from '../../reducers/action-creators/cart'
import { LinkContainer } from 'react-router-bootstrap'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedItemId: null,
      selectedItemQty: null
    }
  }

  changeQuantity = (id, qty) => event => {
    event.preventDefault()
    const itemChanges = {
      orderItem: {
        quantity: event.target.value
      },
      itemId: id,
      cartId: this.props.cart.id || null
    }
    this.props.dispatch(updateCartItemAndGetUpdatedCart(itemChanges))
  }

  removeFromCart = (cartId, itemId) => event => {
    event.preventDefault()
    this.props.handleRemoveItem(cartId, itemId)
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
      <div className="cart">
        <h1 className="cart-item">Order Summary</h1>
        <Table>
          <tbody>
            <tr>
              <td />
              <td>Item</td>
              <td>Size</td>
              <td>Quantity</td>
              <td>Price</td>
              <td>Subtotal</td>
            </tr>
            { cart && cart.map(item => (
                <tr key={item.id}>
                  <td>
                    <Button bsStyle="primary" className="cart-item-button">
                      <Glyphicon glyph="pencil" />
                    </Button>
                    <Button onClick={this.removeFromCart(this.props.cart.id, item.id)} bsStyle="primary" className="cart-item-button">
                      <Glyphicon glyph="trash" />
                    </Button>
                  </td>
                  <td>
                    <Image
                      responsive
                      className="cart-item"
                      src={item.product.image_URL}
                      alt={`${item.product.name} photo`}
                      href={`/products/${item.product.category}/${item.product.id}`} />
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
        <Grid>
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
        </Grid>
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
  handleRemoveItem: (cartId, itemId) => dispatch(deleteCartItemAndGetUpdatedCart(cartId, itemId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
