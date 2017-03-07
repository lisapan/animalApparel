import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { Grid, Row, Col, Thumbnail } from 'react-bootstrap'

const Products = props => (
  <Grid fluid>
    <Row>
      <Col xs={12} sm={12} mdOffset={1} md={10} lg={10}>
        <h1 className="page-title">{`${props.params.category}`}</h1>
        <Row>
          { props.products.map(product => (
              <Col
                className="product"
                key={ product.id }
                xs={12} sm={6} md={4} lg={4}>
                <Link to={`/products/${props.params.category}/${product.id}`}>
                  <Thumbnail src={product.image_URL} alt={`${product.name} photo`}>
                  <h5>{product.name}</h5>
                  <p>{`$${product.price}`}</p>
                  </Thumbnail>
                </Link>
              </Col>
            )) }
        </Row>
      </Col>
    </Row>
  </Grid>
)

Products.propTypes = {
  products: PropTypes.array.isRequired,
  params: PropTypes.object.isRequired
}

const mapStateToProps = state => ({ products: state.products })

export default connect(mapStateToProps)(Products)
