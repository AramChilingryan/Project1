import React from 'react'

function Button({text, className, onClick}) {
  return (
    <div className='button'>
      <input type="submit" value={text} className={className} onClick={onClick}/>
    </div>
  )
}

export default Button
