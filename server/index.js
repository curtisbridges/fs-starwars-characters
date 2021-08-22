const server = require('./graphql/starwars')
const app = require('./app.js')

const PORT = process.env.PORT ?? 4000

async function startApolloServer() {
  await server.start()

  server.applyMiddleware({ app })

  await new Promise((resolve) => app.listen({ port: PORT }, resolve))
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  )
  return { server, app }
}

startApolloServer()
