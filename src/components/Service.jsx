import React from 'react'
import "./service.css"
import Trafik from "../assets/services/trafik.png"
const Service = ({title,subs,image}) => {
  return (
    <div className='single-service'>
        <div className='d-flex'>
            <div className='img-div'>
                <img className='img-fluid' src={image} alt='Sigorta Hizmeti temsili fotograf'/>
            </div>
            <div className='d-flex flex-column'>
                <h4 className='service-category'>{title}</h4>
                <div className='sub-services container'>
               {
                subs.map((element) => {
                 return(
                  <p className='sub-service'>{element}</p>
                 )
                })
               }
                
              </div>
                
            </div>
        </div>
    </div>
  )
}

export default Service
