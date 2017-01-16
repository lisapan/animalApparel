'use strict'

import React from 'react'
import {Link} from 'react-router';
import { Row, Col} from 'react-bootstrap';


export default () => {
  return (
    <Col xs={12} sm={12} md={2} lg={2}>
      <Row>
        <Link to={ '/products/women'}>
          <div className="menu-item">
            <h4>Women</h4>
          </div>
        </Link>
      </Row>
      <Row>
        <Link to={ '/products/men'}>
          <div className="menu-item">
            <h4>Men</h4>
          </div>
        </Link>
      </Row>
      <Row>
        <Link to={ '/products/dogs'}>
          <div className="menu-item">
            <h4>Dogs</h4>
          </div>
        </Link>
      </Row>
      <Row>
        <Link to={ '/products/kids'}>
          <div className="menu-item">
            <h4>Kids</h4>
          </div>
        </Link>
      </Row>
    </Col>
  );
}
