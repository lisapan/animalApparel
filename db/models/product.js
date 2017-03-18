'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Product = db.define('products', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: Sequelize.TEXT,
  price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
  },
  image_URL: {
    type: Sequelize.STRING,
    allowNull: false
  },
  sale: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  style_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  instanceMethods: {
    findRelated: function() {
      return Product.findAll({
        where: {
          id: {
            $ne: this.id
          },
          style_id: this.style_id
        }
      })
    }
  }
})

module.exports = Product
