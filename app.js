const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
var path = require('path')

app.use(bodyParser())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

require('./controllers/router')(app)

app.get('/', (req, res) => {
  res.send('hello world')
})

app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`)
})
module.exports = app
