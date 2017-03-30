'use strict'

import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { Row, Col, Thumbnail } from 'react-bootstrap'

const Products = props => (
  <Row>
    <Col xs={12} sm={12} mdOffset={1} md={10} lg={10}>
      <h1>Sale</h1>
        <Row>
          { props.products.map(product => (
              <Col className="product" key={ product.id } xs={12} sm={6} md={4} lg={4}>
                <Link to={`/products/${product.category}/${product.id}`}>
                  <Thumbnail src={product.image_URL} alt={`${product.name} photo`}>
                  <h5>{product.name}</h5>
                  <p className="price">{`$${product.price}`}</p>
                  </Thumbnail>
                </Link>
              </Col>
            )) }
        </Row>
      </Col>
    </Row>
)

Products.propTypes = {
  products: PropTypes.array.isRequired
}

const mapStateToProps = state => ({ products: state.products })

export default connect(mapStateToProps)(Products)
