'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const Product = require('./product')
const Inventory = require('./inventory')
const Order = require('./order')
const OrderItem = require('./order-item')

Product.hasMany(Inventory) // puts a productId on the inventory item
OrderItem.belongsTo(Order) // puts an orderId on the order item
Order.hasMany(OrderItem)   // doesn't add a column; uses Order.orderId
OrderItem.belongsTo(Product) // puts a productId on the order item
User.hasMany(Order, { // puts a userId on the order
  foreignKey: {
    name: 'userId',
    allowNull: true
  }
})

module.exports = { User, Product, Inventory, Order, OrderItem }
