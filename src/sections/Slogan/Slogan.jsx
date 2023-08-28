import React from 'react'
import "./slogan.css"
import InvertedButton from '../../components/InvertedButton'
import { fadeIn, staggerContainer, slideIn } from '../../motion';
import {motion} from "framer-motion";
const Slogan = () => {
  return (
    <section className='container-fluid slogan-section'>
        <div className='container custom-width slogan-container d-flex justify-content-center align-items-center '>
            <div className='slogan-content'>
                <motion.h3
                 variants={fadeIn("down", "tween", 0.2, 1)}
                 viewport={{ once: true, amount: 0.25 }}
                 initial="hidden"
                 whileInView="show" className='slogan-text text-center'>“TEKLİFİNİZİ EN HIZLI VE DOĞRU ŞEKİLDE HAZIRLIYORUZ”</motion.h3>
                <InvertedButton text="TEKLİF AL" hide={false}/>
            </div>
        </div>
    </section>
  )
}

export default Slogan