'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const Product = require('./product')
const Inventory = require('./inventory')
const Order = require('./order')
const OrderItem = require('./order-item')

Product.hasMany(Inventory)
OrderItem.belongsTo(Order)
OrderItem.belongsTo(Product)
User.hasMany(Order, {
  foreignKey: {
    name: 'userId',
    allowNull: true
  }
})

module.exports = {User, Product, Inventory, Order, OrderItem}
