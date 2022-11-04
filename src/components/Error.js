import React from 'react'

function Error({text, className}) {
  return (
    <div className={className}>
      <p>{text}</p>
    </div>
  )
}

export default Error
