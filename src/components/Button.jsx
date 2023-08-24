import React from 'react'
import "./button.css";
const Button = (props) => {
 if(props.hide){
  return (
    <button className='my-primary-btn hide-btn'>
        {props.text}
    </button>
  )
 }
 return (
  <button className='my-primary-btn'>
      {props.text}
  </button>
)
}

export default Button