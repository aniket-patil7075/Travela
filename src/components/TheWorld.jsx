import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';

function TheWorld() {
    const [activeButton, setActiveButton] = useState('');

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
                        className={`destiBtn rounded-pill py-3 mx-4 w-25 ${activeButton === 'National' ? 'active-btn' : ''}`}
                        onClick={() => handleButtonClick('National')}
                    >
                        National Tour Category
                    </Button>

                    <Button
                        variant=""
                        className={`destiBtn rounded-pill py-3 mx-4 w-25 ${activeButton === 'International' ? 'active-btn' : ''}`}
                        onClick={() => handleButtonClick('International')}
                    >
                        International Tour Category
                    </Button>
                </div>

                <Row>
                    <Col lg="4">
                        <div className='mt-2 div-popimg'>
                            <img src="/explore-tour-1.jpg" className='w-100' />
                            <div className='opaci'></div>
                        </div>
                        <div className='mt-4 div-popimg'>
                            <img src="explore-tour-4.jpg" className="w-100" />
                            <div className='opaci'></div>
                        </div>
                    </Col>
                    <Col lg="4">
                        <div className='mt-2 div-popimg'>
                            <img src="/explore-tour-2.jpg" className='w-100' />
                            <div className='opaci'></div>
                        </div>
                        <div className='mt-4 div-popimg'>
                            <img src="/explore-tour-5.jpg" className="w-100" />
                            <div className='opaci'></div>
                        </div>
                    </Col>
                    <Col lg="4">
                        <div className='mt-2 div-popimg'>
                            <img src="/explore-tour-3.jpg" className='w-100' />
                            <div className='opaci'></div>
                        </div>
                        <div className='mt-4 div-popimg'>
                            <img src="/explore-tour-6.jpg" className="w-100" />
                            <div className='opaci'></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TheWorld
