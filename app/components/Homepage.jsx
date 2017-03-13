'use strict'

import React from 'react'
import { Link } from 'react-router'
import { Grid, Row, Col } from 'react-bootstrap'

const Home = props => (
  <div>
    <Row className="promo-box">
      <Col xs={12} sm={12} md={12} lg={12}>
        <div className="home-pic promo">
          <Row className="topRow">
            <Col xs={12} sm={9} md={9} lg={9}>
              <h1 id="promo">TAKE 40% OFF EVERYTHING</h1>
            </Col>
            <Col xs={12} sm={3} md={3} lg={3}>
              <h1 id="promoCode">Promo Code: TAKE40</h1>
            </Col>
          </Row>
          <Row className="bottomRow">
            <Col xs={6} sm={6} md={6} lg={6}>
              <Link to={'/sale/people'}>
                <h1 id="peopleSale">SHOP PEOPLE</h1>
              </Link>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6}>
              <Link to={'/sale/pets'}>
                <h1 id="petSale">SHOP PETS</h1>
              </Link>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
    <Row>
      <Col mdHidden={true} lgHidden={true} xs={12} sm={12} id="women-xs-sm">
        <Link to={'/products/women'}>
          <div className="home-pic women">
            <h1>Women</h1>
          </div>
        </Link>
      </Col>
      <Col mdHidden={true} lgHidden={true} xs={12} sm={12} id="men-xs-sm">
        <Link to={'/products/men'}>
          <div className="home-pic men">
            <h1>Men</h1>
          </div>
        </Link>
      </Col>
      <Col xsHidden={true} smHidden={true} md={6} lg={6} id="women">
        <Link to={'/products/women'}>
          <div className="home-pic women">
            <h1>Women</h1>
          </div>
        </Link>
      </Col>
      <Col xsHidden={true} smHidden={true} md={6} lg={6} id="men">
        <Link to={'/products/men'}>
          <div className="home-pic men">
            <h1>Men</h1>
          </div>
        </Link>
      </Col>
    </Row>
    <Row className="show-grid">
      <Col xs={12} sm={12} md={12} lg={12}>
        <Link to={'/products/pets'}>
          <div className="home-pic dogs">
            <h1>Pets</h1>
          </div>
        </Link>
      </Col>
    </Row>
    <Row className="show-grid">
      <Col xs={12} sm={12} md={12} lg={12}>
        <Link to={ '/products/kids'}>
          <div className="home-pic kids">
            <h1>Kids</h1>
          </div>
        </Link>
      </Col>
    </Row>
  </div>
)

export default Home
