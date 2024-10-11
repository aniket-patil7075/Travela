import React from 'react'
import TheWorld from './TheWorld'

function ExploreTour() {
  return (
    <div>
        <div className="div-mainImg">
        <div className="overlay">
          <h1 className="mainFontSize fw-bold text-light">Explore Tour</h1>
          <h5 className="params">Home / Pages / <span className="text-light">Explore Tour</span> </h5>
        </div>
      </div>
      <TheWorld/>
    </div>
  )
}

export default ExploreTour