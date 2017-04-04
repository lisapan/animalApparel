'use strict'

const app = require('APP')
const debug = require('debug')(`${app.name}:auth`)
const passport = require('passport')
const db = require('APP/db')
const User = db.model('user')
const OrderItem = db.model('order_item')
const Order = db.model('order')
const Product = db.model('products')
const auth = require('express').Router()

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser(
  (id, done) => {
    debug('will deserialize user.id=%d', id)
    User.findById(id)
      .then(user => {
        if (!user) debug('deserialize retrieved null user for id=%d', id)
        else debug('deserialize did ok user.id=%d', id)
        done(null, user)
      })
      .catch(err => {
        debug('deserialize did fail err=%s', err)
        done(err)
      })
  }
)

// we can use the passport local strategy func as a constructor that takes in a callback
passport.use(new (require('passport-local').Strategy)(
  (email, password, done) => {
    debug('will authenticate user(email: "%s")', email)
    User.findOne({where: {email}})
    .then(user => {
      if (!user) {
        debug('authenticate user(email: "%s") did fail: no such user', email)
        return done(null, false, { message: 'Login incorrect' })
      }
      return user.authenticate(password)
        .then(ok => {
          if (!ok) {
            debug('authenticate user(email: "%s") did fail: bad password')
            return done(null, false, { message: 'Login incorrect' })
          }
          debug('authenticate user(email: "%s") did ok: user.id=%d', email, user.id)
          done(null, user)
        })
    })
    .catch(done)
  }
))

// POST requests for local login:
auth.post('/login/local', passport.authenticate('local', { successRedirect: '/' }))

auth.get('/whoami', (req, res, next) => res.send(req.user))

auth.get('/cart', (req, res, next) => {
  // after successful authentication we check to see if the user has an unsubmitted order (cart) and reinstate it as their current cart *only* if they haven't created a new cart before logging in
  if (!req.session.cart) {
    Order.findAll({
      where: {
        user_id: req.user.id,
        status: 'unsubmitted'
      },
      include: [{model: OrderItem, include: [Product]}],
      // grab all of the user's unsubmitted carts in order newest to oldest
      order: [['id', 'DESC']]
    })
    .then(orderArray => {
      // grab the newest unsubmitted cart
      const newestCart = orderArray[0]
      req.session.cart = {
        id: newestCart.id,
        isAnon: false
      }
      res.json(newestCart)
    })
    .catch(next)
  } else {
    res.end()
  }
})

auth.post('/logout', (req, res, next) => {
  req.logout()
  // destroy the session
  req.session = null
  res.redirect('/api/auth/whoami')
})

module.exports = auth
