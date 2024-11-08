import React, { useEffect } from 'react'; 
import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col";
import { Container } from 'react-bootstrap';

function Gallery() { 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return ( 
    <div > 
      <div className="div-mainImg"> 
        <div className="overlay"> 
          <h1 className="mainFontSize fw-bold text-light">Gallery</h1> 
          <h5 className="params">Home / Pages / <span className="text-light">Gallery</span></h5> 
        </div> 
      </div> 
      <Container style={{marginTop:"50px"}}>
      <h4 className='colorBlue pt-5 pb-2 text-center'>----- Our Gallery -----</h4>
      <h1 className='text-center mb-5'>Gallery</h1>
      <Row className="mt-2">
        {/* Destination Images */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
          <Col lg={3} key={`destination-${index}`}>
            <div className="div-popimg mb-4">
              <img src={`/destination-${index}.jpg`} alt={`Destination ${index}`} className="w-100" />
              <div className="p-5 opaci"></div>
            </div>
          </Col>
        ))}
      </Row>
      <Row className="mt-2">
        {/* Gallery Images */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
          <Col lg={3} key={`gallery-${index}`}>
            <div className="div-popimg mb-4">
              <img src={`/gallery-${index}.jpg`} alt={`Gallery ${index}`} className="w-100" />
              <div className="p-5 opaci"></div>
            </div>
          </Col>
        ))}
      </Row>
      </Container>
    </div> 
  ); 
}

export default Gallery;
