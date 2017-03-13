const db = require('APP/db')

const randQty = () => Math.round(Math.random() * 100)

const seedUsers = () => db.Promise.map([
  {name: 'Katie Jackson', email: 'katie@animalapparel.com', password: '12345678'},
  {name: 'Lisa Pan', email: 'lisa@animalapparel.com', password: '12345678'},
  {name: 'Gladys Um', email: 'gladys@animalapparel.com', password: '12345678'},
  {name: 'Chloe Rice', email: 'chloe@animalapparel.com', password: '12345678'},
  {name: 'Sophia Bok', email: 'sophia@animalapparel.com', password: '12345678'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '12345678'},
], user => db.model('user').create(user))

const productList = [
  {
    name: 'Unisex Zip-up Hoodie',
    description: 'This fiery red hoodie is a classic for you and the pup in your life.',
    price: '29.95',
    image_URL: '/img/products/aa-hoodie-unisex.png',
    category: 'men',
    style_id: 1000
  },
  {
    name: 'Dog Zip-up Hoodie',
    description: 'Your pups can look as fresh and clean as their parents in this fiery red hoodie.',
    price: '15.95',
    image_URL: '/img/products/aa-hoodie-dog.png',
    category: 'pets',
    style_id: 1000
  },
  {
    name: 'Unisex Classic Baseball Tee',
    description: 'Ready to hit the sandlot? Show up in style in this class knit baseball tee.',
    price: '23.95',
    image_URL: '/img/products/aa-raglan-unisex.png',
    category: 'men',
    style_id: 1001
  },
  {
    name: 'Puppy Classic Baseball Tee',
    description: 'Ready to hit the sandlot? Show up in style in this class knit baseball tee.',
    price: '15.95',
    image_URL: '/img/products/aa-raglan-dog.png',
    category: 'pets',
    style_id: 1001
  },
  {
    name: 'Unisex Black Puffer Vest',
    description: 'Sleek, sophisticated, and effortlessly cool, only the most fashionable people own this vest.',
    price: '39.95',
    image_URL: '/img/products/black-puffer-vest-unisex.png',
    category: 'men',
    style_id: 1002
  },
  {
    name: 'Dog Black Puffer Vest',
    description: 'Your pup can be fashionable too. Just like you.',
    price: '17.95',
    image_URL: '/img/products/black-puffer-vest-dog.png',
    category: 'pets',
    style_id: 1002
  },
  {
    name: 'Unisex Bruins Jacket',
    description: 'Now you can rep the Boys from Beantown in this zip-up Bruins jacket--get one for everyone in your crew, and one for your doggy too!',
    price: '88.95',
    image_URL: '/img/products/bruins-jacket-unisex.png',
    category: 'men',
    style_id: 1100
  },
  {
    name: 'Women\'s Bruins Jacket',
    description: 'Now you can rep the Boys from Beantown in this zip-up Bruins jacket--get one for everyone in your crew, and one for your doggy too!',
    price: '88.95',
    image_URL: '/img/products/bruins-jacket-womens.png',
    category: 'women',
    style_id: 1100
  },
  {
    name: 'Dog Bruins Jacket',
    description: 'Now you can rep the Boys from Beantown in this zip-up Bruins jacket--get one for everyone in your crew, and one for your doggy too!',
    price: '39.95',
    image_URL: '/img/products/bruins-jacket-dog.png',
    category: 'pets',
    style_id: 1100
  },
  {
    name: 'Unisex Burberry Button-up',
    description: 'Burberry plaid is always in season, always in style. Pick one up for your bae and fur-bae today!',
    price: '79.95',
    image_URL: '/img/products/burberry-blouse-unisex.png',
    category: 'men',
    style_id: 1101
  },
  {
    name: 'Women\'s Burberry Button-up',
    description: 'Burberry plaid is always in season, always in style. Pick one up for your bae and fur-bae today!',
    price: '79.95',
    image_URL: '/img/products/burberry-blouse-womens.png',
    category: 'women',
    style_id: 1101
  },
  {
    name: 'Dog Burberry Button-up',
    description: 'Burberry plaid is always in season, always in style. Pick one up for your bae and fur-bae today!',
    price: '59.95',
    image_URL: '/img/products/burberry-blouse-dog.png',
    category: 'pets',
    style_id: 1101
  },
  {
    name: 'Unisex Denim Vest',
    description: 'This denim cut-off vest is a summer must-have for the whole fam.',
    price: '18.99',
    image_URL: '/img/products/denim-vest-unisex.png',
    sale: true,
    category: 'men',
    style_id: 1102
  },
  {
    name: 'Women\'s Denim Vest',
    description: 'This denim cut-off vest is a summer must-have for the whole fam.',
    price: '18.99',
    image_URL: '/img/products/denim-vest-womens.png',
    sale: true,
    category: 'women',
    style_id: 1102
    },
  {
    name: 'Dog Denim Vest',
    description: 'This denim cut-off vest is a summer must-have for the whole fam.',
    price: '12.99',
    image_URL: '/img/products/denim-vest-dog.png',
    sale: true,
    category: 'pets',
    style_id: 1102
  },
  {
    name: 'Unisex Emerald Puffer Jacket',
    description: 'Stay warm this winter in this brillian emerald green, faux-down puffer coat.',
    price: '109.95',
    image_URL: '/img/products/green-puffer-coat-unisex.png',
    category: 'men',
    style_id: 1003
  },
  {
    name: 'Dog Emerald Puffer Jacket',
    description: 'Stay warm this winter in this brillian emerald green, faux-down puffer coat.',
    price: '77.95',
    image_URL: '/img/products/green-puffer-coat-dog.png',
    category: 'pets',
    style_id: 1003
  },
  {
    name: 'Doggy\'s Fierce in Leopard',
    description: 'Let your pup show off their wild side in this leopard print ensemble!',
    price: '14.95',
    image_URL: '/img/products/leopard-jacket-dog.png',
    sale: true,
    category: 'pets',
    style_id: 1103
  },
  {
    name: 'Women\'s Fierce in Leopard',
    description: 'Show off your wild side in this leopard print knit dress.',
    price: '29.95',
    image_URL: '/img/products/leopard-jacket-womens.png',
    sale: true,
    category: 'women',
    style_id: 1103
  },
  {
    name: 'Unisex Fierce in Leopard',
    description: 'Show off your wild side in this leopard print knit dress.',
    price: '29.95',
    image_URL: '/img/products/leopard-jacket-unisex.png',
    sale: true,
    category: 'men',
    style_id: 1103
  },
  {
    name: 'Dog Pikachu Costume',
    description: 'Gotta catch em all!',
    price: '12.99',
    image_URL: '/img/products/pikachu-costume-dog.png',
    sale: true,
    category: 'pets',
    style_id: 1200
  },
  {
    name: 'Cat Pikachu Costume',
    description: 'Gotta catch em all!',
    price: '12.99',
    image_URL: '/img/products/pikachu-costume-cat.png',
    sale: true,
    category: 'pets',
    style_id: 1200
  },
  {
    name: 'Unisex Pikachu Costume',
    description: 'Gotta catch em all!',
    price: '24.99',
    image_URL: '/img/products/pikachu-costume-unisex.png',
    sale: true,
    category: 'men',
    style_id: 1200
  },
  {
    name: 'Kid\'s Pikachu Costume',
    description: 'Gotta catch em all!',
    price: '16.99',
    image_URL: '/img/products/pikachu-costume-kids.png',
    sale: true,
    category: 'kids',
    style_id: 1200
  },
  {
    name: 'Unisex Checkered Button-up',
    description: 'Channel your inner lumberjack with this checkered, cotton button-up shirt--a hipster wardrobe necessity.',
    price: '18.95',
    image_URL: '/img/products/red-check-shirt-unisex.png',
    sale: true,
    category: 'men',
    style_id: 1104
  },
  {
    name: 'Women\'s Checkered Button-up',
    description: 'Channel your inner lumberjack with this checkered, cotton button-up shirt--a hipster wardrobe necessity.',
    price: '18.95',
    image_URL: '/img/products/red-check-shirtdress-womens.png',
    sale: true,
    category: 'women',
    style_id: 1104
  },
  {
    name: 'Doggy Checkered Button-up',
    description: 'Your pup can channel its little inner lumberjack along with you in this checkered, cotton button-up shirt.',
    price: '12.95',
    image_URL: '/img/products/red-check-jacket-dog.png',
    sale: true,
    category: 'pets',
    style_id: 1104
  },
  {
    name: 'Unisex Shearling Jacket',
    description: 'Suede shearling coats are all the rage. Synthetic of course! Get one for your partner in crime and your four-legged sidekick too!',
    price: '48.95',
    image_URL: '/img/products/shearling-coat-unisex.png',
    category: 'men',
    style_id: 1105
},
  {
    name: 'Women\'s Shearling Jacket',
    description: 'Suede shearling coats are all the rage. Synthetic of course! Get one for your partner in crime and your four-legged sidekick too!',
    price: '48.95',
    image_URL: '/img/products/shearling-coat-womens.png',
    category: 'women',
    style_id: 1105
  },
  {
    name: 'Dog Shearling Jacket',
    description: 'Suede shearling coats are all the rage. Synthetic of course! Get one for your partner in crime and your four-legged sidekick too!',
    price: '19.95',
    image_URL: '/img/products/shearling-coat-dog.png',
    category: 'pets',
    style_id: 1105
  },
  {
    name: 'Unisex Toggle Coat',
    description: 'Cozy, classy, and chic. This red faux wool coat with toggle closure is just what you need to brighten up the winter, and with styles for whole family!',
    price: '88.95',
    image_URL: '/img/products/toggle-coat-unisex.png',
    category: 'men',
    style_id: 1106
  },
  {
    name: 'Women\'s Toggle Coat',
    description: 'Cozy, classy, and chic. This red faux wool coat with toggle closure is just what you need to brighten up the winter, and with styles for whole family!',
    price: '88.95',
    image_URL: '/img/products/toggle-coat-womens.png',
    category: 'women',
    style_id: 1106
  },
  {
    name: 'Cat Toggle Coat',
    description: 'Cozy, classy, and chic. This red faux wool coat with toggle closure is just what you need to brighten up the winter, and with styles for whole family!',
    price: '39.95',
    image_URL: '/img/products/toggle-coat-cat.png',
    category: 'pets',
    style_id: 1106
  }
]

