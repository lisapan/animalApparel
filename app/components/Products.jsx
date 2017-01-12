import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import Sidebar from './Sidebar';

import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';

const Products = (props) => {

  return (
    <Grid fluid={true}>
      <Row>
        <Col md={3}>
          <Sidebar />
        </Col>
        <Col md={9}>
          <h3>Products</h3>
          <div className="row">
            {
              props.products.map(product => (
                <div className="col-xs-4" key={ product.id }>
                  <Link to={`/products/${product.id}`}>
                    <Thumbnail src={ product.imageURL } alt={`${product.name} photo`}/>
                    <div className="caption">
                      <h5>
                        <span>{ product.name }</span>
                      </h5>
                    </div>
                  </Link>
                </div>
              ))
            }
          </div>
        </Col>
      </Row>
    </Grid>
  );
};

Products.propTypes = {
  products: PropTypes.array.isRequired,
}

export default Products
