import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import CreditCard from "./CreditCard";
import COD from "./COD";
import QRcode from "./QRcode";

function Booknow() {
  const [selectedOption, setSelectedOption] = useState("QR");

  const renderPaymentOption = () => {
    switch (selectedOption) {
      case "QR":
        return <QRcode />;
      case "Card":
        return <CreditCard />;
      case "COD":
        return <COD />;
      default:
        return null;
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const destinations = [
    { destination: "Thailand", pricePerPerson: 350 },
    { destination: "California", pricePerPerson: 700 },
    { destination: "Italy", pricePerPerson: 650 },
    { destination: "Paris", pricePerPerson: 500 },
    { destination: "New York", pricePerPerson: 700 },
    { destination: "Tokyo", pricePerPerson: 800 },
    { destination: "Sydney", pricePerPerson: 600 },
  ];

  const [selectedDestination, setSelectedDestination] = useState("");
  const [numPersons, setNumPersons] = useState(1);
  const [price, setPrice] = useState(0);
  const [startDate, setStartDate] = useState(null);

  useEffect(() => {
    const destination = destinations.find(
      (dest) => dest.destination === selectedDestination
    );
    if (destination) {
      setPrice(destination.pricePerPerson * numPersons);
    } else {
      setPrice(0);
    }
  }, [selectedDestination, numPersons]);
  return (
    <div>
      <div className="div-mainImg">
        <div className="overlay">
          <h1 className="mainFontSize fw-bold text-light">Book Now</h1>
          <h5 className="params">
            Home / Pages / <span className="text-light">Book</span>{" "}
          </h5>
        </div>
      </div>
      <Container>
        <Col className="d-flex justify-content-center">
          <div className="mt-5">
            <h1 className="text-primary" style={{ color: "#13357b" }}>
              Book A Tour Deals
            </h1>
            <p className="text-primary" style={{ color: "#13357b" }}>
              Get{" "}
              <span className="text-warning" style={{ color: "#FFC107" }}>
                50% Off{" "}
              </span>
              On Your First Adventure Trip With Travela. Get More Deal Offers
              Here.
            </p>
            <Form>
              <Form.Group as={Col} controlId="formGridName" className="mb-3">
                <Form.Control
                  type="text"
                  className="p-3"
                  placeholder="Enter name"
                  style={{ color: "#13357b", borderColor: "#13357b" }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
                <Form.Control
                  type="email"
                  className="p-3"
                  placeholder="Enter email"
                  style={{ color: "#13357b", borderColor: "#13357b" }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPhone" className="mb-3">
                <Form.Control
                  type="phone"
                  className="p-3"
                  placeholder="Enter Phone"
                  style={{ color: "#13357b", borderColor: "#13357b" }}
                />
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="formGridDate"
                className="calender mb-3 "
              >
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="MM/dd/yyyy"
                  placeholderText="Select Date"
                  className="form-control p-3"
                  style={{ color: "#13357b", borderColor: "#13357b" }}
                />
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="formGridDestination"
                className="mb-3"
              >
                <NavDropdown
                  id="nav-dropdown-light-example"
                  title={selectedDestination || "Select Destination"}
                  menuVariant="light"
                  className="bg-body-secondary rounded rounded-1 p-3"
                  style={{ color: "#13357b", borderColor: "#13357b" }}
                >
                  {destinations.map((dest, index) => (
                    <NavDropdown.Item
                      key={index}
                      onClick={() => setSelectedDestination(dest.destination)}
                      style={{ color: "#13357b" }}
                    >
                      {dest.destination}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="formGridPersons"
                className="d-flex align-items-center mb-3"
              >
                <Form.Label className="me-3">Persons : </Form.Label>
                <Button
                  variant="outline-secondary"
                  className="rounded-pill p-2 me-3 px-3"
                  onClick={() =>
                    setNumPersons(numPersons > 1 ? numPersons - 1 : 1)
                  }
                  style={{ color: "#13357b", borderColor: "#13357b" }}
                >
                  -
                </Button>

                <Form.Control
                  type="text"
                  value={numPersons}
                  readOnly
                  className="text-center p-3 bg-body-secondary rounded-1"
                  style={{
                    color: "#13357b",
                    borderColor: "#13357b",
                    maxWidth: "60px",
                  }}
                />

                <Button
                  variant="outline-secondary"
                  className="rounded-pill p-2 ms-2 px-3"
                  onClick={() => setNumPersons(numPersons + 1)}
                  style={{ color: "#13357b", borderColor: "#13357b" }}
                >
                  +
                </Button>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPrice" className="mb-5">
                <Form.Control
                  type="text"
                  className="p-3"
                  placeholder="Price"
                  value={`₹ ${price}`}
                  readOnly
                  style={{ color: "#13357b", borderColor: "#13357b" }}
                />
              </Form.Group>

              <Button
                variant="outline-primary"
                id="discovernow"
                className="rounded-pill fw-bold py-3 px-5 w-100"
                onClick={handleShow}
              >
                Book Now
              </Button>
            </Form>
          </div>
          <Modal
            show={show}
            onHide={handleClose}
            className="bg-secondary bg-opacity-25"
          >
            <Modal.Header closeButton>
              <Modal.Title style={{ color: "#13357b" }}>
                Payment Option
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-secondary bg-opacity-25">
              <Row
                className="p-3 bg-light border border-opacity-25"
                style={{ borderColor: "#13357b" }}
              >
                {renderPaymentOption()}
              </Row>
              <h5 className="py-3 ps-2" style={{ color: "#13357b" }}>
                UPI, Cards & More
              </h5>
              <Row
                className="p-3 border border-opacity-25"
                style={{ borderColor: "#13357b" }}
              >
                <div
                  className="p-3 bg-light border border-opacity-25"
                  onClick={() => setSelectedOption("QR")}
                  style={{ cursor: "pointer", borderColor: "#13357b" }}
                >
                  UPI / QR
                </div>
                <div
                  className="p-3 bg-light border border-opacity-25"
                  onClick={() => setSelectedOption("Card")}
                  style={{ cursor: "pointer", borderColor: "#13357b" }}
                >
                  Cards
                </div>
                <div
                  className="p-3 bg-light border border-opacity-25"
                  onClick={() => setSelectedOption("COD")}
                  style={{ cursor: "pointer", borderColor: "#13357b" }}
                >
                  Cash on Delivery
                </div>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="outline-primary"
                id="discovernow"
                className="rounded-pill fw-bold py-3 px-5 "
                onClick={handleClose}
              >
                Close
              </Button>
              <Button
                variant="outline-primary"
                id="discovernow"
                className="rounded-pill fw-bold py-3 px-5 "
                onClick={handleClose}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Container>
    </div>
  );
}

export default Booknow;
