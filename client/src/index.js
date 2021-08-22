import React from 'react'
import { render } from 'react-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import './index.css'
import App from './App'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
})

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
