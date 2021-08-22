import { useState } from 'react'
import { useQuery, gql } from '@apollo/client'

import Loading from './components/Loading'
import Error from './components/Error'
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'
import Person from './model/Person'

import './App.css'

const SW_PEOPLE_PAGE = gql`
  query People($page: Int!) {
    people(page: $page) {
      count
      next
      previous
      people {
        name
        height
        mass
        birth_year
        origin {
          name
        }
      }
    }
  }
`

function StarWarsPeople({ page }) {
  const { loading, error, data } = useQuery(SW_PEOPLE_PAGE, {
    variables: { page },
  })

  if (loading) return <Loading />
  if (error) return <Error error={error} />

  const people = data.people.people.map(
    ({ name, height, mass, birth_year, origin }) =>
      new Person(name, height, mass, birth_year, origin.name)
  )

  return (
    <div className="container">
      {people.map((person) => (
        <Card key={person.name} person={person}></Card>
      ))}
    </div>
  )
}

function App() {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <div className="App">
      <Header />
      <StarWarsPeople page={currentPage} />
      <Footer page={currentPage} setPage={setCurrentPage} />
    </div>
  )
}

export default App
