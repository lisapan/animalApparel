'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Review = db.define('reviews', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  message: {
    type: Sequelize.TEXT
  },
  stars: {
    type: Sequelize.ENUM('1', '2', '3', '4', '5'),
    allowNull: false
  }
})

module.exports = Review
