'use strict'

const db = require('APP/db')
const Order = db.model('orders')
const { expect } = require('chai')

describe('Order', () => {

  before('wait for the db', () => db.didSync)

  const sampleOrder = {
   status: 'unsubmitted'
  }

  describe('Created order successfully added to database', () => {
    it('has a status', () =>
      Order.create(sampleOrder)
        .then(createdOrder => {
          expect(createdOrder.status).to.equal(createdOrder.status)
        })
    )
  })
})
