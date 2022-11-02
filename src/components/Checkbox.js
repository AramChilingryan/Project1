import React from 'react'

function Checkbox(props) {
  return (
    <div>
        <input type="checkbox" name={props.name} id={props.id}/>
        <label htmlFor={props.id}>{props.text}</label>
    </div>
  )
}

export default Checkbox
