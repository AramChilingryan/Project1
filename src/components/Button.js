import React from 'react'

function Button({text, className, click}) {
  return (
    <div>
      <input type="submit" value={text} className={className} onClick={click}/>
    </div>
  )
}

export default Button
