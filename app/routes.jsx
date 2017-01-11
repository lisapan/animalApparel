'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {connect, Provider} from 'react-redux'
import axios from 'axios';

import store from './store'

import App from './components/App'
import Homepage from './components/Homepage'

import ProductsContainer from './containers/ProductsContainer'

import { receiveProducts, getProductById } from './action-creators/products'


const onAppEnter = () => {
  const pProducts = axios.get('/api/products');

  return Promise
    .all([pProducts])
    .then(([products]) => {
      store.dispatch(receiveProducts(products));
    })
}


export default () => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App} onEnter={onAppEnter}>
          <Route path="/home" component={Homepage} />
          <Route path="/products/:tag" component={ProductsContainer} />
          <IndexRedirect to="/home"/>
        </Route>
      </Router>
    </Provider>
  )
}
