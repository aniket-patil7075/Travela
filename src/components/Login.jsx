import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  function signUp() {
    navigate("/");
  }
  return (
    <div className="bg-body-secondary">
      <div className="div-mainImg">
        <div className="overlay">
          <h1 className="mainFontSize fw-bold text-light">Login</h1>
          <h5 className="params">
            Home / Pages / <span className="text-light">Login</span>{" "}
          </h5>
        </div>
      </div>
      <Container className="d-flex justify-content-center">
        <Form className="my-5 w-50 ">
          <h2 className="text-center mb-4">Login</h2>

          <Row className="mb-4">
           <Col>
           <Form.Group as={Col} controlId="formGridEmail" className="mb-4">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" className="py-3" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" className="py-3" />
            </Form.Group>
           </Col>
          </Row>

          <Button
            variant="outline-primary"
            id="discovernow"
            className="rounded-pill fw-bold py-3 px-5 "
            onClick={signUp}
          >
            Login
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Login;
