import React from 'react'
import AwesomePack from './AwesomePack'
import OnlineBooking from './OnlineBooking'

function Packages() {
  return (
    <div>
      <div className="div-mainImg">
        <div className="overlay">
          <h1 className="mainFontSize fw-bold text-light">Packages</h1>
          <h5 className="params">Home / Pages / <span className="text-light">Packages</span> </h5>
        </div>
      </div>
      <AwesomePack/>
      <div style={{marginTop:"100px"}}></div>
      <OnlineBooking/>
    </div>
  )
}

export default Packages
