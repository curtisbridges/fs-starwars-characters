import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import classes from './Loading.module.css'

function Loading() {
  return (
    <div className={classes.container}>
      <h2>Loading...</h2>
      <FontAwesomeIcon icon={faSpinner} size="7x" className={classes.spinner} />
    </div>
  )
}

export default Loading
