import React from 'react'
import "./services.css";
import Service from '../../components/Service';
import serviceInfo from '../../serviceInfo';
import { fadeIn, staggerContainer, slideIn } from '../../motion';
import {motion} from "framer-motion";
const Services = () => {
  return (
    <section id='hizmetlerimiz' className='container-fluid services-section'>
    <h2 className='text-center services-heading'>HİZMETLERİMİZ</h2>
    <div className='custom-width services-container container'>
    <div className='row w-100 services-row '>
    <motion.div
     variants={staggerContainer}
     initial="hidden"
     whileInView="show"
     viewport={{ once: true, amount: 0.25 }}
     className='col-lg-4 service-col col-md-6 col-12'>
          <Service title={serviceInfo[0].title} subs={serviceInfo[0].subServices} image={serviceInfo[0].image} index={1}/>
          <Service title={serviceInfo[1].title} subs={serviceInfo[1].subServices} image={serviceInfo[1].image} index={1.1}/>
          </motion.div>
        <motion.div
     variants={staggerContainer}
     initial="hidden"
     whileInView="show"
     viewport={{ once: true, amount: 0.25 }} className='col-lg-4 service-col col-md-6 col-12'>
        <Service title={serviceInfo[2].title} subs={serviceInfo[2].subServices} image={serviceInfo[2].image} index={1.2}/>
        <Service title={serviceInfo[3].title} subs={serviceInfo[3].subServices} image={serviceInfo[3].image} index={1.3}/>
        </motion.div>
        <motion.div
     variants={staggerContainer}
     initial="hidden"
     whileInView="show"
     viewport={{ once: true, amount: 0.25 }} className='col-lg-4 largest-col service-col  col-md-12  col-12'>
        <Service title={serviceInfo[4].title} subs={serviceInfo[4].subServices} image={serviceInfo[4].image} index={1.4}/>
        <Service title={serviceInfo[5].title} subs={serviceInfo[5].subServices} image={serviceInfo[5].image} index={1.5}/>
        </motion.div>
      </div>
    </div>
    
   
  </section>
  )
}

export default Services