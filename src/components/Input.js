import React from 'react'

function Input(props) {
  return (
    <div>
        <label htmlFor={props.htmlFor}>{props.text}</label>
        <input type={props.type} placeholder={props.placeholder} name={props.name} id={props.id} onChange={props.onChange} value={props.value}/>
    </div>
  )
}

export default Input
