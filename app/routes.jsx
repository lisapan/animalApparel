'use strict'
import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {connect, Provider} from 'react-redux'

import store from './store'

import App from './components/App'
import Home from './components/Homepage'
import LoginSignup from './components/LoginSignup'

import ProductsContainer from './containers/ProductsContainer'
import ProductContainer from './containers/ProductContainer'
import CartContainer from './containers/CartContainer'

import {getProductsByTag, getProductById} from './action-creators/products'



const onProductsContainerEnter = function (nextRouterState) {
  const tag = nextRouterState.params.tag;
  store.dispatch(getProductsByTag(tag));
};

const onProductContainerEnter = function (nextRouterState) {
  const id = nextRouterState.params.productId;
  store.dispatch(getProductById(id));
};


export default () => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="/products/:tag" component={ProductsContainer} onEnter={onProductsContainerEnter} />
          <Route path="/products/product/:productId" component={ProductContainer} onEnter={onProductContainerEnter} />
          <IndexRedirect to="/home"/>
          <Route path="/cart" component={CartContainer} />
          <Route path="/account/login" component={LoginSignup}/>
        </Route>
      </Router>
    </Provider>
  )
}
