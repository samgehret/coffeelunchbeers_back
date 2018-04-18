const CoffeeSpot = require('../models/CoffeeSpot')
const coffeedata = require('./coffeedata.json')

CoffeeSpot.remove()
.then(() => {
  return CoffeeSpot.collection.insert(coffeedata)
}).then(() => {
  process.exit()
})
