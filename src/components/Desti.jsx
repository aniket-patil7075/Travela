import React, { useEffect } from 'react'
import Destination from "./Destination";

function Desti() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <div className="div-mainImg">
        <div className="overlay">
          <h1 className="mainFontSize fw-bold text-light">Destination</h1>
          <h5 className="params">Home / Pages / <span className="text-light">Destination</span> </h5>
        </div>
      </div>
      <Destination/>
    </div>
  )
}

export default Desti