const generateInventory = () => {
  const inventory = []
  let i = 1
  while (i <= productList.length) {
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

const seedProducts = () => db.Promise.map(productList, product => db.model('products').create(product))

const seedInventory = () => db.Promise.map(generateInventory(), inventory => db.model('inventory').create(inventory))

const seedOrders = () => db.Promise.map([
  { status: 'unsubmitted' },
  { status: 'submitted', userId: 5 },
  { status: 'unsubmitted', userId: 2 }
], order => db.model('order').create(order))

const seedOrderItems = () => db.Promise.map([
  { size: 'S', color: 'Pink', quantity: 3, order_id: 1, product_id: 22 },
  { size: 'M', color: 'Blue', quantity: 4, order_id: 1, product_id: 8 },
  { size: 'L', color: 'Orange', quantity: 2, order_id: 1, product_id: 13 },
  { size: 'XXL', color: 'Red', quantity: 1, order_id: 2, product_id: 7 },
  { size: 'XL', color: 'Purple', quantity: 7, order_id: 2, product_id: 30 },
  { size: 'M', color: 'Yellow', quantity: 9, order_id: 3, product_id: 4 }
], item => db.model('order_item').create(item))

db.didSync
  .then(() => db.sync({ force: true }))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedProducts)
  .then(products => console.log(`Seeded ${products.length} products OK`))
  .then(seedInventory)
  .then(inventory => console.log(`Seeded ${inventory.length} inventory OK`))
  .then(seedOrders)
  .then(orders => console.log(`Seeded ${orders.length} orders OK`))
  .then(seedOrderItems)
  .then(items => console.log(`Seeded ${items.length} order items OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())
