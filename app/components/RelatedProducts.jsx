
import React, { PropTypes } from 'react'
import { Row, Col, Thumbnail } from 'react-bootstrap'

const RelatedProducts = (props) => (
    <Row>
    <h3>Related Products</h3>
    {
      props.relatedProducts.map(prod => (
       <Col
        className="product"
        key={ prod.id }
        xs={12} sm={6} md={3} lg={3}>
        <Thumbnail
         href={ `/products/product/${prod.id}` }
         src={ prod.imageURL } alt={`${prod.name} photo`}>
        <h5>{ prod.name }</h5>
        <p>{ `$${prod.price}` }</p>
        </Thumbnail>
      </Col>
      ))
    }
    </Row>
  )


RelatedProducts.propTypes = {
  relatedProducts: PropTypes.array.isRequired
}

export default RelatedProducts
