'use strict'

const db = require('APP/db')
const api = module.exports = require('express').Router()

api
  .use('/auth', require('./routes/users/auth'))
  .use('/users', require('./routes/users/users'))
  .use('/products', require('./routes/products/product-router'))
  .use('/cart', require('./routes/orders/order-router'))
  .use('/reviews', require('./routes/reviews/review-router') )

// Send along any errors
api.use((err, req, res, next) => {
  res.status(500).send(err)
})

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
