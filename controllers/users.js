const oktaClient = require('../lib/oktaClient')

exports.createUser = function (req, res) {
  console.log('hello world')
  res.send('Hello World')
}

exports.create = function (req, res) {
  console.log('gettinng here')
  const newUser = {
    profile: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      login: req.body.email
    },
    credentials: {
      password: {
        value: 'P@ssW0rd!!123'
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
