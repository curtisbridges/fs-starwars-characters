const { ApolloServer, gql } = require('apollo-server-express')
const { getPeoplePage, getPlanet } = require('../model/starwars')

// The GraphQL schema
const typeDefs = gql`
  type Query {
    hello: String
    people(page: String): PeoplePage!
  }

  type PeoplePage {
    count: Int!
    next: String
    previous: String
    people: [Person!]!
  }

  type Planet {
    name: String!
    url: String!
  }

  type Person {
    name: String!
    height: String!
    mass: String!
    birth_year: String!
    origin: Planet
  }
`

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'world',
    people: (parent, args) => {
      return getPeoplePage(args.page)
    },
  },
  Person: {
    origin: (parent, args) => {
      if (parent.origin?.startsWith('http')) {
        return getPlanet(parent.origin)
      }
      return parent.origin
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

module.exports = server
