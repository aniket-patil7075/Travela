import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';

function Destination() {
    const [activeButton, setActiveButton] = useState('');

    const handleButtonClick = (destination) => {
        setActiveButton(destination);
    };
    return (
        <div className='my-5' style={{ marginTop: '80px' }}>
            <Container>
                <h4 className='colorBlue pt-5 pb-2 text-center'>----- DESTINATION -----</h4>
                <h1 className='text-center'>Popular Destination</h1>
                <div className='d-flex justify-content-center py-5 d-inline-flex flex-wrap'>
                    <Button
                        variant=""
                        className={`destiBtn rounded-pill py-2 m-3 ${activeButton === 'All' ? 'active-btn' : ''}`}
                        onClick={() => handleButtonClick('All')}
                    >
                        All
                    </Button>

                    <Button
                        variant=""
                        className={`destiBtn rounded-pill py-2 m-3 ${activeButton === 'USA' ? 'active-btn' : ''}`}
                        onClick={() => handleButtonClick('USA')}
                    >
                        USA
                    </Button>

                    <Button
                        variant=""
                        className={`destiBtn rounded-pill py-2 m-3 ${activeButton === 'Canada' ? 'active-btn' : ''}`}
                        onClick={() => handleButtonClick('Canada')}
                    >
                        Canada
                    </Button>

                    <Button
                        variant=""
                        className={`destiBtn rounded-pill py-2 m-3 ${activeButton === 'Europe' ? 'active-btn' : ''}`}
                        onClick={() => handleButtonClick('Europe')}
                    >
                        Europe
                    </Button>

                    <Button
                        variant=""
                        className={`destiBtn rounded-pill py-2 m-3 ${activeButton === 'China' ? 'active-btn' : ''}`}
                        onClick={() => handleButtonClick('China')}
                    >
                        China
                    </Button>

                    <Button
                        variant=""
                        className={`destiBtn rounded-pill py-2 m-3 ${activeButton === 'Singapore' ? 'active-btn' : ''}`}
                        onClick={() => handleButtonClick('Singapore')}
                    >
                        Singapore
                    </Button>
                </div>
                <Row>
              <Col lg="4">
                
                    <div className='mt-2 div-popimg'>
                        <img  src="/destination-1.jpg" className='w-100' />
                    </div>
                    <div className='mt-4 div-popimg'>
                        <img  src="/destination-7.jpg"  className="w-100"/>
                    </div>
                    <div className='mt-4 div-popimg'>
                        <img  src="/destination-4.jpg"  className="w-100"/>
                    </div>
                  
              </Col>
              <Col lg="4">
              <div className='mt-2 div-popimg'>
                        <img  src="/destination-2.jpg"  className="w-100"/>
                    </div>
                    <div className='mt-4 div-popimg'>
                        <img  src="/destination-8.jpg"  className="w-100"/>
                    </div>
                    <div className='mt-4 div-popimg'>
                        <img  src="/destination-5.jpg"  className="w-100"/>
                    </div>
              </Col>
              <Col lg="4">
                    <div className='mt-2 div-popimg'>
                        <img  src="/destination-9.jpg"  className="w-100 dest-img"/>
                    </div>
                    <div className='mt-4 div-popimg'>
                        <img  src="/destination-6.jpg"  className="w-100"/>
                    </div>
              </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Destination
