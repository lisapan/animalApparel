import React, { Component, PropTypes } from 'react'
import { LinkContainer } from 'react-router-bootstrap'

import { Grid, Row, Col, Glyphicon,
         Thumbnail, Button, FormControl,
         FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap'

import RelatedProducts from './RelatedProducts'

export default class Product extends Component {

  constructor (props){
    super(props)
    this.state = {
      selectedItem: {},
      selectedQuantity: 1,
    }
    this.sizeClicked = this.sizeClicked.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.getValidationState = this.getValidationState.bind(this)
  }

  sizeClicked (event, item){
    event.preventDefault()
    this.setState({
      selectedItem: item
    })
  }

  getValidationState() {
    const quantity = this.state.selectedQuantity
    const stock = this.state.selectedItem.quantity
    if (quantity > stock || quantity < 0) return 'error'
    else if (quantity > 0 && quantity <= stock) return 'success'
    else if (quantity == 0) return 'warning'
  }

  handleChange(event) {
    this.setState({ selectedQuantity: event.target.value });
  }

  render() {

    const product = this.props.currentProduct

    return  (<Grid fluid={true}>
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
                      { product.inventories && (
                          product.inventories.map((inventory, index) => {

                             return <Button
                                     key={inventory.id}
                                     type="button"
                                     className="size-thumbnail"
                                     onClick={(event) => this.sizeClicked(event, inventory)}
                                     disabled={ inventory.quantity < 0}>
                                       {inventory.size}
                                   </Button>
                           }))
                     }
                   </Row>
                   <Row>
                     <form>
                       <FormGroup
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
                       </FormGroup>
                     </form>
                   </Row>
                   <Row>
                     <Col xs={12} sm={12} md={6} lg={6}>
                       <Button bsSize="large"> Add to Cart </Button>
                     </Col>
                     <Col xs={12} sm={12} md={6} lg={6}>
                       <Button bsSize="large">
                         <Glyphicon glyph="heart" /> Add to Wishlist!
                       </Button>
                     </Col>
                   </Row>
                   <Row>
                     <h3>Description:</h3>
                     <p>{product.description}</p>
                   </Row>
                 </Col>
               </Row>
               <RelatedProducts relatedProducts={this.props.relatedProducts} />
             </Grid>
             )
  }

}

Product.propTypes = {
  currentProduct: PropTypes.object.isRequired,
  relatedProducts: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired
}
