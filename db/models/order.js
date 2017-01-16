'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Order = db.define('order', {
  status: {
    type: Sequelize.ENUM('unsubmitted', 'submitted', 'processed', 'shipped'),
    allowNull: false
  },
  shippingInfo: {
    type: Sequelize.JSON
  }
})

module.exports = Order
