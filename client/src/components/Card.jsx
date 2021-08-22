import React from 'react'

import classes from './Card.module.css'

function Card({ person }) {
  return (
    <div className={classes.card}>
      <h2 className={classes.header}>{person.name}</h2>
      <div className={classes.container}>
        <div className={classes.row}>
          <div>Height: {person.height}</div>
          <div>Mass: {person.mass}</div>
        </div>
        <div className={classes.row}>
          <div>Birth Year: {person.birth}</div>
          <div>Home Planet: {person.origin}</div>
        </div>
      </div>
    </div>
  )
}

export default Card
