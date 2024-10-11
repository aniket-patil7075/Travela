import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function Destination() {
    const [activeButton, setActiveButton] = useState('All');

    const handleButtonClick = (destination) => {
        setActiveButton(destination);
    };
    return (
        <div className='my-5' style={{ marginTop: '80px' }}>
            <Container>
                <h4 className='colorBlue pt-5 pb-2 text-center'>----- DESTINATION -----</h4>
                <h1 className='text-center'>Popular Destination</h1>
                <div className='d-flex py-5 d-flex flex-wrap justify-content-center'>
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
            {activeButton==="All" && (
              <div className="mt-2 div-popimg">
              <img src="/destination-1.jpg" className="  w-100" />
              <div className=" p-5 opaci"></div>
              <div
                className="plus rounded rounded-circle text-center mt-4 me-4"
                id="i"
              >
                <FaRegPlusSquare className=" fw-bold " />
              </div>
              <div className="info ps-5">
                <Button
                  variant="outline-primary"
                  id="discovernow"
                  className="rounded-pill fw-bold border border-light mb-2"
                >
                  5 Photos
                </Button>
                <h5>New York City</h5>
                <a href="#" className="text-decoration-none ">
                  View All City <FaArrowRight />
                </a>{" "}
              </div>
            </div>
            )}
            {activeButton==="All" && (
              <div className="mt-2 div-popimg">
              <img src="/destination-7.jpg" className="w-100" />
              <div className=" p-5 opaci"></div>
              <div
                className="plus rounded rounded-circle text-center mt-4 me-4"
                id="i"
              >
                <FaRegPlusSquare className=" fw-bold " />
              </div>
              <div className="info ps-5">
                <Button
                  variant="outline-primary"
                  id="discovernow"
                  className="rounded-pill fw-bold border border-light mb-2"
                >
                  5 Photos
                </Button>
                <h5>Los angelas</h5>
                <a href="#" className="text-decoration-none ">
                  View All City <FaArrowRight />
                </a>{" "}
              </div>
            </div>
            )}
            {activeButton==="All" && (
              <div className="mt-2 div-popimg">
              <img src="/destination-4.jpg" className=" w-100" />
              <div className=" p-5 opaci"></div>
              <div
                className="plus rounded rounded-circle text-center mt-4 me-4"
                id="i"
              >
                <FaRegPlusSquare className=" fw-bold " />
              </div>
              <div className="info ps-5">
                <Button
                  variant="outline-primary"
                  id="discovernow"
                  className="rounded-pill fw-bold border border-light mb-2"
                >
                  5 Photos
                </Button>
                <h5>Los angelas</h5>
                <a href="#" className="text-decoration-none ">
                  View All City <FaArrowRight />
                </a>{" "}
              </div>
            </div>
            )}
            {activeButton==="Canada" && (
              <div className="mt-2 div-popimg">
              <img
                src="/destination-2.jpg"
                className="w-100"
                alt="Destination"
              />
              <div className=" p-5 opaci"></div>
              <div
                className="plus rounded rounded-circle text-center mt-4 me-4"
                id="i"
              >
                <FaRegPlusSquare className=" fw-bold " />
              </div>
              <div className="info ps-5">
                <Button
                  variant="outline-primary"
                  id="discovernow"
                  className="rounded-pill fw-bold border border-light mb-2"
                >
                  5 Photos
                </Button>
                <h5>Las vegas</h5>
                <a href="#" className="text-decoration-none ">
                  View All City <FaArrowRight />
                </a>{" "}
              </div>
            </div>
            )}
          </Col>
          <Col lg="4">
            {activeButton==="All" && (
              <div className="mt-2 div-popimg">
              <img
                src="/destination-2.jpg"
                className="w-100"
                alt="Destination"
              />
              <div className=" p-5 opaci"></div>
              <div
                className="plus rounded rounded-circle text-center mt-4 me-4"
                id="i"
              >
                <FaRegPlusSquare className=" fw-bold " />
              </div>
              <div className="info ps-5">
                <Button
                  variant="outline-primary"
                  id="discovernow"
                  className="rounded-pill fw-bold border border-light mb-2"
                >
                  5 Photos
                </Button>
                <h5>Las vegas</h5>
                <a href="#" className="text-decoration-none ">
                  View All City <FaArrowRight />
                </a>{" "}
              </div>
            </div>
            )}
            {activeButton==="All" && (<div className="mt-2 div-popimg">
              <img src="/destination-8.jpg" className=" w-100" />
              <div className=" p-5 opaci"></div>
              <div
                className="plus rounded rounded-circle text-center mt-4 me-4"
                id="i"
              >
                <FaRegPlusSquare className=" fw-bold " />
              </div>
              <div className="info ps-5">
                <Button
                  variant="outline-primary"
                  id="discovernow"
                  className="rounded-pill fw-bold border border-light mb-2"
                >
                  5 Photos
                </Button>
                <h5>Los angelas</h5>
                <a href="#" className="text-decoration-none ">
                  View All City <FaArrowRight />
                </a>{" "}
              </div>
            </div>)}
            {activeButton==="All" && (
              <div className="mt-2 div-popimg">
              <img src="/destination-5.jpg" className=" w-100" />
              <div className=" p-5 opaci"></div>
              <div
                className="plus rounded rounded-circle text-center mt-4 me-4"
                id="i"
              >
                <FaRegPlusSquare className=" fw-bold " />
              </div>
              <div className="info ps-5">
                <Button
                  variant="outline-primary"
                  id="discovernow"
                  className="rounded-pill fw-bold border border-light mb-2"
                >
                  5 Photos
                </Button>
                <h5>Los angelas</h5>
                <a href="#" className="text-decoration-none ">
                  View All City <FaArrowRight />
                </a>{" "}
              </div>
            </div>
            )}
          </Col>
          <Col lg="4">
            {activeButton==="All" && (
              <div className="mt-2 div-popimg">
              <img src="/destination-9.jpg" className=" w-100 dest-img" />
              <div className=" p-5 opaci"></div>
              <div
                className="plus rounded rounded-circle text-center mt-4 me-4"
                id="i"
              >
                <FaRegPlusSquare className=" fw-bold " />
              </div>
              <div className="info ps-5">
                <Button
                  variant="outline-primary"
                  id="discovernow"
                  className="rounded-pill fw-bold border border-light mb-2"
                >
                  5 Photos
                </Button>
                <h5>San francisco</h5>
                <a href="#" className="text-decoration-none ">
                  View All City <FaArrowRight />
                </a>{" "}
              </div>
            </div>
            )}
            {activeButton==="All" && (
              <div className="mt-2 div-popimg">
              <img src="/destination-6.jpg" className=" w-100" />
              <div className=" p-5 opaci"></div>
              <div
                className="plus rounded rounded-circle text-center mt-4 me-4"
                id="i"
              >
                <FaRegPlusSquare className=" fw-bold " />
              </div>
              <div className="info ps-5">
                <Button
                  variant="outline-primary"
                  id="discovernow"
                  className="rounded-pill fw-bold border border-light mb-2"
                >
                  5 Photos
                </Button>
                <h5>Los angelas</h5>
                <a href="#" className="text-decoration-none ">
                  View All City <FaArrowRight />
                </a>{" "}
              </div>
            </div>
            )}
          </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Destination
