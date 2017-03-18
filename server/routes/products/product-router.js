'use strict'

const db = require('APP/db')
const Product = db.model('products')
const Inventory = db.model('inventory')
const Review = db.model('reviews')

module.exports = require('express').Router()
  .get('/sale', (req, res, next) => {
    Product.findAll({ where: {sale: true} })
    .then(products => {
      products = products.sort((a, b) => a.style_id - b.style_id)
      res.json(products)
    })
    .catch(next)
  })
  .get('/sale/:category', (req, res, next) => {
    Product.findAll({ where: {sale: true} })
    .then(products => {
      if (req.params.category === 'people') products = products.filter(product => product.category !== 'pets')
      else products = products.filter(product => product.category === 'pets')
      res.json(products)
    })
    .catch(next)
  })
  .get('/:category', (req, res, next) => {
    Product.findAll({ where: {category: req.params.category} })
    .then(products => res.json(products))
    .catch(next)
  })
	.get('/:category/:productId', (req, res, next) => {
    let product

		Product.findById(req.params.productId, {include: [Inventory, Review]})
		.then(foundProduct => {
      product = foundProduct
      return foundProduct.findRelated()
    })
    .then(relatedProducts => res.json({product, relatedProducts}))
		.catch(next)
	})
