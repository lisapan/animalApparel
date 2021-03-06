const request = require('supertest-as-promised')
const { expect } = require('chai')
const db = require('APP/db')
const Order = require('APP/db/models/order')
const OrderItem = require('APP/db/models/order_item')
const app = require('../../start')

describe('Orders Route:', function () {
  before('wait for the db', () => db.didSync)

  before(() => {
    Order.bulkCreate([])
  })

  before(() => {
    OrderItem.bulkCreate([])
  })
})
