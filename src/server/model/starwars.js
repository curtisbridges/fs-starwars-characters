const fetch = require('node-fetch')

const SW_API = 'https://swapi.dev/api'
const SW_PEOPLE = `${SW_API}/people`
const SW_PLANETS = `${SW_API}/planets`

const peopleCache = {}
const planetsCache = {}

const getPeoplePage = async (page) => {
  page = page ?? '1' // need better boundary handling (0, -1, etc.)

  // check the cache
  if (peopleCache[page]) {
    return peopleCache[page]
  }

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
    // let unresolvedPlanets = []
    // if (!planetsCache[item.homeworld]) {
    //   unresolvedPlanets.push(item.homeworld)
    // }
    // if (unresolvedPlanets.length > 0) {
    //   const planets = Promise.all(
    //     unresolvedPlanets.map(async (url) => {
    //       const resp = await fetch(url)
    //       return resp.json()
    //     })
    //   )
    //   console.log(planets)
    // }

    return {
      name: item.name,
      origin: planetsCache[item.homeworld]
        ? planetsCache[item.homeworld]
        : item.homeworld,
      height: item.height,
      mass: item.mass,
      birth_year: item.birth_year,
    }
  })

  peopleCache[page] = { count, next, previous, people }
  return peopleCache[page]
}

const getPlanet = async (url) => {
  const responseJSON = await fetch(url)
  const response = await responseJSON.json()

  //console.log(`fetched planet ${url} = ${response.name}`)

  planetsCache[url] = response
  return planetsCache[url]
}

// unused atm -- could be used for planet pre-fetching...
const getPlanetPage = async (page) => {
  page = page ?? '1' // need better boundary handling (0, -1, etc.)

  // check the cache
  if (planetsCache[page]) {
    return planetsCache[page]
  }

  const responseJSON = await fetch(`${SW_PLANETS}/?page=${page}`)
  const response = await responseJSON.json()

  // TODO: check response status???

  // important fields:
  // data.results { name, url }
  const results = response?.results ?? []
  // console.log(results)

  const planets = results.map(({ name, url }) => {
    return {
      name,
      url,
    }
  })

  return planets
}

module.exports = {
  people: peopleCache,
  planets: planetsCache,
  getPeoplePage,
  getPlanet,
}
