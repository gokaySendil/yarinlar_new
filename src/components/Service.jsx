import React from 'react'
import "./service.css"
import Trafik from "../assets/services/trafik.png"
import { fadeIn, staggerContainer, slideIn } from '../motion';
import {motion} from "framer-motion";
const Service = ({title,subs,image,index}) => {
  return (
    <motion.div variants={fadeIn("left", "spring", index * 0.25, 0.75)} viewport={{ once: true, amount: 0.25 }} className='single-service'>
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
                  <p key={element} className='sub-service'>{element}</p>
                 )
                })
               }
              </div>
                
            </div>
        </div>
    </motion.div>
  )
}

export default Service
