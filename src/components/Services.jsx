import React from 'react'
import OurServices from './OurServices'
import Testimonial from './Testimonial'

function Services() {
  return (
    <div>
      <div className="div-mainImg">
        <div className="overlay">
          <h1 className="mainFontSize fw-bold text-light">Contact us</h1>
          <h5 className="params">Home / Pages / <span className="text-light">Services</span> </h5>
        </div>
      </div>
      <OurServices/>
      <Testimonial/>
    </div>
  )
}

export default Services
