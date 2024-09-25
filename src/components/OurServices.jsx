import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import { FaGlobe } from "react-icons/fa";

function OurServices() {
  return (
    <div className='py-5 bg-body-secondary' style={{ marginTop: '80px' }}>
      <Container>
        <h5 className='colorBlue pt-5 pb-2 text-center'>----- SERVICES -----</h5>
        <h1 className='text-center'>Our Services</h1>
        <Row className='my-5'>
          <Col lg="6">
            <div className='d-flex bg-light p-4 my-3 border border-primary rounded-4'>
              <div className=''>
                <h5>WorldWide Tours</h5>
                <p className='text-secondary justi pt-3'>Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.

                </p>
              </div>
              <div className='ps-4'>
                <FaGlobe className='serviceIcon colorBlue mt-5' />
              </div>
            </div>
            <div className='d-flex bg-light p-4 my-3 border border-primary rounded-4'>
              <div className=''>
                <h5>WorldWide Tours</h5>
                <p className='text-secondary justi pt-3'>Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.

                </p>
              </div>
              <div className='ps-4'>
                <FaGlobe className='serviceIcon colorBlue mt-5' />
              </div>
            </div>
            <div className='d-flex bg-light p-4 my-3 border border-primary rounded-4'>
              <div className=''>
                <h5>WorldWide Tours</h5>
                <p className='text-secondary justi pt-3'>Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.

                </p>
              </div>
              <div className='ps-4'>
                <FaGlobe className='serviceIcon colorBlue mt-5' />
              </div>
            </div>
          </Col>
          <Col lg="6">
          <div className='d-flex bg-light p-4 my-3 border border-primary rounded-4'>
              <div className=''>
                <h5>WorldWide Tours</h5>
                <p className='text-secondary justi pt-3'>Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.

                </p>
              </div>
              <div className='ps-4'>
                <FaGlobe className='serviceIcon colorBlue mt-5' />
              </div>
            </div>
            <div className='d-flex bg-light p-4 my-3 border border-primary rounded-4'>
              <div className=''>
                <h5>WorldWide Tours</h5>
                <p className='text-secondary justi pt-3'>Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.

                </p>
              </div>
              <div className='ps-4'>
                <FaGlobe className='serviceIcon colorBlue mt-5' />
              </div>
            </div>
            <div className='d-flex bg-light p-4 my-3 border border-primary rounded-4'>
              <div className=''>
                <h5>WorldWide Tours</h5>
                <p className='text-secondary justi pt-3'>Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.

                </p>
              </div>
              <div className='ps-4'>
                <FaGlobe className='serviceIcon colorBlue mt-5' />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default OurServices
