'use strict'

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'react-bootstrap'

import Navbar from './Navbar'

const App = (props) => (
  <Grid fluid>
    <Navbar />
    <div>
      { props.children && React.cloneElement(props.children, props) }
    </div>
  </Grid>
)

App.propTypes = {
  children: PropTypes.node.isRequired
}

const mapState = (state, ownProps) => {
  return {
    children: ownProps.children,
    products: state.products,
    currentProduct: state.currentProduct,
    relatedProducts: state.relatedProducts,
    cart: state.cart,
    auth: state.auth,
    users: state.users,
    form: state.form,
    submittedOrder: state.submittedOrder,
    loading: state.loading,
    reviews: state.reviews
  }
}
const mapDispatch = (dispatch) => ({ dispatch })

export default connect(mapState, mapDispatch)(App)
