'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Inventory = db.define('inventory', {
  size: {
    type: Sequelize.ENUM('XS', 'S', 'M', 'L', 'XL', 'XXL'),
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Inventory
