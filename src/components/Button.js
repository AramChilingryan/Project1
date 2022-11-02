import React from 'react'

function Button({text,className}) {
  return (
    <div>
      <input type="submit" value={text} className={className}/>
    </div>
  )
}

export default Button
