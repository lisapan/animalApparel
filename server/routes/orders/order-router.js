'use strict'

const db = require('APP/db')
const OrderItem = db.model('order-item')
const Order = db.model('order')

// const {mustBeLoggedIn, forbidden} = require('../../auth.filters')

module.exports = require('express').Router()
  //User adds a product to the cart
  .post('/', (req, res, next) => {
    OrderItem.create(req.body.orderItem)
    .then(pendingOrderItem => pendingOrderItem.setProduct(req.body.productId)) // asso. w/ product
    .then(pendingOrderItem => pendingOrderItem.setOrder(req.session.orderId)) // asso. w/ user's order)
    .then(createdOrderItem => res.status(201).json(createdOrderItem))
    .catch(next)
  })
  //All items in an order are rendered to the cart
  .get('/', (req, res, next) => {
    OrderItem.findAll({ where: { orderId: req.session.orderId } })
    .then(foundItems => res.json(foundItems))
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
  //A User clears their cart
  .delete('/:orderId', (req, res, next) => {
    Order.destroy({
      where: {
        id: req.params.orderId
      },
      include: [OrderItem],
      returning: true
    })
    .then(deletedOrder => res.status(204).json(deletedOrder))
    .catch(next)
  })
  //submit order - it updates the shipping info, and updates to 'submitted'
  .put('/order/:orderId', (req, res, next) => {
    Order.update(req.body, {
      where: {
        id: req.params.orderId
      },
      include: [OrderItem],
      returning: true
    })
    .then(updatedOrder => res.status(201).json(updatedOrder))
    .catch(next)
  })
