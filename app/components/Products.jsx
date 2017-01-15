import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import Sidebar from './Sidebar';

import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';

const Products = (props) => {

  return (
    <Grid fluid={true}>
      <Row>
        <Sidebar />
        <Col xs={12} sm={12} md={10} lg={10}>
          <h3>Products</h3>
          <Row>
            {
              props.products.map(product => (
                <Col
                  className="product"
                  key={ product.id }
                  xs={12} sm={6} md={4} lg={4}>
                  <Link to={`/products/product/${product.id}`}>
                    <Thumbnail src={ product.imageURL } alt={`${product.name} photo`}>
                    <h5>{ product.name }</h5>
                    <p>{ `$${product.price}` }</p>
                    </Thumbnail>
                  </Link>
                </Col>
              ))
            }
          </Row>
        </Col>
      </Row>
    </Grid>
  );
};

//Debugging tool. Will throw error if props are not correctly passed down.
Products.propTypes = {
  products: PropTypes.array.isRequired,
}

export default Products
