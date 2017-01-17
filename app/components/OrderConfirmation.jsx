'use strict'

import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { Grid, Row, Col, Image, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

const OrderConfirmation = (props) => {

  console.log(props.submittedOrder[1][0])
  return (
  <div>
  <h3> Thank you for your order</h3>
    <p>
    Dear {props.submittedOrder[1][0].shippingInfo.shippingAddress.name},
    <br />
      Thank you for shopping at Animal Apparel, you order has been received. Keep in mind that your order might come in separate shipment. And you are always able to review your order status at AnimalApparel.com
    </p>
    <div>
      <h4> Order Number: </h4>
      {props.submittedOrder[1][0].id}
    </div>
    <div>
      <h4> Order Status: </h4>
      {props.submittedOrder[1][0].status}
    </div>
    <Button className="product-detail" bsStyle="primary" bsSize="large" >
      Review My Order
    </Button>
  </div>
)}

OrderConfirmation.propTypes = {
  submittedOrder: PropTypes.array.isRequired,
}

export default OrderConfirmation
