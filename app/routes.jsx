'use strict'
import React from 'react'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import { Provider } from 'react-redux'


import store from './store'

import App from './components/App'
import Home from './components/Homepage'
import LoginSignup from './components/LoginSignup'
import Checkout from './components/Checkout'
import OrderConfirmation from './components/OrderConfirmation'
import ProductsContainer from './containers/ProductsContainer'
import ProductContainer from './containers/ProductContainer'
import CartContainer from './components/Cart'

import { getProductsByTag, getProductById } from './reducers/action-creators/products'
import { getAndRenderCart } from './reducers/action-creators/cart'

const onProductsContainerEnter = function (nextRouterState) {
  const tag = nextRouterState.params.tag;
  store.dispatch(getProductsByTag(tag));
};

const onProductContainerEnter = function (nextRouterState) {
  const id = nextRouterState.params.productId;
  store.dispatch(getProductById(id));
};

const onCartContainerEnter = function (nextRouterState) {
  const cartId = nextRouterState.params.cartId;
  store.dispatch(getAndRenderCart(cartId));
};


const Routes = () => (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="/home" component={Home}/>
          <Route path="/products/:tag" component={ProductsContainer} onEnter={onProductsContainerEnter}/>
          <Route path="/products/product/:productId" component={ProductContainer} onEnter={onProductContainerEnter} />
          <Route path="/cart/:cartId" component={CartContainer} onEnter={onCartContainerEnter}/>
          <Route path="/account/login" component={LoginSignup}/>
          <Route path="/checkout" component={Checkout}/>
          <Route path="/orderConfirmation" component={OrderConfirmation}/>
          <IndexRedirect to={'/home'}/>
        </Route>
      </Router>
    </Provider>
)

export default Routes
