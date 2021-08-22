// used for debugging purposes - people route
const express = require('express')
const starwars = require('../model/starwars')

const router = express.Router()

router.get('/', async (req, res) => {
  const results = await starwars.getPeoplePage()
  return res.json(results)
})

router.get('/:page', async (req, res) => {
  const page = req.params.page ?? '1'
  const results = await starwars.getPeoplePage(page)
  return res.json(results)
})

module.exports = router
