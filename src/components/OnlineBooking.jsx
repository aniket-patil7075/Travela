import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import {useNavigate} from 'react-router-dom'

function OnlineBooking() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate()
  return (
    <div >
      <div className="div-ballonImg">
        <div className="overlay">
          <Container>
            <Row>
              <Col lg={6}>
                <h4 className="text-light mt-5">BOOKING -----</h4>
                <h1 className="text-light">Online Booking</h1>
                <p className="text-light mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur maxime ullam esse fuga blanditiis accusantium
                  pariatur quis sapiente, veniam doloribus praesentium?
                  Repudiandae iste voluptatem fugiat doloribus quasi quo iure
                  officia.
                </p>
                <p className="text-light mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur maxime ullam esse fuga blanditiis accusantium
                  pariatur quis sapiente, veniam doloribus praesentium?
                  Repudiandae iste voluptatem fugiat doloribus quasi quo iure
                  officia.
                </p>
                <Button
                  variant="outline-primary"
                  id="discovernow"
                  className="rounded-pill fw-bold py-3 px-5 mt-3"
                  onClick={()=>navigate('/Booknow')}
                >
                  Read More
                </Button>
              </Col>
              <Col lg={6}>
                <h1 className="text-light">Book A Tour Deals</h1>
                <p className="text-light">
                  Get <span className="text-warning">50% Off </span>On Your
                  First Adventure Trip With Travela. Get More Deal Offers Here.
                </p>
                <Form>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                      <Form.Control
                        type="text"
                        className="p-3"
                        placeholder="Enter name"
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Control
                        type="email"
                        className="p-3"
                        placeholder="Enter email"
                      />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridDate">
                      <Form.Control
                        type="text"
                        className="p-3"
                        placeholder="Date & Time"
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridDate">
                      <NavDropdown
                        id="nav-dropdown-light-example"
                        title="Destination"
                        menuVariant="light"
                        className="bg-light rounded rounded-1 p-3 text-secondary"
                      >
                        <NavDropdown.Item href="#action/3.1">
                          Japan
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          Italy
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          Thayland
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">
                          California
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridDate">
                      <NavDropdown
                        id="nav-dropdown-dark-example"
                        title="Persons"
                        menuVariant="light"
                        className="bg-light rounded rounded-1 p-3 text-secondary"
                      >
                        <NavDropdown.Item href="#action/3.1">
                          Persons1
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          Persons2
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          Persons3
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">
                          Persons4
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridDate">
                      <NavDropdown
                        id="nav-dropdown-dark-example"
                        title="Categories"
                        menuVariant="light"
                        className="bg-light rounded rounded-1 p-3 text-secondary"
                      >
                        <NavDropdown.Item href="#action/3.1">
                          Kids
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          1
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          2
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">
                          3
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Form.Group>
                  </Row>

                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Control
                      placeholder="Enter Address"
                      className="px-3 pt-3 pb-5"
                    />
                  </Form.Group>

                  <Button
                    variant="outline-primary"
                    id="discovernow"
                    className="rounded-pill fw-bold py-3 px-5 w-100"
                    onClick={()=>navigate('/Booknow')}
                  >
                    Book Now
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default OnlineBooking;
