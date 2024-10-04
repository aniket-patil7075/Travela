import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

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
            <div className="p-5 bg-dark">

            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Footer;
