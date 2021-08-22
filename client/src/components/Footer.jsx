import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

function Footer(props) {
  return (
    <div>
      {/* <Link to={props.prev}>Previous</Link>
      <Link to={props.next}>Next</Link> */}
      {props.prev && <div>Back: {props.prev}</div>}
      {props.next && <div>Next: {props.next}</div>}
    </div>
  )
}

Footer.propTypes = {
  next: PropTypes.string,
  prev: PropTypes.string,
}

export default Footer
