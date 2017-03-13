'use strict'

import React, { PropTypes } from 'react'
import { Button, Image, Glyphicon } from 'react-bootstrap'

const CartItem = props => (
  <tr key={props.item.id}>
    <td>
      <Image
        className="cart-props.item"
        src={props.item.product.image_URL}
        alt={`${props.item.product.name} photo`}
        href={`/products/${props.item.category}/${props.item.product.id}`} />
    </td>
    <td>
      <h4>{props.item.product.name}</h4>
      <Button bsStyle="primary" className="cart-props.item-button">
        <Glyphicon glyph="pencil" />
      </Button>
      <Button bsStyle="primary" className="cart-props.item-button">
        <Glyphicon glyph="trash" />
      </Button>
    </td>
    <td>{props.item.size}</td>
    <td>{props.item.quantity}</td>
    <td>{`$${props.item.product.price}`}</td>
    <td>{`$${(+props.item.product.price * props.item.quantity).toFixed(2)}`}</td>
  </tr>
)

CartItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default CartItem
