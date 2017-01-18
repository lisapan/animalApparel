'use strict'

const db = require('APP/db')
const OrderItem = db.model('order_item')
const Order = db.model('order')
const Product = db.model('products')

// const {mustBeLoggedIn, forbidden} = require('../../auth.filters')

const cart = (req, res, next) => {
  if (req.session.cart) {
    Order.find({
      where: {id: req.session.cart.id},
      include: [{model: OrderItem, include: [Product]}]
    })
    .then(foundCart => {
      req.session.cart = foundCart
    })
    .finally(next)
  } else {
    Order.create({
      status: 'unsubmitted',
      user_id: req.user ? req.session.user.id : null
    }, {
      include: [{model: OrderItem, include: [Product]}]
    })
      .then(createdCart => {
        req.session.cart = createdCart
      })
      .finally(next)
  }
}

module.exports = require('express').Router()
  .use(cart)

  //User adds a product to the cart
  .post('/', (req, res, next) => {
    OrderItem.create({
      size: req.body.orderItem.size,
      quantity: req.body.orderItem.quantity,
      order_id: req.session.cart.id,
      product_id: req.body.product_id
    }, {include: [Order]})
    .then(createdOrderItem => {
      if (!req.session.cart.order_items) {
        req.session.cart.order_items = [createdOrderItem] //If this is the first item in the cart, init the cart
      }
      else {
        req.session.cart.order_items.push(createdOrderItem) //Otherwise add item to existing cart
      }
      res.send(req.session.cart)})
    .catch(next)
  })

  //All items in an order are rendered to the cart
  .get('/:cartId', (req, res, next) => {
    Order.find({
      where: {id: req.params.cartId},
      include: [{model: OrderItem, include: [Product]}]
    })
    .then(foundOrder => res.json(foundOrder))
    .catch(next)
  })
  //A User views a list of past orders
  .get('/orders', (req, res, next) => {
    Order.findAll({ where: { userId: req.session.userId } })
    .then(foundOrders => res.json(foundOrders))
    .catch(next)
  })
  //A User updates an order item in the cart
  .put('/:itemId', (req, res, next) => {
    OrderItem.update(req.body, {
      where: {
        id: req.params.itemId
      },
      returning: true
    })
    .spread(numUpdatedItems, updatedItemArr => res.json(updatedItemArr))
    .catch(next)
  })
  //A User deletes an item from the cart
  .delete('/:itemId', (req, res, next) => {
    OrderItem.destroy({
      where: {
        id: req.params.itemId
      }
    })
    .then(deletedItem => res.status(204).json(deletedItem))
    .catch(next)
  })
  //submit order - it updates the shipping info, and updates to 'submitted'
  .put('/order/:orderId', (req, res, next) => {
    Order.update(req.body, {
      where: {
        id: req.params.orderId
      },
      returning: true
    })
    .then(updatedOrder => res.status(201).json(updatedOrder))
    .catch(next)
  })
