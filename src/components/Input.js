import React from 'react'

function Input({id,text,type,placeholder,name,onChange,value}) {
  return (
    <div className='form-input'>
      <label htmlFor={id}>{text}</label>
      <input 
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

export default Input
