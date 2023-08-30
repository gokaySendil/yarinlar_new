import React from 'react'
import "./hero.css";
import HeroImg from "../../assets/hero.png"
import IconButton from '../../components/IconButton';
import Button from '../../components/Button';
import {motion} from "framer-motion";
import Typed from 'react-typed';
import { fadeIn, staggerContainer, slideIn } from '../../motion';
const Hero = () => {
  const stringArray = ["Araç Sigortaları", "Konut ve İşyeri Sigortaları", "Sağlık Sigortaları",
    "Sorumluluk Sigortaları", "Emeklilik ve Hayat Sigortaları","Diğer Branşlar","Detaylı bilgiler için aramayı unutmayın"]
  return (
    <section className='container-fluid hero-section'>
       <div className='container hero-container custom-width '>
       <div className='row full-w-h'>
            <div className='col-heights col-md-6 col-12 text-col d-flex flex-column justify-content-center align-items-center'>
                <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                 className='container d-flex flex-column text-container'>
                <motion.h1
                 variants={fadeIn("up", "tween", 0.2, 1)}
                 initial="hidden"
                 whileInView="show"
                 className='hero-heading'>
                Güvenli yarınlar için doğru adrestesiniz
                </motion.h1>
                <motion.h3
                 variants={fadeIn("up", "tween", 0.2, 1)}
                 initial="hidden"
                 whileInView="show"
                 className='hero-sub-heading'>
                İletişime geç aradığını bul
                </motion.h3>
                <p className='hero-p text-start'>
                <Typed strings={stringArray}
              typeSpeed={40}
              backSpeed={50}
              loop ></Typed></p>
                <motion.div 
                variants={fadeIn("up", "tween", 0.3, 1)}
                initial="hidden"
                whileInView="show"
                 className='btn-div d-flex'>
                  <IconButton/>
                  <Button text="Hizmetlerimiz" href="#hizmetlerimiz" hide={false} isLink={true} targetSection={"hizmetlerimiz"}/>
                </motion.div >
                </motion.div>
            </div>
            <div className='col-heights col-12 col-md-6 img-col d-flex flex-column justify-content-center align-items-center'>
                <motion.img 
                variants={fadeIn("up", "tween", 0.2, 1)}
                initial="hidden"
                whileInView="show"
                className='img-fluid' src={HeroImg} alt="Sigorta şirketi temsili fotograf" />
            </div>
        </div>
       </div>
    </section>
  )
}

export default Hero