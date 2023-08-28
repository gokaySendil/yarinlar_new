import React from 'react'
import "./button.css";
const Button = (props) => {
if(!props.isLink){
  if(props.hide){
    return (
      <button className='my-primary-btn hide-btn' data-bs-toggle="modal" data-bs-target="#staticBackdrop" >
          {props.text}
      </button>
    )
   }
   return (
    <button className='my-primary-btn' data-bs-toggle="modal" data-bs-target="#staticBackdrop" >
        {props.text}
    </button>
  )
}
else{
  if(props.hide){
    return (
      <a className='my-primary-btn hide-btn'href={`#${props.targetSection}`} >
          {props.text}
      </a>
    )
   }
   return (
    <a className='my-primary-btn' href={`#${props.targetSection}`}>
        {props.text}
    </a>
  )
}
}

export default Button