const fetch = require('node-fetch')
const oktaClient = require('../lib/oktaClient')
const axios = require('axios')

exports.createUser = function (req, res) {
  console.log('gettinng here')
  const newUser = {
    profile: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      login: req.body.email
    },
    groupIds: ['00ger25s82SYY4FkQ0h7'],
    credentials: {
      password: {
        value: req.body.password
      }
    }
  }
  oktaClient.createUser(newUser)
        .then(user => {
          res.status(201)
          res.send(user)
        })
        .catch(err => {
          res.status(400)
          res.send(err)
          console.log(err)
        })
}

exports.listUsers = function (req, res) {
  axios.get('https://dev-320743.oktapreview.com/api/v1/groups/00ger25s82SYY4FkQ0h7/users',
    {headers: {authorization: 'SSWS 002ml4zCt6VpTP_akzJ9jdOBWRoUw5TDG_OyjOSlMR'}})
    .then((users) => res.json(users.data))
}

// Lists out all members of the okta group for AdminsCoffeeLunchBeers
exports.listAdmins = function (req, res) {
  axios.get('https://dev-320743.oktapreview.com/api/v1/groups/00geqqpub31y8X5p00h7/users',
    {headers: {authorization: 'SSWS 002ml4zCt6VpTP_akzJ9jdOBWRoUw5TDG_OyjOSlMR'}})
    .then((admins) => res.json(admins.data))
}

// exports.addAdmin = function (req, res) {
//   console.log('adding admin')
//   console.log(req.params.id)
//   axios.put(`https://dev-320743.oktapreview.com/api/v1/groups/00ger25s82SYY4FkQ0h7/users/00ueqft8criBNBRVg0h7`,
//     {headers: {authorization: 'SSWS 002ml4zCt6VpTP_akzJ9jdOBWRoUw5TDG_OyjOSlMR'}})
//     .then((admins) => console.log(admins))
//     .catch((err) => console.log(err.message))
// }

exports.getUser = function (req, res) {
  axios.get(`https://dev-320743.oktapreview.com/api/v1/users/${req.params.id}`,
  {headers: {authorization: 'SSWS 002ml4zCt6VpTP_akzJ9jdOBWRoUw5TDG_OyjOSlMR'}})
  .then((user) => res.json(user.data))
}

exports.getUserGroups = function (req, res) {
  axios.get(`https://dev-320743.oktapreview.com/api/v1/users/${req.params.id}/groups`,
    {headers: {authorization: 'SSWS 002ml4zCt6VpTP_akzJ9jdOBWRoUw5TDG_OyjOSlMR'}})
    .then((groups) => res.json(groups.data))
}

exports.deleteUser = function (req, res) {
  axios.delete(`https://dev-320743.oktapreview.com/api/v1/groups/00ger25s82SYY4FkQ0h7/users/${req.params.id}`,
  {headers: {authorization: 'SSWS 002ml4zCt6VpTP_akzJ9jdOBWRoUw5TDG_OyjOSlMR'}})
  .then(console.log('deleted'))
  axios.delete(`https://dev-320743.oktapreview.com/api/v1/groups/00geqqpub31y8X5p00h7/users/${req.params.id}`,
  {headers: {authorization: 'SSWS 002ml4zCt6VpTP_akzJ9jdOBWRoUw5TDG_OyjOSlMR'}})
  .then(console.log('deleted'))
}

exports.newAdmin = function (req, res) {
  console.log(req.params.id)
  axios.put(`https://dev-320743.oktapreview.com/api/v1/groups/00geqqpub31y8X5p00h7/users/${req.params.id}`,
    {},
    {headers: {authorization: 'SSWS 002ml4zCt6VpTP_akzJ9jdOBWRoUw5TDG_OyjOSlMR'}})
    .catch((err) => console.log(err.message))
}

exports.deleteAdmin = function (req, res) {
  axios.delete(`https://dev-320743.oktapreview.com/api/v1/groups/00geqqpub31y8X5p00h7/users/${req.params.id}`,
  {headers: {authorization: 'SSWS 002ml4zCt6VpTP_akzJ9jdOBWRoUw5TDG_OyjOSlMR'}})
  .then(console.log('deleted'))
}
