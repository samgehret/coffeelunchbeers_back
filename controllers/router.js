const users = require('./users')
// const { ExpressOIDC } = require('@okta/oidc-middleware')
const OktaJwtVerifier = require('@okta/jwt-verifier')

const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: 'https://dev-320743.oktapreview.com/oauth2/auseqn9hpdtwm1aeO0h7',
  assertClaims: {
    aud: 'http://localhost:3001/users/list'
    // new: true
  }
})

function authenticationRequired (req, res, next) {
  const authHeader = req.headers.authorization || ''
  const match = authHeader.match(/Bearer (.+)/)

  if (!match) {
    return res.status(401).end()
  }

  const accessToken = match[1]

  return oktaJwtVerifier.verifyAccessToken(accessToken)
      .then((jwt) => {
        req.jwt = jwt
        // console.log('access token')
        console.log(jwt)
        next()
      })
      .catch((err) => {
        res.status(401).send(err.message)
        console.log(err.message)
      })
}

// const oidc = new ExpressOIDC({
//   issuer: 'https://dev-320743.oktapreview.com/oauth2/default',
//   client_id: '0oaeqew6h4dp1KLel0h7',
//   client_secret: '{clientSecret}',
//   redirect_uri: 'http://localhost:3000/authorization-code/callback',
//   scope: 'openid profile'
// })

module.exports = function (app) {
    // Render home page
    // Routes for account creation
  app.put('/users/admin/new/:id', users.newAdmin)
  app.get('/users/list', users.listUsers)
  app.post('/users/new', users.createUser)
  app.get('/users/admin', users.listAdmins)
  app.get('/users/:id', authenticationRequired, users.getUser)
  app.get('/users/:id/groups', authenticationRequired, users.getUserGroups)
  app.delete('/users/:id/delete', users.deleteUser)
  app.delete('/users/admin/remove/:id', users.deleteAdmin)
//   app.get('/users/:id', users.showUser)
//   app.get('/users/login', users.showLogin)
//   app.post('/users/login', users.login)
//   app.get('/users/logout', users.logout)
//   app.post('/users/:id/message', users.sendMessage)
}
