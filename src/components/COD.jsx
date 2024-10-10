import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

function COD() {
  return (
    <div className="p-3 bg-light border border-secondary border-opacity-25">
        <Form>
              <Form.Group as={Col} controlId="formGridAddress" className="mb-3">
                <Form.Control
                  type="text"
                  className="p-3"
                  placeholder="Enter address"
                  style={{ color: "#13357b", borderColor: "#13357b" }}
                />
              </Form.Group>
        </Form>
      <Button
        variant="outline-primary"
        id="discovernow"
        className="rounded-pill fw-bold py-3 px-5 "
      >
        Submit
      </Button>
    </div>
  );
}

export default COD;
