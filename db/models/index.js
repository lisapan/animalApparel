'use strict'

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')
const Product = require('./product')
const Inventory = require('./inventory')
const Order = require('./order')
const OrderItem = require('./order_item')
const Review = require('./review')

Product.hasMany(Inventory) // puts a product_id on the inventory item
OrderItem.belongsTo(Order) // puts an order_id on the order item
OrderItem.belongsTo(Product) // puts a product_id on the order item
Order.hasMany(OrderItem)
User.hasMany(Order) // puts a user_id on the order
Product.hasMany(Review) // puts a product_id on the review
User.hasMany(Review) // puts a user_id on the review

module.exports = { User, Product, Inventory, Order, OrderItem, Review }
