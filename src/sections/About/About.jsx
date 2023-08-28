import React from 'react'
import "./about.css"
import About1 from "../../assets/about1.png"
import About2 from "../../assets/about2.png"
import { fadeIn, staggerContainer, slideIn } from '../../motion';
import {motion} from "framer-motion";
const About = () => {
  return (
    <section id='hakkımızda' className='container-fluid about-section'>
      <motion.h2
                 variants={fadeIn("down", "tween", 0.3, 1)}
                 initial="hidden"
                 whileInView="show"
                 viewport={{ once: true, amount: 0.25 }} className='about-heading text-center'>NEDEN YARINLAR SİGORTA ?</motion.h2>
      <div className='container about-container custom-width'>
      <div className='row w-100 d-flex  justify-content-center align-items-center'>
        <motion.div
                 variants={fadeIn("right", "tween", 0.2, 1)}
                 initial="hidden"
                 whileInView="show"
                 viewport={{ once: true, amount: 0.25 }} className='col-12 col-md-6 container about-text'>
          <h2 className='about-sub'>Güvenilirlik ve Tecrübe</h2>
          <p className='about-desc'>Farklı kategorilerdeki poliçelerle 
          müşterilerimizin ihtiyaçlarına yönelik çözümler sunuyoruz. Ayrıca, 
          özelleştirilebilir seçenekler ve farklı fiyat skalalarıyla müşterilerimizin 
          bütçe ve tercihlerine uygun tekfliflerle, onların 
          hayatlarını ve varlıklarını korumalarına destek oluyoruz</p>
        </motion.div>
        <motion.div
                 variants={fadeIn("left", "tween", 0.2, 1)}
                 initial="hidden"
                 whileInView="show"
                 viewport={{ once: true, amount: 0.25 }} className='col-12 col-md-6  container about-img-col'>
          <img className='img-fluid' src={About1} alt='Neden Yarınlar Sigorta 1'/>
        </motion.div>
      </div>
      <div className='row w-100 d-flex  justify-content-center align-items-center'>
      <motion.div
                 variants={fadeIn("left", "tween", 0.2, 1)}
                 initial="hidden"
                 whileInView="show"
                 viewport={{ once: true, amount: 0.25 }} className='col-12 col-md-6  container about-img-col-2'>
          <img className='img-fluid' src={About2} alt='Neden Yarınlar Sigorta 1'/>
        </motion.div>
        <motion.div
                 variants={fadeIn("right", "tween", 0.2, 1)}
                 initial="hidden"
                 whileInView="show"
                 viewport={{ once: true, amount: 0.25 }} className='col-12 col-md-6 container about-text'>
          <h2 className='about-sub'>Geniş Ürün Yelpazesi</h2>
          <p className='about-desc'>Hayat sigortası, sağlık sigortası, 
          araç sigortası, seyahat sigortası, ev sigortası gibi farklı kategorilerdeki 
          poliçelerle müşterilerimizin ihtiyaçlarına yönelik çözümler sunuyoruz.
          Müşterilerimizin poliçeleriyle ilgili her türlü sorunlarında 
          yanlarında olmak ve çözüm sunmak için en iyisini yapıyoruz.</p>
        </motion.div>
        
      </div>
       </div>
    </section>
  )
}

export default About