import React from 'react'
import MeetGuide from './MeetGuide'

function TravelGuides() {
  return (
    <div>
        <div className="div-mainImg">
        <div className="overlay">
          <h1 className="mainFontSize fw-bold text-light">Travel Guides</h1>
          <h5 className="params">Home / Pages / <span className="text-light">Travel Guides</span> </h5>
        </div>
      </div>
      <MeetGuide/>
    </div>
  )
}

export default TravelGuides