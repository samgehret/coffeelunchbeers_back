const fetch = require('node-fetch')
const oktaClient = require('../lib/oktaClient')
const axios = require('axios')

exports.createUser = function (req, res) {
  const newUser = {
    profile: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      login: req.body.email
    },
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
  axios.get('https://dev-320743.oktapreview.com/api/v1/users',
    {headers: {authorization: 'SSWS 002ml4zCt6VpTP_akzJ9jdOBWRoUw5TDG_OyjOSlMR'}})
    .then((users) => res.json(users.data))
    .catch((err) => console.log(err))
}

exports.currentUser = function (req, res) {
  console.log('getting current user')
  console.log(req)
//   axios.get('https://dev-320743.oktapreview.com/api/v1/users/me',
//     {headers: {authorization: 'SSWS 002ml4zCt6VpTP_akzJ9jdOBWRoUw5TDG_OyjOSlMR'}})
//     .then((users) => res.json(users.data))
}
