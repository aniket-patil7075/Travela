import React from 'react'
import AboutUs from "./AboutUs";

function About() {
  return (
    <div>
      
      <div className="div-mainImg">
        <div className="overlay">
          <h1 className="mainFontSize fw-bold text-light">About</h1>
          <h5 className="params">Home / Pages / <span className="text-light">About</span> </h5>
        </div>
      </div>
      <AboutUs/>
    </div>
  )
}

export default About
