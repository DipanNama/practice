import React from 'react'

const Helmet = (props) => {
    document.title = "LMS | " + props.title
  return (
    <div>{props.children}</div>
  )
}

export default Helmet