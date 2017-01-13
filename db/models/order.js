'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Order = db.define('orders', {
  status:  {
    type: Sequelize.ENUM('unsubmitted', 'submitted', 'shipped'),
    allowNull: false
  }
})

module.exports = Order
