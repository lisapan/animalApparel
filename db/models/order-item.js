'use strict'

'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const OrderItem = db.define('order-items', {
  size: {
    type: Sequelize.ENUM('S', 'M', 'L', 'XL', 'XXL'),
    allowNull: false
  },
  color: {
    type: Sequelize.STRING
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = OrderItem
