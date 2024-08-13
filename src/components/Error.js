import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
        <h2>Some error happened</h2>
        <button><Link to="/">Home</Link></button>
    </div>
  )
}

export default Error