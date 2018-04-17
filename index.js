const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
// var path = require('path')

const session = require('express-session')
// const { ExpressOIDC } = require('@okta/oidc-middleware')

app.use(bodyParser())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

require('./controllers/router')(app)

// session support is required to use ExpressOIDC
app.use(session({
  secret: 'this should be secure',
  resave: true,
  saveUninitialized: false
}))

// const oidc = new ExpressOIDC({
//   issuer: 'https://dev-320743.oktapreview.com/oauth2/default',
//   client_id: '0oaeqew6h4dp1KLel0h7',
//   client_secret: '{clientSecret}',
//   redirect_uri: 'http://localhost:3000/home',
//   scope: 'openid profile'
// })

  // ExpressOIDC will attach handlers for the /login and /authorization-code/callback routes
// app.use(oidc.router)

app.get('/', (req, res) => {
  res.send('hello world')
})

app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`)
})
module.exports = app
