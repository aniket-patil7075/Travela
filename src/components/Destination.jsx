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
                <div className='d-flex justify-content-between py-5'>
                    <Button
                        variant=""
                        className={`destiBtn rounded-pill py-2 ${activeButton === 'All' ? 'active-btn' : ''}`}
                        onClick={() => handleButtonClick('All')}
                    >
                        All
                    </Button>

                    <Button
                        variant=""
                        className={`destiBtn rounded-pill py-2 ${activeButton === 'USA' ? 'active-btn' : ''}`}
                        onClick={() => handleButtonClick('USA')}
                    >
                        USA
                    </Button>

                    <Button
                        variant=""
                        className={`destiBtn rounded-pill py-2 ${activeButton === 'Canada' ? 'active-btn' : ''}`}
                        onClick={() => handleButtonClick('Canada')}
                    >
                        Canada
                    </Button>

                    <Button
                        variant=""
                        className={`destiBtn rounded-pill py-2 ${activeButton === 'Europe' ? 'active-btn' : ''}`}
                        onClick={() => handleButtonClick('Europe')}
                    >
                        Europe
                    </Button>

                    <Button
                        variant=""
                        className={`destiBtn rounded-pill py-2 ${activeButton === 'China' ? 'active-btn' : ''}`}
                        onClick={() => handleButtonClick('China')}
                    >
                        China
                    </Button>

                    <Button
                        variant=""
                        className={`destiBtn rounded-pill py-2 ${activeButton === 'Singapore' ? 'active-btn' : ''}`}
                        onClick={() => handleButtonClick('Singapore')}
                    >
                        Singapore
                    </Button>
                </div>
                <Row className=''>
                    <Col lg="4">
                        <Row>

                            <div className=''>
                                <img
                                    className="p-2 rounded rounded-4 w-100"
                                    src="/destination-1.jpg"
                                    alt="AboutUs"
                                />
                            </div>

                            <div className='mt-2'>
                                <img
                                    className="p-2 rounded rounded-4 w-100"
                                    src="/destination-2.jpg"
                                    alt="AboutUs"
                                />
                            </div>

                        </Row>
                        <div className='mt-2'>
                            <img
                                className="p-2 rounded rounded-4 w-100"
                                src="/destination-4.jpg"
                                alt="AboutUs"
                            />
                        </div>
                    </Col>
                    <Col lg="4">
                        <Row>

                            <div className=''>
                                <img
                                    className="p-2 rounded rounded-4 w-100"
                                    src="/destination-7.jpg"
                                    alt="AboutUs"
                                />
                            </div>

                            <div className='mt-2'>
                                <img
                                    className="p-2 rounded rounded-4 w-100"
                                    src="/destination-8.jpg"
                                    alt="AboutUs"
                                />
                            </div>

                        </Row>
                        <div className='mt-2'>
                            <img
                                className="p-2 rounded rounded-4 w-100"
                                src="/destination-5.jpg"
                                alt="AboutUs"
                            />
                        </div>

                    </Col>
                    <Col lg="4">
                        <div className=''>
                            <img
                                className="mt-2 rounded rounded-3 w-100"
                                src="/destination-9.jpg"
                                alt="AboutUs"
                            />
                        </div>
                        <div className='mt-3'>
                            <img
                                className="p-1 rounded rounded-4 w-100"
                                src="/destination-6.jpg"
                                alt="AboutUs"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Destination
