import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { RiMailOpenFill } from "react-icons/ri";

function Contact() {
  return (
    <div className="py-5 bg-body-secondary ">
      <div className="div-mainImg">
        <div className="overlay">
          <h1 className="mainFontSize fw-bold text-light">Contact us</h1>
          <h5 className="params">Home / Pages / <span className="text-light">Contact</span> </h5>
        </div>
      </div>
      <Container>
        <h4 className="colorBlue mt-5 pt-5 pb-2 text-center">
          ----- CONTACT US -----
        </h4>
        <h1 className="text-center mt-1 ">Contact for Any Query</h1>
        <div>
          <Row className="ms-2 pb-5 mt-5">
            <Col lg="4" className="bg-white rounded rounded-3">
              <div className=" text-center div-contact pt-2">
                <FaLocationDot className="ico" />
                <p className="text-center pt-4">123 ranking Street,</p>
                <p className="text-center">New York, USA</p>

                <FaPhoneAlt className="ico" />
                <h3 className="pp pt-2">Mobile</h3>
                <p className="text-center">+012 345 67890</p>

                <p className="text-center">+012 345 67890</p>

                <RiMailOpenFill className="ico" />
                <h3 className="pp pt-2">Email</h3>
                <p className="text-center ">nfo@example.com</p>
                <p className="text-center">info@example.com</p>
              </div>
            </Col>

            <Col lg="7" className="ms-5">
              <h4>Send us a message</h4>
              <p>
                The contact form is currently inactive. Get a functional and
                working contact form with Ajax & PHP in a few minutes. Just copy
                and paste the files, add a little code and you're done.
                <a
                  href="#"
                  className="text-decoration-none"
                  style={{ color: "#13357B" }}
                >
                  {" "}
                  Download Now.
                </a>
              </p>

              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Control
                      type="email"
                      placeholder="Your Name"
                      className="p-3 "
                      style={{ border: "none" }}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Control
                      type="password"
                      placeholder="Your Email"
                      className="p-3 "
                      style={{ border: "none" }}
                    />
                  </Form.Group>
                </Row>

                <Form.Group
                  className="mb-2"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    type="text"
                    placeholder="subject"
                    className="p-3 "
                    style={{ border: "none" }}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3 mt-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Message"
                    className="pb-5 "
                    style={{ border: "none" }}
                  />
                </Form.Group>

                <Button
                  variant=""
                  className=" fw-bold me-5 px-5 py-3   w-100"
                  id="discovernow"
                >
                  Discover Now
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
        <div className="my-5 bg-light">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d122295.92004806882!2d74.25314605000001!3d16.689514100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1728474440167!5m2!1sen!2sin"
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

      </Container>
    </div>
  );
}

export default Contact;
