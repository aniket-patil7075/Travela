import React, { useEffect } from 'react'
import OnlineBooking from './OnlineBooking'

function TravelBooking() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="div-mainImg">
        <div className="overlay">
          <h1 className="mainFontSize fw-bold text-light">Travel Booking</h1>
          <h5 className="params">Home / Pages / <span className="text-light">Travel Booking</span> </h5>
        </div>
      </div>
      <OnlineBooking/>
    </div>
  )
}

export default TravelBooking