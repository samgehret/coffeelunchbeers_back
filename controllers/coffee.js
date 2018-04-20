const axios = require('axios')
const CoffeeSpot = require('../models/CoffeeSpot')

exports.list = function (req, res) {
  CoffeeSpot.find({})
    .then(coffeespots => res.json(coffeespots))
}
