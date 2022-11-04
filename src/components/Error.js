import React from 'react'
import classNames from 'classnames'

function Error({text, className}) {
  return (
    <div className={classNames("error",className)}>
      <p>{text}</p>
    </div>
  )
}

export default Error
