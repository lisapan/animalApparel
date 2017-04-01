'use strict'

import React from 'react'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

import store from './store'

import App from './components/App'
import Home from './components/Homepage'
import LoginSignup from './components/auth/LoginSignup'
import Checkout from './components/checkout/Checkout'
import OrderConfirmation from './components/OrderConfirmation'
import AllProducts from './components/AllProducts'
import SaleProducts from './components/SaleProducts'
import SingleProduct from './components/SingleProduct'
import Cart from './components/cart/Cart'

import { getProductsByCategory, getProductById,
         getSaleProductsByCategory, getSaleProducts } from './reducers/action-creators/products'
import { getAndRenderCart } from './reducers/action-creators/cart'

const onAppEnter = function(nextRouterState) {
  store.dispatch(getAndRenderCart())
}

const onSaleCategoryEnter = function(nextRouterState) {
  const category = nextRouterState.params.category
  store.dispatch(getSaleProductsByCategory(category))
}

const onSaleProductsEnter = function(nextRouterState) {
  store.dispatch(getSaleProducts())
}

const onAllProductsEnter = function(nextRouterState) {
  const category = nextRouterState.params.category
  store.dispatch(getProductsByCategory(category, null))
}

const onSingleProductEnter = function(nextRouterState) {
  const id = nextRouterState.params.productId
  const category = nextRouterState.params.category
  store.dispatch(getProductById(category, id))
}

const onCartEnter = function(nextRouterState) {
  store.dispatch(getAndRenderCart())
}

const Routes = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} onEnter={onAppEnter}>
        <Route path="/home" component={Home} />
        <Route path="/sale" component={SaleProducts} onEnter={onSaleProductsEnter} />
        <Route path="/sale/:category" component={SaleProducts} onEnter={onSaleCategoryEnter} />
        <Route path="/products/:category" component={AllProducts} onEnter={onAllProductsEnter} />
        <Route path="/products/:category/:productId" component={SingleProduct} onEnter={onSingleProductEnter} />
        <Route path="/cart" component={Cart} onEnter={onCartEnter} />
        <Route path="/account/login" component={LoginSignup} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/orderConfirmation" component={OrderConfirmation} />
        <IndexRedirect to="/home" />
      </Route>
    </Router>
  </Provider>
)

export default Routes
