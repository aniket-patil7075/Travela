import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import { FaArrowRight } from "react-icons/fa";

function TheWorld() {
    const [activeButton, setActiveButton] = useState('National');

    const handleButtonClick = (destination) => {
        setActiveButton(destination);
    };
    return (
        <div className='' style={{ marginTop: '120px' }}>
            <Container>
                <h4 className='colorBlue pt-5 pb-2 text-center'>----- EXPLORE TOUR -----</h4>
                <h1 className='text-center'>The World</h1>
                <p className='colorGray text-center w-75 py-4 m-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque velit explicabo? Voluptate sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum repellat.</p>
                <div className='d-flex justify-content-center py-5'>
                    <Button
                        variant=""
                        className={`destiBtn rounded-pill py-3 px-3 mx-4 w-25 ${activeButton === 'National' ? 'active-btn' : ''}`}
                        onClick={() => handleButtonClick('National')}
                    >
                        National Tour Category
                    </Button>

                    <Button
                        variant=""
                        className={`destiBtn rounded-pill py-3 mx- w-25 ${activeButton === 'International' ? 'active-btn' : ''}`}
                        onClick={() => handleButtonClick('International')}
                    >
                        Inter national Tour Category
                    </Button>
                </div>

                <Row>
                    <Col md="6" lg="4">
                        {activeButton === 'National' && (
                            <div className='mt-2 div-popimg'>
                                <img src="/explore-tour-1.jpg" className='w-100' alt="National Tour" />
                                <div className='explore'>
                                    <h4>WEEKEND TOUR</h4>
                                    <div className='d-flex'>
                                    <p className='fw-bold ps-4'>View all places</p>
                                    <FaArrowRight className='ms-2 mt-1'/>
                                    </div>
                                </div>
                                <div className='opaci'></div>
                            </div>
                        )}

                        {activeButton === 'National' && (
                            <div className='mt-4 div-popimg'>
                                <img src="/explore-tour-4.jpg" className="w-100" alt="National Tour" />
                                <div className='explore'>
                                    <h4>HISTORICAL TRIP</h4>
                                    <div className='d-flex'>
                                    <p className='fw-bold ps-4'>View all places</p>
                                    <FaArrowRight className='ms-2 mt-1'/>
                                    </div>
                                </div>
                                <div className='opaci'></div>
                            </div>
                        )}
                        {activeButton === 'International' && (
                            <div className='mt-4 div-popimg'>
                                <img src="/explore-tour-4.jpg" className="w-100" alt="International Tour" />
                                <div className='explore'>
                                    <h4 className='ps-4'>LONDON</h4>
                                    <div className='d-flex'>
                                    <p className='fw-bold ps-4'>View all places</p>
                                    <FaArrowRight className='ms-2 mt-1'/>
                                    </div>
                                </div>
                                <div className='opaci'></div>
                            </div>
                        )}
                    </Col>
                    <Col md="6" lg="4">
                    {activeButton === 'National' && (
                        <div className='mt-2 div-popimg'>
                            <img src="/explore-tour-2.jpg" className='w-100' />
                            <div className='explore'>
                                <h4>HOLIDAY TOUR</h4>
                                <div className='d-flex'>
                                    <p className='fw-bold ps-4'>View all places</p>
                                    <FaArrowRight className='ms-2 mt-1'/>
                                    </div>
                            </div>
                            <div className='opaci'></div>
                        </div>)}
                        {activeButton === 'National' && (
                        <div className='mt-4 div-popimg'>
                            <img src="/explore-tour-5.jpg" className="w-100" />
                            <div className='explore'>
                                <h4>FAMILY TOUR</h4>
                                <div className='d-flex'>
                                    <p className='fw-bold ps-4'>View all places</p>
                                    <FaArrowRight className='ms-2 mt-1'/>
                                    </div>
                            </div>
                            <div className='opaci'></div>
                        </div>)}
                        {activeButton === 'International' && (
                        <div className='mt-4 div-popimg'>
                            <img src="/explore-tour-6.jpg" className="w-100" />
                            <div className='explore'>
                                <h4 className='ps-5'>SPAIN</h4>
                                <div className='d-flex'>
                                    <p className='fw-bold ps-4'>View all places</p>
                                    <FaArrowRight className='ms-2 mt-1'/>
                                    </div>
                            </div>
                            <div className='opaci'></div>
                        </div>)}
                    </Col>
                    <Col md="6" lg="4">
                    {activeButton === 'National' && (
                        <div className='mt-2 div-popimg'>
                            <img src="/explore-tour-3.jpg" className='w-100' />
                            <div className='explore'>
                                <h4 className='ps-4'>ROAD TRIP</h4>
                                <div className='d-flex'>
                                    <p className='fw-bold ps-4'>View all places</p>
                                    <FaArrowRight className='ms-2 mt-1'/>
                                    </div>
                            </div>
                            <div className='opaci'></div>
                        </div>)}
                        {activeButton === 'National' && (
                        <div className='mt-4 div-popimg'>
                            <img src="/explore-tour-6.jpg" className="w-100" />
                            <div className='explore'>
                                <h4 className='ps-2'>BEACH TOUR</h4>
                                <div className='d-flex'>
                                    <p className='fw-bold ps-4'>View all places</p>
                                    <FaArrowRight className='ms-2 mt-1'/>
                                    </div>
                            </div>
                            <div className='opaci'></div>
                        </div>)}
                        {activeButton === 'International' && (
                        <div className='mt-4 div-popimg'>
                            <img src="/explore-tour-1.jpg" className="w-100" />
                            <div className='explore'>
                                <h4 className='ps-5'>JAPAN</h4>
                                <div className='d-flex'>
                                    <p className='fw-bold ps-4'>View all places</p>
                                    <FaArrowRight className='ms-2 mt-1'/>
                                    </div>
                            </div>
                            <div className='opaci'></div>
                        </div>)}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TheWorld
