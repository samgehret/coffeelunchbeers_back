const mongoose = require('../db/connection')

const CoffeeSpotSchema = new mongoose.Schema({
  name: String,
  createdAt: { type: Date, default: Date.now }
})

const CoffeeSpot = mongoose.model('CoffeeSpot', CoffeeSpotSchema)

module.exports = CoffeeSpot
