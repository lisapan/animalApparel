'use strict'

const db = require('APP/db')
const Review = require('./review')
const Product = require('./product')
const {expect} = require('chai')

describe('Review', () => {
  before('wait for the db', () => db.didSync)

  const PokemonSuitReview = {
    title: 'This is AWESOME!!',
    comment: 'This is obviously the best onesie that ever existed. It\'s soft, cuddly, and even has a comfy hood. I do however, feel like it should be named "Pikachu" instead of "Pokemon" because it didn\'t come up in the top 10 of my Google search for Pikachu onesies. But perhaps it will now that this review is added...',
    product_id: 1,
    category: 'pets'
  }

  const PokemonSuit = {
    name: 'Pokemon Dog Costume',
    description: 'Cute, soft, yellow for your pup.',
    price: '30.00',
    sale: true,
    image_URL: 'pokemon-costume-dog.jpg',
    category: 'pets',
    reviews: [PokemonSuitReview]
  }

  describe('created review successfully added to database', () => {
      it('has title, comment and product_id', () => {
        Product.create(PokemonSuit, {
          include: [Review]
        })
          .then(createdProduct => {
            expect(createdProduct.id).to.equal(1)
            expect(createdProduct.reviews[0].get().title).to.deep.equal(PokemonSuitReview.title)
            expect(createdProduct.reviews[0].get().comment).to.deep.equal(PokemonSuitReview.comment)
            expect(createdProduct.reviews[0].get().product_id).to.deep.equal(PokemonSuitReview.product_id)
          })
      })
  })
})
