'use strict'

import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

const OrderConfirmation = (props) => (
  <div>
  <h3> Order Confirmation </h3>
  <p>
    {JSON.stringify(props.submittedOrder), null, 2}
  </p>
  </div>
)

OrderConfirmation.propTypes = {
  submittedOrder: PropTypes.object.isRequired,
}

export default OrderConfirmation
