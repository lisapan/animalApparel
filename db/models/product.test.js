'use strict'

const db = require('APP/db')
const Product = db.model('products')
const { expect } = require('chai')

describe('Product', () => {

  before('wait for the db', () => db.didSync)

  const dogPokemonSuit = {
   name: 'Pokemon Dog Costume',
   description: 'Cute, soft, yellow one piece Pikachu costume for your pup.',
   price: '30.00',
   image_URL: 'wYu7cQs.jpg',
   tags: ['pokemon', 'costume', 'halloween', 'pikachu', 'dog']
  }

  describe('Created product successfully added to database', () => {
    it('has a name, description, price, image url, and tags', () =>
      Product.create(dogPokemonSuit)
        .then(createdProduct => {
          expect(createdProduct.name).to.equal(dogPokemonSuit.name)
          expect(createdProduct.description).to.equal(dogPokemonSuit.description)
          expect(createdProduct.price).to.equal(dogPokemonSuit.price)
          expect(createdProduct.image_URL).to.equal(dogPokemonSuit.image_URL)
          expect(createdProduct.tags).to.deep.equal(dogPokemonSuit.tags)
        })
    )
  })
})
