const request = require('supertest-as-promised')
const {expect} = require('chai')
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
      message: "This product was really SO GREAT.",
      stars: "5"
    })
  })

  describe('POST /', () => {
    it('posts a new review', () => {
      request(app)
      .get('/api/reviews')
      .expect(201)
      .expect(function (res) {
        expect(res.body).to.be.an.instanceOf(Array)
        expect(res.body.length).to.equal(1)
        expect(res.body[1].title).to.equal("So GREAT.")
      })
    })
  })
})


