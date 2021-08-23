import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGlobe,
  faArrowsAltV,
  faWeight,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons'

import classes from './Card.module.css'

function Card({ person }) {
  return (
    <article className={classes.card}>
      <h2 className={classes.header}>{person.name}</h2>
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.trait}>
            <FontAwesomeIcon icon={faArrowsAltV} title="Height in cm" />
            <p>{person.height}</p>
          </div>
          <div className={classes.trait}>
            <FontAwesomeIcon icon={faWeight} title="Weight in kg" />{' '}
            <p>{person.mass}</p>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.trait}>
            <FontAwesomeIcon icon={faCalendar} title="Birth Year" />{' '}
            <p>{person.birth}</p>
          </div>
          <div className={classes.trait}>
            <FontAwesomeIcon icon={faGlobe} title="Homeworld" />
            <p>{person.origin}</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Card
