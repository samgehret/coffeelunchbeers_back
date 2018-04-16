const users = require('./users')
module.exports = function (app) {
    // Render home page
    // Routes for account creation
  app.get('/users/new', users.createUser)
  app.post('/users', users.create)
//   app.get('/users/:id/verify', users.showVerify)
//   app.post('/users/:id/verify', users.verify)
//   app.post('/users/:id/resend', users.resend)
//   app.get('/users/:id', users.showUser)
//   app.get('/users/login', users.showLogin)
//   app.post('/users/login', users.login)
//   app.get('/users/logout', users.logout)
//   app.post('/users/:id/message', users.sendMessage)
}
