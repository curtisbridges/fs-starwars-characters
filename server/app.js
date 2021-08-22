//
// Express server for starwars app
//
const path = require('path')
const express = require('express')
const app = express()

const peopleRoute = require('./routes/people')

// serve all static assets
app.use(express.static(path.join(__dirname, '../client/build')))

// serve the react SPA
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

// a simple test route for REST access to the SWAPI integration
app.use('/api/people', peopleRoute)

module.exports = app
