import React from 'react'
import "./banner.css";
import Acn from "../../assets/acn.png"
import Aksigorta from "../../assets/aksigorta.png"
import Allianz from "../../assets/allianz.png"
import Axa from "../../assets/axa.png"
import Hepiyi from "../../assets/hepiyi.png"
import Quick from "../../assets/quick.png"
import Ray from "../../assets/ray.png"
import Türkiye from "../../assets/türkiye.png"
import { fadeIn, staggerContainer, slideIn, textContainer, textVariant2 } from '../../motion';
import {motion} from "framer-motion";
const Banner = () => {
  return (
    <section className='container-fluid banner-section'>
      <div className='custom-width banner-container container'>
      <h2 className='text-center banner-heading'>PARTNERLERİMİZ</h2>
      
      <motion.div
       variants={staggerContainer}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true, amount: 0.25 }} 
       className='row row-1 row-cols-md-2 row-cols-lg-4'>
        <motion.div variants={fadeIn("right", "spring", 1 * 0.25, 0.75)} className='col'>
            <img src={Axa} alt='Axa Sigorta  Logo'/>
          </motion.div>
          <motion.div variants={fadeIn("right", "spring", 1.2 * 0.25, 0.75)} className='col'>
            <img src={Türkiye} alt='Türkiye Sigorta Logo'/>
          </motion.div>
          <motion.div variants={fadeIn("right", "spring", 1.4 * 0.25, 0.75)} className='col'>
            <img src={Acn} alt='AcnTürk Sigorta Logo'/>
          </motion.div>
          <motion.div variants={fadeIn("right", "spring", 1.6 * 0.25, 0.75)} className='col'>
            <img  src={Aksigorta} alt='Aksigorta Logo'/>
          </motion.div>
        </motion.div>
        <motion.div
       variants={staggerContainer}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true, amount: 0.25 }}  
       className='row row-2 row-cols-md-2 row-cols-lg-4'>
        <motion.div variants={fadeIn("right", "spring", 1.8 * 0.25, 0.75)} className='col'>
            <img src={Ray} alt='Ray Sigorta  Logo'/>
          </motion.div>
          <motion.div variants={fadeIn("right", "spring", 2.0 * 0.25, 0.75)} className='col'>
            <img src={Hepiyi} alt='Hepiyi Sigorta Logo'/>
          </motion.div>
          <motion.div variants={fadeIn("right", "spring", 2.2 * 0.25, 0.75)} className='col'>
            <img src={Allianz} alt='Allianz Sigorta Logo'/>
          </motion.div>
          <motion.div variants={fadeIn("right", "spring", 2.4 * 0.25, 0.75)} className='col'>
            <img src={Quick} alt='Quick Sigorta Logo'/>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Banner