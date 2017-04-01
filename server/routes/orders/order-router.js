'use strict'

const db = require('APP/db')
const OrderItem = db.model('order_item')
const Order = db.model('order')
const Product = db.model('products')

// This middleware checks whether the request is coming from an anonymous or an authenticated user.

// If anonymous, their session will have an anonCartId so they're associated w/ the order despite it not having a user_id). Unless the user creates an account or logs in, the session will be active for 30 days.

// If authenticated, the user's order is associated w/ their id, so the session can be destroyed upon logout without affecting their cart.

const addUserToAnonCart = (request, next) => {
  Order.findById(request.session.cart.id)
  .then(foundOrder => {
    // associate the user with anon cart
    return foundOrder.update({user_id: request.user.id})
  })
  .then(updatedOrder => {
    // update session accordingly
    request.session.cart = {
      id: updatedOrder.id,
      isAnon: false
    }
    return updatedOrder
  })
  .then(() => next())
  .catch(err => {
    const error = new Error(`Anon to Auth Order Update Error - Could not associate user #${request.session.user_id} with cart #${request.session.cart_id}: ${err.stack}`)

    next(error)
  })
}

const createNewCart = (request, next) => {
  Order.create({
    status: 'unsubmitted',
    user_id: request.user ? request.user.id : null
  })
  .then(createdCart => {
    request.session.cart = {
      id: createdCart.id,
      isAnon: request.user === undefined
    }
    return createdCart
  })
  .then(() => next())
  .catch(err => {
    const error = new Error(`Order Creation Error - Could not create cart for user ${request.user ? request.user.id : 'Anonymous'}: ${err.stack}`)

    next(error)
  })
}

const cartMiddleware = (req, res, next) => {
  // create a cart for user if needed
  if (!req.session.cart) {
    createNewCart(req, next)
  // if user is authenticated now but had a cart before logging in
  } else if (req.user) {
    // associate the user with that cart
    if (req.session.cart && req.session.cart.isAnon) addUserToAnonCart(req, next)
    next()
  } else {
    // otherwise user already has a cart on session
    next()
  }
}

module.exports = require('express').Router()
  .use(cartMiddleware)

  //User adds a product to the cart
  .post('/', (req, res, next) => {
    OrderItem.create({
      size: req.body.size,
      quantity: req.body.quantity,
      totalInStock: req.body.totalInStock,
      product_id: req.body.product_id,
      order_id: req.session.cart.id
    })
    .then(createdOrderItem => {
      return Order.findOne({
        where: {
          id: req.session.cart.id,
        },
        include: [{model: OrderItem, include: [Product]}]
      })
    })
    .then(cart => res.status(201).json(cart))
    .catch(err => next(
      new Error(`OrderItem Creation Error -  ${err.stack}`)
    ))
  })

  // A user views their cart
  .get('/', (req, res, next) => {
    Order.findOne({
      where: {
        id: req.session.cart.id
      },
      include: [{model: OrderItem, include: [Product]}]
    })
    .then(foundOrder => res.status(200).json(foundOrder))
    .catch(err => next(
      new Error(`Order Lookup Error - Could not find cart #${req.session.cart.id}: ${err.stack}`)
    ))
  })

  //A User updates an order item in the cart
  .put('/:itemId', (req, res, next) => {
    OrderItem.findById(req.params.itemId)
    .then(item => item.update(req.body))
    .then(updatedItem => {
      Order.findOne({
        where: {
          id: req.session.cart.id
        },
        include: [{model: OrderItem, include: [Product]}]
      })
      .then(cart => res.status(201).json(cart))
      .catch(err => next(
        new Error(`Post Update-Item Order Lookup Error - Could not find cart #${req.session.cart.id}: ${err.stack}`)
      ))
    })
    .catch(err => next(
      new Error(`OrderItem Update Error, ${err.status} - Could not update cart item: ${err.stack}`)
    ))
  })

  //A User deletes an item from the cart
  .delete('/:itemId', (req, res, next) => {
    OrderItem.destroy({
      where: {
        id: req.params.itemId
      }
    })
    .then(deletedItem => {
      Order.findOne({
        where: {
          id: req.session.cart.id
        },
        include: [{model: OrderItem, include: [Product]}]
      })
      .then(cart => res.status(200).json(cart))
      .catch(err => {
        console.error(new Error(`Post Delete-Item Order Lookup Error - Could not find cart #${req.session.cart.id}: ${err.stack}`))
      })
    })
    .catch(err => next(
      new Error(`OrderItem Delete Error - Could not delete cart item: ${err.stack}`)
    ))
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
    .then(updatedOrder => {
      req.session = {userId: updatedOrder.user_id}
      res.status(201).json(updatedOrder)})
    .catch(next)
  })
