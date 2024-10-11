import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import { FaArrowRight } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom'

function AboutUs() {
  const navigate = useNavigate()
  return (
    <div className='' style={{ marginTop: '200px' }}>
      <Container>
        <Row>
          <Col sm="12" md="12" lg="5" className='px-4'>
            <div className='px-5 para para1'>
              <div className='me-2'>
                <img
                  className="w-100"
                  src="/about-img.jpg"
                  alt="AboutUs"
                />
              </div>
            </div>
          </Col>
          <Col sm="12" md="12" lg="7" className='aboutUs px-4'>
            <div className='h-100' style={{ background: 'linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url(/about-img-1.png)' }}
            >
              <h5 className='colorBlue fw-bold mb-3'>ABOUT US -------</h5>
              <h1 className='my-3'>Welcome to <span className='colorBlue'>Travela</span></h1>
              <p className='mt-4 text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, dolorum, doloribus sunt dicta, officia voluptatibus libero necessitatibus natus impedit quam ullam assumenda? Id atque iste consectetur. Commodi odit ab saepe!</p>
              <p className='mb-4 text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quos voluptatem suscipit neque enim, doloribus ipsum rem eos distinctio, dignissimos nisi saepe nulla? Libero numquam perferendis provident placeat molestiae quia?</p>
              <Row >
                <Col className='arrow'>
                  <div className='mb-2 text-secondary'><FaArrowRight className='colorBlue me-3'/>First Class Fights</div>
                  <div className='mb-2 text-secondary'><FaArrowRight className='colorBlue me-3'/>5 Star Accommodations</div>
                  <div className='mb-2 text-secondary'><FaArrowRight className='colorBlue me-3'/>150 Premium City Tours</div>
                </Col>
                <Col>
                  <div className='mb-2 text-secondary'><FaArrowRight className='colorBlue me-3'/>HandPicked Hotels</div>
                  <div className='mb-2 text-secondary'><FaArrowRight className='colorBlue me-3'/>Latest Model Vehicles</div>
                  <div className='mb-2 text-secondary'><FaArrowRight className='colorBlue me-3'/>24/7 Service</div>
                </Col>
              </Row>
              <Button variant="outline-primary" id='discovernow' className='servBtn rounded-pill fw-bold py-3 px-5 mt-3' onClick={()=>navigate('/About')} >Read More</Button> 

            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AboutUs
