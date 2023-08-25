import React from 'react'
import "./services.css";
import Service from '../../components/Service';
import serviceInfo from '../../serviceInfo';
const Services = () => {
  return (
    <section className='container-fluid services-section'>
    <h2 className='text-center services-heading'>HİZMETLERİMİZ</h2>
    <div className='custom-width services-container container'>
    <div className='row w-100 services-row '>
    <div className='col-lg-4 service-col col-md-6 col-12'>
          <Service title={serviceInfo[0].title} subs={serviceInfo[0].subServices} image={serviceInfo[0].image}/>
          <Service title={serviceInfo[1].title} subs={serviceInfo[1].subServices} image={serviceInfo[1].image}/>
          </div>
        <div className='col-lg-4 service-col col-md-6 col-12'>
        <Service title={serviceInfo[2].title} subs={serviceInfo[2].subServices} image={serviceInfo[2].image}/>
        <Service title={serviceInfo[3].title} subs={serviceInfo[3].subServices} image={serviceInfo[3].image}/>
        </div>
        <div className='col-lg-4 largest-col service-col  col-md-12  col-12'>
        <Service title={serviceInfo[4].title} subs={serviceInfo[4].subServices} image={serviceInfo[4].image}/>
        <Service title={serviceInfo[5].title} subs={serviceInfo[5].subServices} image={serviceInfo[5].image}/>
        </div>
      </div>
    </div>
    
   
  </section>
  )
}

export default Services