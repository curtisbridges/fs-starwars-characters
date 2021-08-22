const starwars = require('../../model/starwars')

test('Should fetch default page of people', async () => {
  const page = await starwars.getPeoplePage()
  expect(page).not.toBeNull()
  expect(page.count).toBeGreaterThan(0)
})

test('Should fetch first page of people', async () => {
  const page = await starwars.getPeoplePage(1)
  expect(page).not.toBeNull()
  expect(page.count).toBeGreaterThan(0)
  expect(page.people[0].name).toEqual('Luke Skywalker')
})

test('Should fetch third page of people', async () => {
  const page = await starwars.getPeoplePage(3)
  expect(page).not.toBeNull()
  expect(page.count).toBeGreaterThan(0)
  expect(page.next).toEqual('https://swapi.dev/api/people/?page=4')
  expect(page.previous).toEqual('https://swapi.dev/api/people/?page=2')
})

test('Should fetch planet by url', async () => {
  const planet = await starwars.getPlanet('https://swapi.dev/api/planets/1/')
  expect(planet).not.toBeNull()
  expect(planet.name).toEqual('Tatooine')
})
