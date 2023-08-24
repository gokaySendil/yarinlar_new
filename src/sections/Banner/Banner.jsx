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

const Banner = () => {
  return (
    <section className='container-fluid banner-section'>
      <div className='custom-width banner-container container'>
      <h2 className='text-center banner-heading'>PARTNERLERİMİZ</h2>
      
      <div className='row row-1 row-cols-md-2 row-cols-lg-4'>
        <div className='col'>
            <img src={Axa} alt='Axa Sigorta  Logo'/>
          </div>
          <div className='col'>
            <img src={Türkiye} alt='Türkiye Sigorta Logo'/>
          </div>
          <div className='col'>
            <img src={Acn} alt='AcnTürk Sigorta Logo'/>
          </div>
          <div className='col'>
            <img  src={Aksigorta} alt='Aksigorta Logo'/>
          </div>
        </div>
        <div className='row row-2 row-cols-md-2 row-cols-lg-4'>
        <div className='col'>
            <img src={Ray} alt='Ray Sigorta  Logo'/>
          </div>
          <div className='col'>
            <img src={Hepiyi} alt='Hepiyi Sigorta Logo'/>
          </div>
          <div className='col'>
            <img src={Allianz} alt='Allianz Sigorta Logo'/>
          </div>
          <div className='col'>
            <img src={Quick} alt='Quick Sigorta Logo'/>
          </div>
        </div>
      </div>
     
    </section>
  )
}

export default Banner