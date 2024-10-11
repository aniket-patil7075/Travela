import React from 'react'
import Testimonial from './Testimonial'

function Testi() {
  return (
    <div>
        <div className="div-mainImg">
        <div className="overlay">
          <h1 className="mainFontSize fw-bold text-light">Testimonial</h1>
          <h5 className="params">Home / Pages / <span className="text-light">Testimonial</span> </h5>
        </div>
      </div>
      <Testimonial/>
    </div>
  )
}

export default Testi