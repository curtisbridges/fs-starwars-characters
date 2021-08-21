//
// Express server for starwars app
//

const express = require('express')
const app = express()

const peopleRoute = require('./routes/people')

const PORT = process.PORT ?? 3000

app.get('/', function (req, res) {
  res.send('Temporary placeholder text')
})

app.use('/people', peopleRoute)

app.listen(PORT, () => {
  console.log(`Server up on port ${PORT}`)
})
