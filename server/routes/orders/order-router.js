'use strict'

const db = require('APP/db')
const OrderItem = db.model('order-item')
const Order = db.model('order')
const Product = db.model('products')

// const {mustBeLoggedIn, forbidden} = require('../../auth.filters')

const cart = (req, res, next) => {
  if (req.session.cart) {
    Order.findById(req.session.cart.id)
      .then(cart => req.session.cart = cart)
      .finally(next)
  } else {
    Order.create({user_id: req.user? req.session.user.id : null})
      .then(cart => req.session.cart = cart)
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
    })
    .then(createdOrderItem => res.send(req.session.cart))
    .catch(next)
  })

  // .post('/', (req, res, next) => {
  //   OrderItem.create(req.body.orderItem)
  //   .then(pendingOrderItem => pendingOrderItem.setProduct(req.body.productId)) // asso. w/ product
  //   .then(pendingOrderItem => {
  //     if (req.body.orderId) {
  //       return pendingOrderItem.setOrder(req.body.orderId) // if there's already an order, asso w/ that order
  //     } else {
  //       return Order.create({ status: 'unsubmitted' }) // otherwise, create one and associate
  //       .then(pendingOrder => pendingOrder.setUser(req.session.userId)) // asso w/ user
  //       .then(createdOrder => pendingOrderItem.setOrder(createdOrder.id))
  //     }
  //   })
  //   .then(createdOrderItem => res.status(201).json(createdOrderItem))
  //   .catch(next)
  // })
  //All items in an order are rendered to the cart
  .get('/:orderId', (req, res, next) => {
    OrderItem.findAll({
      where: { order_id: req.params.orderId },
      include: [Product]
    })
    .then(foundItems => {
      res.json(foundItems)})
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
  // // to use for wishlist implementation (can delete a wishlist, not a cart-- can only add/delete cart items)
  // .delete('/', (req, res, next) => {
  //   Order.destroy({
  //     where: {
  //       id: req.session.orderId
  //     },
  //     include: [OrderItem],
  //     returning: true
  //   })
  //   .then(deletedOrder => res.status(204).json(deletedOrder))
  //   .catch(next)
  // })
