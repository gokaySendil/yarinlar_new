import React from 'react'
import "./invertedbtn.css"
const InvertedButton = (props) => {
    if(props.hide){
        return (
          <button className='inverted-btn hide-btn'>
              {props.text}
          </button>
        )
       }
       return (
        <button className='inverted-btn'>
            {props.text}
        </button>
      )
}

export default InvertedButton