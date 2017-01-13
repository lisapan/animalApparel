'use strict'

const db = require('APP/db')
const OrderItem = db.model('order-items')
const { expect } = require('chai')

describe('Order Items', () => {

  before('wait for the db', () => db.didSync)

  const sampleOrderItem = {
   size: 'M',
   color: 'Black',
   quantity: 2
  }

  describe('Created order item successfully added to database', () => {
    it('has a size, color, and quantity', () =>
      Order.create(sampleOrderItem)
        .then(createdOrderItem => {
          expect(createdOrderItem.size).to.equal(sampleOrderItem.size)
          expect(createdOrderItem.color).to.equal(sampleOrderItem.color)
          expect(createdOrderItem.quantity).to.equal(sampleOrderItem.quantity)
        })
    )
  })
})
