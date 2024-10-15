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
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcDiscover } from "react-icons/fa";
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div style={{ marginTop: "120px" }}>
      <div className="div-footerImg">
        <div className="overlay">
          <Container>
            <div className="text-center text-light">
              <h4>----- SUBSCRIBE -----</h4>
              <h1>Our Newsletter</h1>
              <p className="footerPara w-75 mt-5" >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                tempore nam, architecto doloremque velit explicabo? Voluptate
                sunt eveniet fuga eligendi! Expedita laudantium fugiat corrupti
                eum cum repellat a laborum quasi.
              </p>
              <p className="footerPara w-75 mt-5" >
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
      <div className="py-4 bg-dark text-light">
        <Container>
          <Row>
            <Col md={6} lg={3} className="footerA  py-3">
              <h4>Get In Touch</h4>
              <p className="mt-4">
                <FaHome className="me-2" />
                123 Street, New York, USA
              </p>
              <p>
                <FaEnvelope className="me-2" />
                info@example.com
              </p>
              <p>
                <IoIosCall className="me-2" />
                +1234567890
              </p>
              <p>
                <FaMobile className="me-2" />
                +1234567890
              </p>
              <div className="">
                <FaTwitter
                  className="border border-1 rounded rounded-circle p-2 me-2"
                  style={{ width: "35px", height: "35px" }}
                />

                <FaFacebookF
                  className="border border-1 rounded rounded-circle p-2 me-2"
                  style={{ width: "35px", height: "35px" }}
                />

                <FaLinkedinIn
                  className="border border-1 rounded rounded-circle p-2 me-2"
                  style={{ width: "35px", height: "35px" }}
                />

                <FaInstagram
                  className="border border-1 rounded rounded-circle p-2 me-2"
                  style={{ width: "35px", height: "35px" }}
                />

                <FaYoutube
                  className="border border-1 rounded rounded-circle p-2 me-2"
                  style={{ width: "35px", height: "35px" }}
                />
              </div>
            </Col>
            <Col className="footerA py-3" md={6} lg={3}>
              <h4 className="mb-3">Company</h4>
              <Link to="/About" className="">
                <MdArrowForwardIos className="me-3" />
                About
              </Link><br/>
              <Link to="/Contact">
                <MdArrowForwardIos className="me-3" />
                Careers
              </Link><br/>
              <Link to="/Blog">
                <MdArrowForwardIos className="me-3" />
                Blog
              </Link><br/>
              <Link to="/About">
                <MdArrowForwardIos className="me-3" />
                Press
              </Link><br/>
              <Link to="/Packages">
                <MdArrowForwardIos className="me-3" />
                Gift Cards
              </Link><br/>
              <Link to="/Blog">
                <MdArrowForwardIos className="me-3" />
                Magazine
              </Link><br/>
            </Col>
            <Col className="footerA py-3" md={6} lg={3}>
              <h4 className="mb-3">Support</h4>
              <Link to="/Contact">
                <MdArrowForwardIos className="me-3" />
                Contact
              </Link><br/>
              <Link to="/Services">
                <MdArrowForwardIos className="me-3" />
                Legal Notice
              </Link><br/>
              <Link to="/Services">
                <MdArrowForwardIos className="me-3" />
                Privacy Policy
              </Link><br/>
              <Link to="/About">
                <MdArrowForwardIos className="me-3" />
                Terms and Conditions
              </Link><br/>
              <Link to="/Contact">
                <MdArrowForwardIos className="me-3" />
                Sitemap
              </Link><br/>
              <Link to="/Services">
                <MdArrowForwardIos className="me-3" />
                Cookie policy
              </Link><br/>
            </Col>
            <Col md={6} lg={3} className="footerA py-3">
                <div className="">
                  
                <Form.Group as={Col} controlId="formGridDate">
                      <NavDropdown
                        id="nav-dropdown-light-example"
                        title="English"
                        menuVariant="dark"
                        className="bg-dark border border-light w-50 rounded rounded-1 p-3 text-secondary mb-3"
                      >
                        <NavDropdown.Item href="#action/3.1">
                          Arabic
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          German
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          New Work
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">
                          Japan
                        </NavDropdown.Item>
                      </NavDropdown>
                      <NavDropdown
                        id="nav-dropdown-dark-example"
                        title="$"
                        menuVariant="dark"
                        className="bg-dark border border-light w-50 rounded rounded-1 p-3 text-secondary"
                      >
                        <NavDropdown.Item href="#action/3.1">
                          USD
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          EUR
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          INR
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">
                          GBP
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Form.Group>
                    <h4 className="my-3">Payments</h4>
                    <div><FaCcVisa className="fs-5 me-2" /> <FaCcMastercard className="fs-5 me-2"  /> <FaCcPaypal className="fs-5 me-2"  /> <FaCcDiscover className="fs-5 me-2"  /></div>
                </div>
            </Col>
          </Row>
        </Container>
        <hr className="my-5"></hr>
        <div className="text-center">
            <Container>
            <p className="text-light fw-bold">&Travela <span className="text-secondary"> , All right reserved. Designed By</span>  @Aniket Patil</p>
            </Container>
        </div>
      </div>
    </div>
  );
}

export default Footer;
