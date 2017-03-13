'use strict'

const db = require('APP/db')
const User = db.model('user')

const { mustBeLoggedIn, forbidden } = require('./auth.filters')

module.exports = require('express').Router()

	.get('/', forbidden('only admins can list users'), (req, res, next) =>
		User.findAll()
		.then(users => res.json(users))
		.catch(next))

	.post('/', (req, res, next) => {
    const cart = req.session.cart || null

    User.create(req.body)
		.then(user => {
      if (cart && cart.user_id === null) {
        req.session.cart = cart
        req.session.cart.user_id = user.id
      }
      res.status(201).json(user)
    })
		.catch(next)
  })

	.get('/:id', mustBeLoggedIn, (req, res, next) =>
		User.findById(req.params.id)
		.then(user => {
      if (user) {
        req.session.user = user
        res.sendStatus(200)
      } else {
        res.sendStatus(401)
      }
    })
		.catch(next))
