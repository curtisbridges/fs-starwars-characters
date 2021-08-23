const { ApolloServer, gql } = require('apollo-server-express')
const { getPeoplePage, getPlanet } = require('../model/starwars')

// The GraphQL schema
const typeDefs = gql`
  type Query {
    "Gets a page of star wars characters"
    people(page: Int!): PeoplePage!
  }

  "A page of Star Wars characters"
  type PeoplePage {
    "the total number of characters"
    count: Int!
    "SWAPI REST link to the next page of results"
    next: String
    "SWAPI REST link to the previous page of results"
    previous: String
    "Array of SWAPI Star Wars characters"
    people: [Person!]!
  }

  "A planet in the Star Wars universe"
  type Planet {
    "The planet name"
    name: String!
    "A summary of the climate"
    climate: String!
    "A summary of the terrain"
    terrain: String!
    "Population of the planet"
    population: String!
  }

  "A Star Wars character"
  type Person {
    "Character name"
    name: String!
    "The height of the person in centimeters."
    height: String!
    "The mass of the person in kilograms."
    mass: String!
    "The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope."
    birth_year: String!
    "The SWAPI URL of a planet resource, a planet that this person was born on or inhabits."
    homeworld: String!
    "The resolved homeworld planet"
    origin: Planet!
  }
`

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    people: (parent, args) => {
      return getPeoplePage(args.page)
    },
  },
  Person: {
    origin: (parent, args) => {
      return getPlanet(parent.homeworld)
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

module.exports = server
