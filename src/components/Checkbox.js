import React from 'react'

function Checkbox({name, id, text}) {
  return (
    <div className='form-checkbox'>
      <input type="checkbox" name={name} id={id}/>
      <label htmlFor={id}>{text}</label>
    </div>
  )
}

export default Checkbox
