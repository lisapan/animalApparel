'use strict'

import React, { PropTypes } from 'react'
import { Row, Col, Thumbnail } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const RelatedProducts = props => (
  <Row className="product-detail">
    <h3>You might also like:</h3>
    { props.relatedProducts.map(prod => (
        <Col className="related-product" key={prod.id} xs={4} sm={4} md={4} lg={4}>
          <LinkContainer to={{pathname: `/products/${prod.category}/${prod.id}`}}>
            <Thumbnail
              src={prod.image_URL} alt={`${prod.name} photo`}>
              <h5>{prod.name}</h5>
              <p className="price">{`$${prod.price}`}</p>
            </Thumbnail>
          </LinkContainer>
        </Col>
      )) }
  </Row>
)

RelatedProducts.propTypes = {
  relatedProducts: PropTypes.array.isRequired
}

export default RelatedProducts
