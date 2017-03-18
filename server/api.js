'use strict'

const db = require('APP/db')
const api = module.exports = require('express').Router()

api
  .use('/auth', require('./auth'))
  .use('/users', require('./users'))
  .use('/products', require('./routes/products/product-router'))
  .use('/cart', require('./routes/orders/order-router'))
  .use('/reviews', require('./routes/review-router') )

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
