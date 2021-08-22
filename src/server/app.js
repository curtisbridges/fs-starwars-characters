//
// Express server for starwars app
//

const express = require('express')
const app = express()

const peopleRoute = require('./routes/people')

app.get('/', function (req, res) {
  res.send('Temporary placeholder text')
})

app.use('/people', peopleRoute)

module.exports = app
