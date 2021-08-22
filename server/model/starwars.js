const fetch = require('node-fetch')

const SW_API = 'https://swapi.dev/api'
const SW_PEOPLE = `${SW_API}/people`
const SW_PLANETS = `${SW_API}/planets`

const peopleCache = {}
const planetsCache = {}

function clamp(val, min, max) {
  return val > max ? max : val < min ? min : val
}

const getPeoplePage = async (page) => {
  // constrain a number between 1 and 9 (there are only 82 / 10 pages of SW characters)
  // convert to string for querying/cache lookup
  page = clamp(page, 1, 9).toString()

  // check the cache
  if (peopleCache[page]) {
    console.log(`Cache hit for people page ${page}`)
    return peopleCache[page]
  }
  console.log(`Querying people page = ${page}`)

  const responseJSON = await fetch(`${SW_PEOPLE}/?page=${page}`)
  const response = await responseJSON.json()

  // TODO: check response status

  // important fields:
  // count
  const count = response.count ?? 0
  // next
  const next = response.next ?? ''
  // previous
  const previous = response.previous ?? ''
  // actual people...
  const results = response?.results ?? []

  const people = results.map((item) => {
    return {
      name: item.name,
      homeworld: item.homeworld,
      height: item.height,
      mass: item.mass,
      birth_year: item.birth_year,
    }
  })

  peopleCache[page] = { count, next, previous, people }
  return peopleCache[page]
}

const getPlanet = async (url) => {
  if (planetsCache[url]) {
    console.log(`Cache hit for planet ${url}`)
    return planetsCache[url]
  }

  try {
    console.log(``)
    const responseJSON = await fetch(url)
    const response = await responseJSON.json()

    console.log(`fetched planet ${url} = ${response.name}`)

    planetsCache[url] = response
    return planetsCache[url]
  } catch (err) {
    console.error(`Error fetching planet: ${url}`)
    return { name: 'error' }
  }
}

module.exports = {
  getPeoplePage,
  getPlanet,
}
