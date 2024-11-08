import React, { useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import { FaGlobe } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'

function OurServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate()
  return (
    <div className='py-5 bg-body-secondary' style={{ marginTop: '80px' }}>
      <Container>
        <h4 className='colorBlue pt-5 pb-2 text-center'>----- SERVICES -----</h4>
        <h1 className='text-center'>Our Services</h1>
        <Row className='py-5'>
          <Col lg="6">
            <div className='d-flex bg-light p-4 my-3 border border-primary rounded-4 services-div'>
              <div className=''>
                <h5 className='text-end'>WorldWide Tours</h5>
                <p className='colorGray justi pt-3'>Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.

                </p>
              </div>
              <div className='ps-4'>
                <FaGlobe className='serviceIcon colorBlue' />
              </div>
            </div>
            <div className='d-flex bg-light p-4 my-3 border border-primary rounded-4 services-div'>
              <div className=''>
                <h5 className='text-end'>Hotel Reservation</h5>
                <p className='colorGray text-end pt-3'>Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.

                </p>
              </div>
              <div className='ps-4'>
                <FaHotel className='serviceIcon colorBlue' />
              </div>
            </div>
            <div className='d-flex bg-light p-4 my-3 border border-primary rounded-4 services-div'>
              <div className=''>
                <h5 className='text-end'>Travel Guides</h5>
                <p className='colorGray text-end pt-3'>Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.

                </p>
              </div>
              <div className='ps-4'>
                <FaUser className='serviceIcon colorBlue' />
              </div>
            </div>
            <div className='d-flex bg-light p-4 my-3 border border-primary rounded-4 services-div'>
              <div className=''>
                <h5 className='text-end'>Event Management</h5>
                <p className='colorGray justi pt-3'>Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.

                </p>
              </div>
              <div className='ps-4'>
                <FaCog  className='serviceIcon colorBlue' />
              </div>
            </div>
          </Col>
          <Col lg="6">
          <div className='d-flex bg-light p-4 my-3 border border-primary rounded-4 services-div'>
              <div className='pe-4'>
                <FaGlobe className='serviceIcon colorBlue' />
              </div>
              <div className=''>
                <h5 className='text-start'>WorldWide Tours</h5>
                <p className='colorGray text-start pt-3'>Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.

                </p>
              </div>
            </div>
            <div className='d-flex bg-light p-4 my-3 border border-primary rounded-4 services-div'>
              <div className='pe-4'>
                <FaHotel className='serviceIcon colorBlue' />
              </div>
              <div className=''>
                <h5 className='text-start'>Hotel Reservation</h5>
                <p className='colorGray text-start pt-3'>Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.

                </p>
              </div>
            </div>
            <div className='d-flex bg-light p-4 my-3 border border-primary rounded-4 services-div'>
              
            <div className='pe-4'>
                <FaUser className='serviceIcon colorBlue' />
              </div>
              <div className=''>
                <h5 className='text-start'>Travel Guides</h5>
                <p className='colorGray text-start pt-3'>Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.

                </p>
              </div>
            </div>
            <div className='d-flex bg-light p-4 my-3 border border-primary rounded-4 services-div'>
              <div className='pe-4'>
                <FaCog  className='serviceIcon colorBlue' />
              </div>
              <div className=''>
                <h5 className='text-start'>Event Management</h5>
                <p className='colorGray text-start pt-3'>Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.

                </p>
              </div>
            </div>
          </Col>
        </Row>
        <div className='d-flex justify-content-center'>
          <Button variant="outline-primary" id='discovernow' className='rounded-pill fw-bold py-3 px-5 ' onClick={()=>navigate('/Services')} >Service More</Button> 
        </div>
      </Container>
    </div>
  )
}

export default OurServices
