import React from 'react'
import "./slogan.css"
import InvertedButton from '../../components/InvertedButton'
const Slogan = () => {
  return (
    <section className='container-fluid slogan-section'>
        <div className='container custom-width slogan-container d-flex justify-content-center align-items-center '>
            <div className='slogan-content'>
                <h3 className='slogan-text text-center'>“TEKLİFİNİZİ EN HIZLI VE DOĞRU ŞEKİLDE HAZIRLIYORUZ”</h3>
                <InvertedButton text="TEKLİF AL" hide={false}/>
            </div>
        </div>
    </section>
  )
}

export default Slogan