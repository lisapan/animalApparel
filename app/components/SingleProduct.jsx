'use strict'

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Thumbnail, Button, FormControl,
         FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap'
import { addCartItemAndGetUpdatedCart } from '../reducers/action-creators/cart'
import RelatedProducts from './RelatedProducts'
import Reviews from './reviews/ProductReviews'

class Product extends Component {

  constructor (props) {
    super(props)
    this.state = {
      selectedItem: {},
      selectItemIsValid: false,
      selectedQuantity: 1,
      selectedQuantityIsValid: true
    }
  }

  addToCart = event => {
    event.preventDefault()
    const item = {
      size: this.state.selectedItem.size,
      quantity: this.state.selectedQuantity,
      totalInStock: this.state.selectedItem.quantity,
      product_id: this.props.currentProduct.id
    }

    this.setState({
      selectedItem: {},
      selectItemIsValid: false,
      selectedQuantity: '',
      selectedQuantityIsValid: false
    })

    this.props.handleAddItem(item)
  }

  sizeClicked = item => event => {
    event.preventDefault()
    this.setState({
      selectedItem: item,
      selectItemIsValid: true
    })
  }

  isInvalid = () => {
    return !(
      this.state.selectItemIsValid &&
      this.state.selectedQuantityIsValid
    )
  }

  handleChange = event => {
    this.setState({
      selectedQuantity: event.target.value,
      selectedQuantityIsValid: true
    })
  }

  render() {
    const product = this.props.currentProduct
    const quantities = Array((this.state.selectedItem.quantity) || 1).fill().map((_, idx) => idx + 1)

    return  (
      <div>
        <Row>
         <Col xs={12} sm={12} md={6} lg={6}>
           <Thumbnail
             className="product-detail"
             src={ product.image_URL } alt={`${product.name} photo`} />
         </Col>
         <Col xs={12} sm={12} md={6} lg={6}>
           <Row className="product-detail">
             <h2>{ product.name }</h2>
           </Row>
           <Row className="product-detail">
             <p className="no-margin">{ `$${product.price}` }</p>
           </Row>
           <hr />
           <Row className="product-detail">
             <h3>Size:</h3>
              { product.inventories && (
                  product.inventories.sort((a, b) => a.id > b.id).map(inventory =>
                    <Button
                      key={inventory.id}
                      type="button"
                      className="size-thumbnail"
                      onClick={this.sizeClicked(inventory)}
                      disabled={inventory.quantity < 1}>
                      {inventory.size}
                    </Button>
                  )
                )
              }
           </Row>
           <Row className="product-detail">
             <form>
               <FormGroup
                 controlId="quantity">
                 <ControlLabel className="detail">Quantity:</ControlLabel>
                 <FormControl
                   componentClass="select"
                   type="text"
                   placeholder="..."
                   value={this.state.selectedQuantity}
                   onChange={this.handleChange}>
                   { quantities && quantities.map(quantity =>
                       <option key={quantity} value={quantity}>
                         {quantity}
                       </option>
                     ) }
                 </FormControl>
               </FormGroup>
             </form>
           </Row>
           <Button
             className="product-detail"
             bsStyle="primary"
             bsSize="large"
             type="submit"
             disabled={this.isInvalid()}
             onClick={this.addToCart}>
             { this.props.loading && this.state.selectedItem ? 'Adding to bag...' : 'Add to Bag' }
           </Button>
           <hr />
           <Row className="product-detail">
             <h3>Description:</h3>
             <p>{product.description}</p>
           </Row>
           <Row className="product-detail">
             <h3>Reviews:</h3>
             <Reviews
               currentProduct={this.props.currentProduct || {}}
               reviews={this.props.currentProduct.reviews} />
           </Row>
         </Col>
        </Row>
        <RelatedProducts relatedProducts={this.props.relatedProducts} />
      </div>
    )
  }
}

Product.propTypes = {
  currentProduct: PropTypes.object.isRequired,
  relatedProducts: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  handleAddItem: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  currentProduct: state.currentProduct,
  relatedProducts: state.relatedProducts,
  loading: state.loading,
})

const mapDispatchToProps = dispatch => ({
  handleAddItem: item => dispatch(addCartItemAndGetUpdatedCart(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(Product)
