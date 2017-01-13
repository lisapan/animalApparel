'use strict'

const db = require('APP/db')
const OrderItem = db.model('order-items')
const Order = db.model('orders')

const {mustBeLoggedIn, forbidden} = require('../../auth.filters')

module.exports = require('express').Router()
  .post('/', (req, res, next) => {
    OrderItem.create(req.body)
      .then(createdOrderItem => res.status(201).json(createdOrderItem))
      .catch(next)
  })
  .get('/', (req, res, next) => {
    OrderItem.findAll({ where: { orderId: req.session.orderId } })
      .then(foundItems => res.json(foundItems))
      .catch(next)
  })
  .get('/orders', (req, res, next) => {
    Order.findAll({ where: { userId: req.session.userId } })
      .then(foundOrders => res.json(foundOrders))
      .catch(next)
  })
  .put('/', (req, res, next) => {
    OrderItem.update(req.body)
      .then(updatedItem => res.json(updatedItem))
      .catch(next)
  })
  .delete('/', (req, res, next) => {
    OrderItem.destroy({
      where: {
        id: req.params.itemId
      }
    })
      .then(deletedItem => res.status(204).json(deletedItem))
      .catch(next)
  })
  .delete('/', (req, res, next) => {
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
