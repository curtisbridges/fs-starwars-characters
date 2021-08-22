import React from 'react'
import PropTypes from 'prop-types'


function Footer(props) {
  const prev = +props.page - 1
  const next = +props.page + 1

  console.log(`Next=${next}`)
  console.log(`Prev=${prev}`)

  function handleClick(page) {
    console.log(`Changing page to ${page}`)
    props.setPage(page)
  }

  return (
    <div>
      {prev > 0 && <button onClick={() => handleClick(prev)}>Back</button>}
      {next < 10 && <button onClick={() => handleClick(next)}>Next</button>}
    </div>
  )
}

Footer.propTypes = {
  page: PropTypes.number,
  setPage: PropTypes.func,
}

export default Footer
