import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Booknow() {
  const destinations = [
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
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Control
                  type="text"
                  className="p-3"
                  placeholder="Enter name"
                  style={{ color: "#13357b", borderColor: "#13357b" }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control
                  type="email"
                  className="p-3"
                  placeholder="Enter email"
                  style={{ color: "#13357b", borderColor: "#13357b" }}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridDate" className="w-100 ">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="MM/dd/yyyy" 
        placeholderText="Select Date"
        className="form-control p-3"
        style={{ color: "#13357b", borderColor: "#13357b" }}
      />
    </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control
                  type="phone"
                  className="p-3"
                  placeholder="Enter Phone"
                  style={{ color: "#13357b", borderColor: "#13357b" }}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridDestination">
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
                className="d-flex align-items-center"
              >
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
            </Row>

            <Form.Group as={Col} controlId="formGridPrice" className="mb-4">
              <Form.Control
                type="text"
                className="p-3"
                placeholder="Price"
                value={`$${price}`}
                readOnly
                style={{ color: "#13357b", borderColor: "#13357b" }}
              />
            </Form.Group>

            <Button
              variant="outline-primary"
              id="discovernow"
              className="rounded-pill fw-bold py-3 px-5 w-100"
            >
              Book Now
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default Booknow;
