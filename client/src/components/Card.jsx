import React from 'react'

function Card({ person }) {
  return (
    <div>
      <h2>{person.name}</h2>
      <div>
        <div>
          <div>{person.height}</div>
          <div>{person.mass}</div>
        </div>
        <div>
          <div>{person.birth}</div>
          <div>{person.origin}</div>
        </div>
      </div>
    </div>
  )
}

export default Card
