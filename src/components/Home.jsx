import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

function Home() {
  return (
    <div>
      <div>
      <Carousel data-bs-theme="dark" >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/carousel-1.jpg"
          alt="First slide"
          style={{filter:'brightness(50%)'}}
        />
        <Carousel.Caption className='text-light'>
          <h3 className='fw-bold mb-4'>EXPLORE THE WORLD</h3>
          <h1 className='fontSize mb-5'>Find Your Perfect Tour At Travel</h1>
          <h5 className='mb-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h5>
          <Button variant="" className='fw-bold px-5 py-3 mt-3 rounded rounded-pill text-light' style={{ backgroundColor: '#13357b' }}>Discover Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/carousel-2.jpg"
          alt="Second slide"
          style={{filter:'brightness(50%)'}}
        />
        <Carousel.Caption className='text-light'>
        <h3 className='fw-bold mb-4'>EXPLORE THE WORLD</h3>
          <h1 className='fontSize  mb-5'>You Like To Go?</h1>
          <h5 className='mb-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h5>
          <Button variant="" className='fw-bold px-5 py-3 mt-3 rounded rounded-pill text-light' style={{ backgroundColor: '#13357b' }}>Discover Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/carousel-3.jpg"
          alt="Third slide"
          style={{filter:'brightness(50%)'}}
        />
        <Carousel.Caption className='text-light '>
        <h3 className='fw-bold mb-4'>EXPLORE THE WORLD</h3>
          <h1 className='fontSize mb-5'>Let's The World Together!</h1>
          <h5 className='mb-3'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </h5>
          <Button variant="" className='fw-bold px-5 py-3 mt-3 rounded rounded-pill text-light' style={{ backgroundColor: '#13357b' }}>Discover Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
      </div>
    </div>
  )
}

export default Home
