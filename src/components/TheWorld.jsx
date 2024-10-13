import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import { FaArrowRight } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";

function TheWorld() {
  const [show, setShow] = useState(false);
  const [selectedTour, setSelectedTour] = useState({ title: "", images: [] });

  const handleClose = () => setShow(false);
  const handleShow = (title, images) => {
    setSelectedTour({ title, images });
    setShow(true);
  };

  const [activeButton, setActiveButton] = useState("National");

  const handleButtonClick = (destination) => {
    setActiveButton(destination);
  };
  return (
    <div className="" style={{ marginTop: "120px" }}>
      <Container>
        <h4 className="colorBlue pt-5 pb-2 text-center">
          ----- EXPLORE TOUR -----
        </h4>
        <h1 className="text-center">The World</h1>
        <p className="colorGray text-center w-75 py-4 m-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          tempore nam, architecto doloremque velit explicabo? Voluptate sunt
          eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum
          repellat.
        </p>
        <div className="d-flex justify-content-center py-5">
          <Button
            variant=""
            className={`destiBtn rounded-pill py-3 mx-4 w-25 ${
              activeButton === "National" ? "active-btn" : ""
            }`}
            onClick={() => handleButtonClick("National")}
          >
            National Tour Category
          </Button>

          <Button
            variant=""
            className={`destiBtn rounded-pill py-3 mx-4 w-25 ${
              activeButton === "International" ? "active-btn" : ""
            }`}
            onClick={() => handleButtonClick("International")}
          >
            Inter national Tour Category
          </Button>
        </div>

        <Row>
          <Col md="6" lg="4">
            {activeButton === "National" && (
              <div className="mt-2 div-popimg">
                <img
                  src="/explore-tour-1.jpg"
                  className="w-100"
                  alt="National Tour"
                />

                <div className="opaci"></div>
                <div className="explore">
                  <h4>WEEKEND TOUR</h4>
                  <div className="d-flex">
                    <p className="fw-bold ps-4" style={{cursor:"pointer"}} onClick={() =>
                        handleShow("Weekend Tour", ["/explore-tour-1.jpg","destination-1.jpg","/gallery-1.jpg","/packages-1.jpg"])
                      }>View all places</p>
                    <FaArrowRight className="ms-2 mt-1" />
                  </div>
                </div>
                <div className="link">
                  <FaLink />
                </div>
              </div>
            )}

            {activeButton === "National" && (
              <div className="mt-4 div-popimg">
                <img
                  src="/explore-tour-4.jpg"
                  className="w-100"
                  alt="National Tour"
                />

                <div className="opaci"></div>
                <div className="explore">
                  <h4>HISTORICAL TRIP</h4>
                  <div className="d-flex">
                    <p className="fw-bold ps-4"onClick={() =>
                        handleShow("Historical Tour", ["/explore-tour-2.jpg","destination-2.jpg","/gallery-2.jpg","/packages-2.jpg"])
                      }>View all places</p>
                    <FaArrowRight className="ms-2 mt-1" />
                  </div>
                </div>
                <div className="link">
                  <FaLink />
                </div>
              </div>
            )}
            {activeButton === "International" && (
              <div className="mt-4 div-popimg">
                <img
                  src="/explore-tour-4.jpg"
                  className="w-100"
                  alt="International Tour"
                />

                <div className="opaci"></div>
                <div className="explore">
                  <h4 className="ps-4">LONDON</h4>
                  <div className="d-flex">
                    <p className="fw-bold ps-4" onClick={handleShow}>View all places</p>
                    <FaArrowRight className="ms-2 mt-1" />
                  </div>
                </div>
                <div className="link">
                  <FaLink />
                </div>
              </div>
            )}
          </Col>
          <Col md="6" lg="4">
            {activeButton === "National" && (
              <div className="mt-2 div-popimg">
                <img src="/explore-tour-2.jpg" className="w-100" />

                <div className="opaci"></div>
                <div className="explore">
                  <h4>HOLIDAY TOUR</h4>
                  <div className="d-flex">
                    <p className="fw-bold ps-4" onClick={() =>
                        handleShow("Holiday Tour", ["/explore-tour-3.jpg","destination-3.jpg","/gallery-3.jpg","/packages-3.jpg"])
                      }>View all places</p>
                    <FaArrowRight className="ms-2 mt-1" />
                  </div>
                </div>
                <div className="link">
                  <FaLink />
                </div>
              </div>
            )}
            {activeButton === "National" && (
              <div className="mt-4 div-popimg">
                <img src="/explore-tour-5.jpg" className="w-100" />

                <div className="opaci"></div>
                <div className="explore">
                  <h4>FAMILY TOUR</h4>
                  <div className="d-flex">
                    <p className="fw-bold ps-4" onClick={() =>
                        handleShow("Family Tour", ["/explore-tour-4.jpg","destination-4.jpg","/gallery-4.jpg","/packages-4.jpg"])
                      }>View all places</p>
                    <FaArrowRight className="ms-2 mt-1" />
                  </div>
                </div>
                <div className="link">
                  <FaLink />
                </div>
              </div>
            )}
            {activeButton === "International" && (
              <div className="mt-4 div-popimg">
                <img src="/explore-tour-6.jpg" className="w-100" />

                <div className="opaci"></div>
                <div className="explore">
                  <h4 className="ps-5">SPAIN</h4>
                  <div className="d-flex">
                    <p className="fw-bold ps-4" onClick={handleShow}>View all places</p>
                    <FaArrowRight className="ms-2 mt-1" />
                  </div>
                </div>
                <div className="link">
                  <FaLink />
                </div>
              </div>
            )}
          </Col>
          <Col md="6" lg="4">
            {activeButton === "National" && (
              <div className="mt-2 div-popimg">
                <img src="/explore-tour-3.jpg" className="w-100" />

                <div className="opaci"></div>
                <div className="explore">
                  <h4 className="ps-4">ROAD TRIP</h4>
                  <div className="d-flex">
                    <p className="fw-bold ps-4" onClick={() =>
                        handleShow("Beach Tour", ["/explore-tour-6.jpg","destination-5.jpg","/gallery-8.jpg","/packages-2.jpg"])
                      }>View all places</p>
                    <FaArrowRight className="ms-2 mt-1" />
                  </div>
                </div>
                <div className="link">
                  <FaLink />
                </div>
              </div>
            )}
            {activeButton === "National" && (
              <div className="mt-4 div-popimg">
                <img src="/explore-tour-6.jpg" className="w-100" />

                <div className="opaci"></div>
                <div className="explore">
                  <h4 className="ps-2">BEACH TOUR</h4>
                  <div className="d-flex">
                    <p className="fw-bold ps-4" onClick={() =>
                        handleShow("Beach Tour", ["/explore-tour-5.jpg","destination-5.jpg","/gallery-5.jpg","/packages-1.jpg"])
                      }>
                      View all places
                    </p>
                    <FaArrowRight className="ms-2 mt-1" />
                  </div>
                </div>
                <div className="link">
                  <FaLink />
                </div>
                
              </div>
            )}
            {activeButton === "International" && (
              <div className="mt-4 div-popimg">
                <img src="/explore-tour-1.jpg" className="w-100" />

                <div className="opaci"></div>
                <div className="explore">
                  <h4 className="ps-5">JAPAN</h4>
                  <div className="d-flex">
                    <p className="fw-bold ps-4" onClick={handleShow}>View all places</p>
                    <FaArrowRight className="ms-2 mt-1" />
                  </div>
                </div>
                <div className="link">
                  <FaLink />
                </div>
              </div>
            )}
          </Col>
        </Row>
      </Container>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        className="bg-secondary bg-opacity-25"
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#13357b" }}>
            {selectedTour.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-secondary bg-opacity-25">
          <Row>
          {selectedTour.images.map((img, index) => (
            <img key={index} src={img} className="w-50 mb-3" alt={img} />
          ))}
          </Row>
        </Modal.Body>
        
      </Modal>

    </div>
  );
}

export default TheWorld;
