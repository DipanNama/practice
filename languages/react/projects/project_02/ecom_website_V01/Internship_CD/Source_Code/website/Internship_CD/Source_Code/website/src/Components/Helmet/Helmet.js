import React from 'react'

const Helmet = (props) => {
    document.title = "Developers Hub | " + props.title
  return (
    <div>{props.children}</div>
  )
}

export default Helmet