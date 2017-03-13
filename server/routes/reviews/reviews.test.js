const request = require('supertest-as-promised')
const { expect } = require('chai')
const db = require('APP/db')
const Review = require('APP/db/models/review')
const Product = require('APP/db/models/review')
const app = require('../start')

//USER authentication not implemented yet.

describe('Reviews Route:', function () {
  before('wait for the db', () => db.didSync)

  before(() => {
    Review.create({
      title: "So GREAT.",
      message: "This product was really SO GREAT."
    })
  })

  describe('POST /', () => {
    it('posts a new review', () => {
      request(app)
      .get('/api/reviews')
      .expect(201)
    })
  })
})
