import React from 'react'
import "./invertedbtn.css"
const InvertedButton = (props) => {
    if(props.hide){
        return (
          <button className='inverted-btn hide-btn' data-bs-toggle="modal" data-bs-target="#staticBackdrop" > 
              {props.text}
          </button>
        )
       }
       return (
        <button className='inverted-btn' data-bs-toggle="modal" data-bs-target="#staticBackdrop" >
            {props.text}
        </button>
      )
}

export default InvertedButton