import React from 'react'
import PropTypes from 'prop-types'

import classes from './Footer.module.css'

function Footer(props) {
  const prev = +props.page - 1
  const next = +props.page + 1

  return (
    <div className={classes.footer}>
      {prev > 0 ? (
        <button className={classes.button} onClick={() => props.setPage(prev)}>
          Back
        </button>
      ) : (
        <div />
      )}
      {next < 10 && (
        <button className={classes.button} onClick={() => props.setPage(next)}>
          Next
        </button>
      )}
    </div>
  )
}

Footer.propTypes = {
  page: PropTypes.number,
  setPage: PropTypes.func,
}

export default Footer
