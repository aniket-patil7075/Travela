import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import AboutUs from './AboutUs';
import OurServices from './OurServices';
import Destination from './Destination';

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
        <h3 className='h33 fw-bold mb-4 '>EXPLORER THE WORLD</h3>
        <h1 className='h11 mb-5 '>Find your Tour At Travel</h1>

          <h5 className='h55'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h5>
          <Button variant="" id='discovernow' className='rounded-pill fw-bold me-5 px-5 py-3 ms-3 mt-5 '>Discover Now</Button> 

          
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
          <h3 className='h33 fw-bold mb-4'>EXPLORER THE WORLD</h3>
          <h1 className='h11 mb-5'>Let's The World Together!</h1>
          <h5 className='h55'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h5>
          <Button variant="" id='discovernow' className='rounded-pill fw-bold me-5 px-5 py-3 ms-3 mt-5 ' >Discover Now</Button> 

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
          <h5 className='h33 fw-bold mb-4'>EXPLORER THE WORLD</h5>
          <h1 className='h11 mb-5'>You Like To Go?</h1>
          <h5 className='h55'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
</h5>
<Button variant="" id='discovernow' className='rounded-pill fw-bold me-5 px-5 py-3 ms-3 mt-5 ' >Discover Now</Button> 

        </Carousel.Caption>

      </Carousel.Item>
    </Carousel>
        </div>
        <div className='search blue px-5 pt-5 pb-4 w-75 m-auto position-absolute rounded-pill mt-5 '>
        <InputGroup className="mb-3 m-auto">
        <Form.Control
          placeholder="Eg: Thailand"
          aria-label="Thailand"
          aria-describedby="basic-addon2"
          className='serchBox rounded rounded-pill py-3'
        />
        <Button variant="outline-primary" className='position-absolute rounded rounded-pill px-4 fw-bold' id="button-addon2">
          Search
        </Button>
      </InputGroup>
        </div>
        <AboutUs/>
        <OurServices/>
        <Destination/>
    </div>
  )
}

export default Home
