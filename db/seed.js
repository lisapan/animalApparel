const db = require('APP/db')

const randQty = () => Math.round(Math.random() * 100)

const generateInventory = () => {
  const inventory = []
  let i = 1
  while (i <= 35) {
    inventory.push({size: 'XS', quantity: randQty(), product_id: i})
    inventory.push({size: 'S', quantity: randQty(), product_id: i})
    inventory.push({size: 'M', quantity: randQty(), product_id: i})
    inventory.push({size: 'L', quantity: randQty(), product_id: i})
    inventory.push({size: 'XL', quantity: randQty(), product_id: i})
    inventory.push({size: 'XXL', quantity: randQty(), product_id: i})
    i++
  }
  return inventory
}

const seedUsers = () => db.Promise.map([
  {name: 'Katie Jackson', email: 'katie@animalapparel.com', password: '5678'},
  {name: 'Lisa Pan', email: 'lisa@animalapparel.com', password: '5678'},
  {name: 'Gladys Um', email: 'gladys@animalapparel.com', password: '5678'},
  {name: 'Chloe Rice', email: 'chloe@animalapparel.com', password: '5678'},
  {name: 'Sophia Bok', email: 'sophia@animalapparel.com', password: '5678'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
], user => db.model('users').create(user))

const seedProducts = () => db.Promise.map([
  {
    name: 'Adult Zip-up Hoodie',
    description: 'This fiery red hoodie is a classic for you and the pup in your life.',
    price: '29.95',
    imageURL: '/img/products/aa-hoodie-unisex.jpg',
    tags: ['red', 'hoodie', 'unisex', 'men', 'women']
  },
  {
    name: 'Dog Zip-up Hoodie',
    description: 'Your pups can look as fresh and clean as theirs parents in this fiery red hoodie.',
    price: '15.95',
    imageURL: 'aa-hoodie-dog.jpg',
    tags: ['red', 'hoodie', 'pet', 'dogs']
  },
  {
    name: 'Classic Baseball Tee',
    description: 'Ready to hit the sandlot? Show up in style in this class knit baseball tee.',
    price: '23.95',
    imageURL: '/img/products/aa-raglan-unisex.jpg',
    tags: ['shirt', 'white', 'black', 'unisex', 'men', 'women']
  },
  {
    name: 'Puppy Baseball Tee',
    description: 'Ready to hit the sandlot? Show up in style in this class knit baseball tee.',
    price: '15.95',
    imageURL: '/img/products/aa-raglan-dog.jpg',
    tags: ['shirt', 'white', 'pet', 'black', 'dogs']
  },
  {
    name: 'Unisex Black Puffer Vest',
    description: 'Sleek, sophisticated, and effortlessly cool, only the most fashionable people own this vest.',
    price: '39.95',
    imageURL: '/img/products/black-puffer-vest-unisex.jpg',
    tags: ['black', 'unisex', 'women', 'men', 'vest']
  },
  {
    name: 'Dog Black Puffer Vest',
    description: 'Your pup can be fashionable too. Just like you.',
    price: '17.95',
    imageURL: '/img/products/black-puffer-vest-dog.jpg',
    tags: ['black', 'pet', 'dogs', 'vest']
  },
  {
    name: 'Unisex Bruins Jacket',
    description: 'Now you can rep the Boys from Beantown in this zip-up Bruins jacket--get one for everyone in your crew, and one for your doggy too!',
    price: '88.95',
    imageURL: '/img/products/bruins-jacket-unisex.jpg',
    tags: ['black', 'yellow', 'unisex', 'men', 'jacket']
  },
  {
    name: 'Women\'s Bruins Jacket',
    description: 'Now you can rep the Boys from Beantown in this zip-up Bruins jacket--get one for everyone in your crew, and one for your doggy too!',
    price: '88.95',
    imageURL: '/img/products/bruins-jacket-womens.jpg',
    tags: ['black', 'yellow', 'jacket', 'women']
  },
  {
    name: 'Dog Bruins Jacket',
    description: 'Now you can rep the Boys from Beantown in this zip-up Bruins jacket--get one for everyone in your crew, and one for your doggy too!',
    price: '39.95',
    imageURL: '/img/products/bruins-jacket-dog.jpg',
    tags: ['black', 'yellow', 'jacket', 'pet', 'dogs']
  },
  {
    name: 'Unisex Burberry Button-up',
    description: 'Burberry plaid is always in season, always in style. Pick one up for your bae and fur-bae today!',
    price: '79.95',
    imageURL: '/img/products/burberry-blouse-unisex.jpg',
    tags: ['tan', 'unisex', 'men', 'shirt']
  },
  {
    name: 'Women\'s Burberry Button-up',
    description: 'Burberry plaid is always in season, always in style. Pick one up for your bae and fur-bae today!',
    price: '79.95',
    imageURL: '/img/products/burberry-blouse-womens.jpg',
    tags: ['tan', 'shirt', 'brown', 'tan', 'women']
  },
  {
    name: 'Dog Burberry Button-up',
    description: 'Burberry plaid is always in season, always in style. Pick one up for your bae and fur-bae today!',
    price: '59.95',
    imageURL: '/img/products/burberry-blouse-dog.jpg',
    tags: ['tan', 'blouse', 'pet', 'brown', 'tan', 'dogs']
  },
  {
    name: 'Unisex Denim Vest',
    description: 'This denim cut-off vest is a summer must-have for the whole fam.',
    price: '18.99',
    imageURL: '/img/products/denim-vest-unisex.jpg',
    tags: ['blue', 'unisex', 'men', 'vest', 'sale']
  },
  {
    name: 'Women\'s Denim Vest',
    description: 'This denim cut-off vest is a summer must-have for the whole fam.',
    price: '18.99',
    imageURL: '/img/products/denim-vest-womens.jpg',
    tags: ['blue', 'vest', 'women', 'sale']
    },
  {
    name: 'Dog Denim Vest',
    description: 'This denim cut-off vest is a summer must-have for the whole fam.',
    price: '12.99',
    imageURL: '/img/products/denim-vest-dog.jpg',
    tags: ['blue', 'vest', 'pet', 'dogs', 'sale']
    },
  {
    name: 'Gray Faux Fur-Lined Parka',
    description: 'Keep warm in this beautiful grey parka! Made with synthetic fabrics.',
    price: '89.95',
    imageURL: '/img/products/gray-coat-womens.jpg',
    tags: ['gray', 'jacket', 'women']
  },
  {
    name: 'Gray Faux Fur-Lined Barka',
    description: 'You dog will thank you for dressing them in this warm parka during their evening walks!',
    price: '39.95',
    imageURL: '/img/products/gray-coat-dog.jpg',
    tags: ['gray', 'pet', 'jacket', 'dogs']
  },
  {
    name: 'Unisex Emerald Puffer Jacket',
    description: 'Stay warm this winter in this brillian emerald green, faux-down puffer coat.',
    price: '109.95',
    imageURL: '/img/products/green-puffer-coat-unisex.jpg',
    tags: ['green', 'unisex', 'women', 'men', 'jacket']
  },
  {
    name: 'Dog Emerald Puffer Jacket',
    description: 'Stay warm this winter in this brillian emerald green, faux-down puffer coat.',
    price: '77.95',
    imageURL: '/img/products/green-puffer-coat-dog.jpg',
    tags: ['green', 'pet', 'dogs', 'jacket']
  },
  {
    name: 'Doggy\'s Fierce in Leopard Too!',
    description: 'Let your pup show off their wild side in this leopard print ensemble!',
    price: '14.95',
    imageURL: '/img/products/leopard-jacket-dog.jpeg',
    tags: ['brown', 'tan', 'pet', 'dogs', 'vest']
  },
  {
    name: 'Fierce in Leopard',
    description: 'Show off your wild side in this leopard print knit dress.',
    price: '29.95',
    imageURL: '/img/products/leopard-jacket-womens.jpeg',
    tags: ['brown', 'tan', 'women', 'vest']
  },
  {
    name: 'Fierce in Leopard',
    description: 'Show off your wild side in this leopard print knit dress.',
    price: '29.95',
    imageURL: '/img/products/leopard-jacket-unisex.jpeg',
    tags: ['brown', 'tan', 'unisex, men, women', 'vest']
  },
  {
    name: 'Pikachu Dog Costume',
    description: 'Gotta catch em all!',
    price: '12.99',
    imageURL: '/img/products/pikachu-costume-dog.jpg',
    tags: ['yellow', 'pet', 'dog', 'costumes', 'sale']
  },
  {
    name: 'Pikachu Cat Costume',
    description: 'Gotta catch em all!',
    price: '12.99',
    imageURL: '/img/products/pikachu-costume-cat.jpg',
    tags: ['yellow', 'pet', 'cat', 'costumes', 'sale']
  },
  {
    name: 'Pikachu Adult Costume',
    description: 'Gotta catch em all!',
    price: '24.99',
    imageURL: '/img/products/pikachu-costume-unisex.jpeg',
    tags: ['yellow', 'unisex', 'men', 'women', 'costumes', 'sale']
  },
  {
    name: 'Pikachu Kid Costume',
    description: 'Gotta catch em all!',
    price: '16.99',
    imageURL: '/img/products/pikachu-costume-kids.jpg',
    tags: ['yellow', 'kids', 'costumes', 'sale']
  },
  {
    name: 'Unisex Checkered Button-up',
    description: 'Channel your inner lumberjack with this checkered, cotton button-up shirt--a hipster wardrobe necessity.',
    price: '18.95',
    imageURL: '/img/products/red-check-shirt-unisex.jpeg',
    tags: ['red', 'black', 'unisex', 'men', 'women', 'shirt']
  },
  {
    name: 'Women\'s Checkered Shirtdress',
    description: 'Channel your inner lumberjack with this checkered, cotton button-up shirt--a hipster wardrobe necessity.',
    price: '18.95',
    imageURL: '/img/products/red-check-shirtdress-womens.jpg',
    tags: ['red', 'black', 'women', 'shirt']
  },
  {
    name: 'Doggy Checkered Button-up',
    description: 'Your pup can channel its little inner lumberjack along with you in this checkered, cotton button-up shirt.',
    price: '12.95',
    imageURL: '/img/products/red-check-jacket-dog.jpg',
    tags: ['red', 'black', 'pet', 'dogs', 'shirt']
  },
  {
    name: 'Unisex Shearling Jacket',
    description: 'Suede shearling coats are all the rage. Synthetic of course! Get one for your partner in crime and your four-legged sidekick too!',
    price: '48.95',
    imageURL: '/img/products/shearling-coat-unisex.jpg',
    tags: ['unisex', 'men', 'jacket', 'brown', 'tan']
},
  {
    name: 'Women\'s Shearling Jacket',
    description: 'Suede shearling coats are all the rage. Synthetic of course! Get one for your partner in crime and your four-legged sidekick too!',
    price: '48.95',
    imageURL: '/img/products/shearling-coat-womens.jpg',
    tags: ['jacket', 'brown', 'tan', 'women']
  },
  {
    name: 'Dog Shearling Jacket',
    description: 'Suede shearling coats are all the rage. Synthetic of course! Get one for your partner in crime and your four-legged sidekick too!',
    price: '19.95',
    imageURL: '/img/products/shearling-coat-dog.jpg',
    tags: ['jacket', 'pet', 'brown', 'tan', 'dogs']
  },
  {
    name: 'Unisex Toggle Coat',
    description: 'Cozy, classy, and chic. This red faux wool coat with toggle closure is just what you need to brighten up the winter, and with styles for whole family!',
    price: '88.95',
    imageURL: '/img/products/toggle-coat-unisex.jpg',
    tags: ['unisex', 'men', 'jacket', 'red', 'tan']
  },
  {
    name: 'Women\'s Toggle Coat',
    description: 'Cozy, classy, and chic. This red faux wool coat with toggle closure is just what you need to brighten up the winter, and with styles for whole family!',
    price: '88.95',
    imageURL: '/img/products/toggle-coat-womens.jpg',
    tags: ['jacket', 'red', 'tan', 'women']
  },
  {
    name: 'Dog Toggle Coat',
    description: 'Cozy, classy, and chic. This red faux wool coat with toggle closure is just what you need to brighten up the winter, and with styles for whole family!',
    price: '39.95',
    imageURL: '/img/products/toggle-coat-dog.jpg',
    tags: ['jacket', 'pet', 'red', 'tan', 'dogs']
  }

], product => db.model('products').create(product))

const seedInventory = () => db.Promise.map(generateInventory(), inventory => db.model('inventory').create(inventory))

db.didSync
  .then(() => db.sync({ force: true }))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedProducts)
  .then(products => console.log(`Seeded ${products.length} products OK`))
  .then(seedInventory)
  .then(inventory => console.log(`Seeded ${inventory.length} inventory OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
