'use strict'

const db = require('APP/db')
const Review = db.model('reviews')

module.exports = require('express').Router()
  //User posts new review for a product
  .post('/', (req, res, next) => {
    Review.create(req.body)
    .then(review => res.sendStatus(201))
    .catch(next)
  })
