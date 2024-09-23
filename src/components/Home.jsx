import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

function Home() {
  return (
    <div>
        <div > 
        <Carousel data-bs-theme="dark" className='' >
            
      <Carousel.Item >
     
        <img
          className="d-block w-100 cimg md-h-75"
          src="/carousel-1.jpg"
          alt="First slide"
          style={{filter: 'brightness(50%)'}}
        />
        
        <Carousel.Caption className='text-light' >
        <h3 className='fw-bold mb-4 '>EXPLORER THE WORLD</h3>
        <h1 className='h11 mb-5 '>Find Your Perfect Tour At Travel</h1>

          <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h5>
          <Button variant="" className='rounded-pill fw-bold me-5 px-5 py-3 ms-3 mt-5 text-white' style={{backgroundColor:"#13357B"}}>Discover Now</Button> 

          
        </Carousel.Caption>
        
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100 cimg"
          src="/carousel-2.jpg"
          alt="Second slide"
          style={{filter: 'brightness(50%)'}}
        />
        <Carousel.Caption className='text-light' >
          <h3 className='fw-bold mb-4'>EXPLORER THE WORLD</h3>
          <h1 className='h11 mb-5'>Let's The World Together!</h1>
          <h5 className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h5>
          <Button variant="" className='rounded-pill fw-bold me-5 px-5 py-3 ms-3 mt-5 text-white' style={{backgroundColor:"#13357B"}}>Discover Now</Button> 

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 cimg"
          src="/carousel-3.jpg"
          alt="Third slide"
          style={{filter: 'brightness(50%)'}}
        />
        <Carousel.Caption className='text-light' >
          <h5 className='fw-bold mb-4'>EXPLORER THE WORLD</h5>
          <h1 className='h11 mb-5'>You Like To Go?</h1>
          <h5>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
</h5>
<Button variant="" className='rounded-pill fw-bold me-5 px-5 py-3 ms-3 mt-5 text-white' style={{backgroundColor:"#13357B"}}>Discover Now</Button> 

        </Carousel.Caption>

      </Carousel.Item>
    </Carousel>
        </div>
    </div>
  )
}

export default Home
