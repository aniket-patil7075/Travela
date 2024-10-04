import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaHome } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaMobile } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";

function Footer() {
  return (
    <div style={{ marginTop: "120px" }}>
      <div className="div-footerImg">
        <div className="overlay">
          <Container>
            <div className="text-center text-light">
              <h4>----- SUBSCRIBE -----</h4>
              <h1>Our Newsletter</h1>
              <p className="w-75 mt-5" style={{ marginLeft: "170px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                tempore nam, architecto doloremque velit explicabo? Voluptate
                sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti
                eum cum repellat a laborum quasi.
              </p>
              <p className="w-75 mt-5" style={{ marginLeft: "170px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                tempore nam, architecto doloremque velit explicabo? Voluptate
                sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti
                eum cum repellat a laborum quasi.
              </p>
              <InputGroup className="mb-3 m-auto w-75 mt-5">
                <Form.Control
                  placeholder="Your Email"
                  aria-label="email"
                  aria-describedby="basic-addon2"
                  className="serchBox rounded rounded-pill py-3"
                />
                <Button
                  variant="outline-primary"
                  className="footerBtn position-absolute rounded rounded-pill px-4 fw-bold"
                  id="button-addon2"
                >
                  Search
                </Button>
              </InputGroup>
            </div>
          </Container>
        </div>
      </div>
      <div className="py-5 bg-dark text-light" >
        <Container>
        <Row>
            <Col>
                <h4>Get In Touch</h4>
                <p className="mt-4"><FaHome className="me-2" />123 Street, New York, USA</p>
                <p><FaEnvelope className="me-2" />info@example.com</p>
                <p><IoIosCall className="me-2" />+1234567890</p>
                <p><FaMobile className="me-2" />+1234567890</p>
                <div className=''>
                        <FaTwitter className='border border-1 rounded rounded-circle p-2 me-2' style={{ width: "35px", height: "35px" }} />

                        <FaFacebookF className='border border-1 rounded rounded-circle p-2 me-2' style={{ width: "35px", height: "35px" }} />

                        <FaLinkedinIn className='border border-1 rounded rounded-circle p-2 me-2' style={{ width: "35px", height: "35px" }} />

                        <FaInstagram className='border border-1 rounded rounded-circle p-2 me-2' style={{ width: "35px", height: "35px" }} />

                        <FaYoutube className='border border-1 rounded rounded-circle p-2 me-2' style={{ width: "35px", height: "35px" }} />
                    </div>
            </Col>
            <Col className="footerA">
                <h4 className="mb-3">Company</h4>
                <a href="/" ><MdArrowForwardIos className="me-3" />About</a>
            </Col>
            <Col>
                <h4>Support</h4>
            </Col>
            <Col>
            
            </Col>
        </Row>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
