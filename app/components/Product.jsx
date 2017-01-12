import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import { Grid, Row, Col,
         Thumbnail, Button, FormControl,
         FromGroup, ControlLabel, HelpBlock } from 'react-bootstrap';
import { getProductById } from '../action-creators/products'
class Product extends Component {

  constructor (props){
    super(props)
    this.state = {
      selectedItem: {},
      product: this.props.currentProduct,
      selectedQuantity: 1,
    }
    this.sizeClicked = this.sizeClicked(this)
    this.handleChange = this.handleChange.bind(this)
    this.getValidationState = this.getValidationState.bind(this)
  }

  componentDidMount(){
    this.props.dispatch(getProductById(this.props.params.productId))
  }

  sizeClicked (event, item){
    //event.preventDefault()
    // this.setState({
    //   selectedItem: item
    // })
  }

  getValidationState() {
    const quantity = this.state.quantity
    const stock = this.state.selectedItem.quantity
    if (quantity > stock) return 'warning'
    else if (quantity > 0 && quantity < stock) return 'success'
    else if (quantity < 1) return 'error'
  }

  handleChange(event) {
    this.setState({ selectedQuantity: event.target.value });
  }

  render(){
    const product = this.state.product
    return (
      <Grid fluid={true}>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Thumbnail src={ product.imageURL } alt={`${product.name} photo`} />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Row>
              <h2>{ product.name }</h2>
            </Row>
            <Row>
              <p>{ `$${product.price}` }</p>
            </Row>
            <Row>
              <h3>Size:</h3>
              { product.inventories.map(inventory => {
                  return <Button
                          type="button"
                          classname="size-thumbnail"
                          onClick={(event) => this.sizeClicked(event, inventory)}
                          disabled={ inventory.quantity < 0}>
                            {inventory.size}
                        </Button>
                })
              }
            </Row>
            <Row>
              <form>
                <FromGroup
                  controlId="quantity"
                  validationState={this.getValidationState()}
                >
                  <ControlLabel>Quantity:</ControlLabel>
                  <FormControl
                    type="text"
                    value={this.state.selectedQuantity}
                    placeholder="1"
                    onChange={this.handleChange}
                  />
                  <FormControl.Feedback />
                  <HelpBlock> {`Only ${this.state.selectedItem.quantity} left`} </HelpBlock>
                </FromGroup>
              </form>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={6} lg={6}>
                <Button> Add to Cart </Button>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6}>
                <Button> Add to Wishlist! </Button>
              </Col>
            </Row>
            <Row>
              <h3>Description</h3>
              <p>{this.state.product.description}</p>
            </Row>
          </Col>
        </Row>
        <Row>
        <h3>Related Products</h3>
        {
              this.props.relatedProducts.map(prod => (
                <Col
                  className="product"
                  key={ prod.id }
                  xs={12} sm={6} md={3} lg={3}>
                  <Link to={`/products/${prod.id}`}>
                    <Thumbnail src={ prod.imageURL } alt={`${prod.name} photo`}>
                    <h5>{ prod.name }</h5>
                    <p>{ `$${prod.price}` }</p>
                    </Thumbnail>
                  </Link>
                </Col>
              ))
            }
        </Row>
      </Grid>
    );
  }

}

Product.propTypes = {
  currentProduct: PropTypes.object.isRequired,
  relatedProducts: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired
}

export default Product
