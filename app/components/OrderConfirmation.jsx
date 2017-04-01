'use strict'

import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { Grid, Row, Col, Image, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

const OrderConfirmation = (props) => (
  <div>
    <div className="checkoutFormField">
      <h3> Thank you for your order</h3>
    </div>
    <div className="checkoutFormField">
      <p>
        Dear {props.submittedOrder[1][0].shippingInfo.shippingAddress.name},
      <br />
        Thank you for shopping at Animal Apparel, you order has been received. Keep in mind that your order might come in separate shipments.
      </p>
    </div>
    <div className="checkoutFormField">
      <label> Order Number: {`123-00-${props.submittedOrder[1][0].id}`}</label>
      <br />
      <label> Order Status: {props.submittedOrder[1][0].status}</label>
    </div>
    <div className="checkoutFormField">
      <Button className="product-detail" bsStyle="primary" bsSize="large" >
        Review My Order
      </Button>
    </div>
  </div>
)

OrderConfirmation.propTypes = {
  submittedOrder: PropTypes.array.isRequired,
}

export default OrderConfirmation
