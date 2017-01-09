'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {connect, Provider} from 'react-redux'

import store from './store'

import App from './components/App'
import Homepage from './components/Homepage'
import SingleProduct from './components/SingleProduct'
import MultipleProducts from './components/MultipleProducts'

render (
  <Provider store={store}>
    <Router history={browserHistory}> {/* browserHistory vs. hashHistory??? */}
      <Route path="/" component={App}>
        <Route path="homepage" component={Homepage} />
        <Route path="multipleproducts" component={MultipleProducts} />
        <Route path="singleproduct" component={SingleProduct} />
        <IndexRedirect to="/homepage"/>
      </Route>
    </Router>
  </Provider>
)
