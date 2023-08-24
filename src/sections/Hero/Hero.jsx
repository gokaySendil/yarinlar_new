import React from 'react'
import "./hero.css";
import HeroImg from "../../assets/hero.png"
import IconButton from '../../components/IconButton';
import Button from '../../components/Button';
const Hero = () => {
  return (
    <section className='container-fluid hero-section'>
       <div className='container hero-container custom-width '>
       <div className='row full-w-h'>
            <div className='col-heights col-md-6 col-12 text-col d-flex flex-column justify-content-center align-items-center'>
                <div className='container d-flex flex-column text-container'>
                <h1 className='hero-heading'>
                Güvenli yarınlar için doğru adrestesiniz
                </h1>
                <h3 className='hero-sub-heading'>
                İletişime geç aradığını bul
                </h3>
                <p className='hero-p'>Trafik Sigoratası...</p>
                <div className='btn-div d-flex'>
                  <IconButton/>
                  <Button text="Hizmetlerimiz" hide={false}/>
                </div>
                </div>
            </div>
            <div className='col-heights col-12 col-md-6 img-col d-flex flex-column justify-content-center align-items-center'>
                <img className='img-fluid' src={HeroImg} alt="Sigorta şirketi temsili fotograf" />
            </div>
        </div>
       </div>
    </section>
  )
}

export default Hero