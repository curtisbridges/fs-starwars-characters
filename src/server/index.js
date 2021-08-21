const starwars = require('./graphql/starwars')

starwars.server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
