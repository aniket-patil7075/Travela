import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
function Destination() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [activeButton, setActiveButton] = useState("");
  const [show, setShow] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState({ title: "", images: [] });
  const navigate = useNavigate();

  const handleButtonClick = (destination) => {
    setActiveButton(destination);
  };

  const goBook = () => {
    navigate("/Booknow");
  };

  const handleClose = () => setShow(false);

  const handleShow = (title, images) => {
    setSelectedPlace({ title, images });
    setShow(true);
  };

  return (
    <div>
      <Container>
        <h4 className="colorBlue text-center pt-5 pb-2">
          ----- Destination -----
        </h4>
        <h1 className="text-center">Popular Destination</h1>
        <div className="d-flex justify-content-center py-5 d-flex flex-wrap ">
          <Button
            variant=""
            className={`destiBtn rounded-pill py-2 m-3${
              activeButton === "All" ? "active-btn" : ""
            }`}
            onClick={() => handleButtonClick("All")}
          >
            All
          </Button>

          <Button
            variant=""
            className={`destiBtn rounded-pill py-2 m-3 ${
              activeButton === "USA" ? "active-btn" : ""
            }`}
            onClick={() => handleButtonClick("USA")}
          >
            USA
          </Button>

          <Button
            variant=""
            className={`destiBtn rounded-pill py-2 m-3 ${
              activeButton === "Canada" ? "active-btn" : ""
            }`}
            onClick={() => handleButtonClick("Canada")}
          >
            Canada
          </Button>

          <Button
            variant=""
            className={`destiBtn rounded-pill py-2 m-3 ${
              activeButton === "Europe" ? "active-btn" : ""
            }`}
            onClick={() => handleButtonClick("Europe")}
          >
            Europe
          </Button>

          <Button
            variant=""
            className={`destiBtn rounded-pill py-2 m-3 ${
              activeButton === "China" ? "active-btn" : ""
            }`}
            onClick={() => handleButtonClick("China")}
          >
            China
          </Button>

          <Button
            variant=""
            className={`destiBtn rounded-pill py-2 m-3 ${
              activeButton === "Singapore" ? "active-btn" : ""
            }`}
            onClick={() => handleButtonClick("Singapore")}
          >
            Singapore
          </Button>
        </div>
        <Row>
          <Col lg="4">
            <div className="mt-2 div-popimg">
              <img src="/destination-1.jpg" className="  w-100" />
              <div className=" p-5 opaci"></div>
              <div
                className="plus rounded rounded-circle text-center mt-4 me-4"
                id="i" onClick={goBook}
              >
                <FaRegPlusSquare className=" fw-bold " />
              </div>
              <div className="info ps-5">
                <Button
                  variant="outline-primary"
                  id="discovernow"
                  className="rounded-pill fw-bold border border-light mb-2"
                  
                >
                  5 Photos
                </Button>
                <h5>New York City</h5>
                <div className="text-decoration-none " style={{cursor:"pointer"}} onClick={()=>handleShow("New York",["/explore-tour-1.jpg","/explore-tour-2.jpg","/explore-tour-3.jpg","/explore-tour-4.jpg","/explore-tour-5.jpg"])}>
                  View All City <FaArrowRight />
                </div>{" "}
              </div>
            </div>
            <div className="mt-2 div-popimg">
              <img src="/destination-7.jpg" className="w-100" />
              <div className=" p-5 opaci"></div>
              <div
                className="plus rounded rounded-circle text-center mt-4 me-4"
                id="i" onClick={goBook}
              >
                <FaRegPlusSquare className=" fw-bold " />
              </div>
              <div className="info ps-5">
                <Button
                  variant="outline-primary"
                  id="discovernow"
                  className="rounded-pill fw-bold border border-light mb-2"
                >
                  5 Photos
                </Button>
                <h5>Califorina</h5>
                <div className="text-decoration-none h-50" style={{cursor:"pointer"}} onClick={()=>handleShow("Califorina",["/gallery-1.jpg","/gallery-2.jpg","/gallery-3.jpg","/gallery-4.jpg","/gallery-5.jpg"])}>
                  View All City <FaArrowRight />
                </div>{" "}
              </div>
            </div>
            <div className="mt-2 div-popimg">
              <img src="/destination-4.jpg" className=" w-100" />
              <div className=" p-5 opaci"></div>
              <div
                className="plus rounded rounded-circle text-center mt-4 me-4"
                id="i" onClick={goBook}
              >
                <FaRegPlusSquare className=" fw-bold " />
              </div>
              <div className="info ps-5">
                <Button
                  variant="outline-primary"
                  id="discovernow"
                  className="rounded-pill fw-bold border border-light mb-2"
                >
                  5 Photos
                </Button>
                <h5>Italy</h5>
                <div className="text-decoration-none " style={{cursor:"pointer"}} onClick={()=>handleShow("Italy",["/gallery-6.jpg","/gallery-7.jpg","/gallery-8.jpg","/gallery-9.jpg","/gallery-10.jpg"])}>
                  View All City <FaArrowRight />
                </div>{" "}
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div className="mt-2 div-popimg">
              <img
                src="/destination-2.jpg"
                className="w-100"
                alt="Destination"
              />
              <div className=" p-5 opaci"></div>
              <div
                className="plus rounded rounded-circle text-center mt-4 me-4"
                id="i" onClick={goBook}
              >
                <FaRegPlusSquare className=" fw-bold " />
              </div>
              <div className="info ps-5">
                <Button
                  variant="outline-primary"
                  id="discovernow"
                  className="rounded-pill fw-bold border border-light mb-2"
                >
                  5 Photos
                </Button>
                <h5>Paris</h5>
                <div className="text-decoration-none " style={{cursor:"pointer"}} onClick={()=>handleShow("Paris",["/gallery-11.jpg","/gallery-12.jpg","/explore-tour-6.jpg","/gallery-4.jpg","/gallery-5.jpg"])}>
                  View All City <FaArrowRight />
                </div>{" "}
              </div>
            </div>
            <div className="mt-2 div-popimg">
              <img src="/destination-8.jpg" className=" w-100" />
              <div className=" p-5 opaci"></div>
              <div
                className="plus rounded rounded-circle text-center mt-4 me-4"
                id="i"  onClick={goBook}
              >
                <FaRegPlusSquare className=" fw-bold "/>
              </div>
              <div className="info ps-5">
                <Button
                  variant="outline-primary"
                  id="discovernow"
                  className="rounded-pill fw-bold border border-light mb-2"
                >
                  5 Photos
                </Button>
                <h5>Thailand</h5>
                <div className="text-decoration-none " style={{cursor:"pointer"}} onClick={()=>handleShow("Thailand",["/blog-1.jpg","/blog-2.jpg","/blog-3.jpg","/breadcrumb-bg.jpg","/gallery-6.jpg"])}>
                  View All City <FaArrowRight />
                </div>{" "}
              </div>
            </div>
            <div className="mt-2 div-popimg">
              <img src="/destination-5.jpg" className=" w-100" />
              <div className=" p-5 opaci"></div>
              <div
                className="plus rounded rounded-circle text-center mt-4 me-4"
                id="i" onClick={goBook}
              >
                <FaRegPlusSquare className=" fw-bold " />
              </div>
              <div className="info ps-5">
                <Button
                  variant="outline-primary"
                  id="discovernow"
                  className="rounded-pill fw-bold border border-light mb-2"
                >
                  5 Photos
                </Button>
                <h5>Tokyo</h5>
                <div className="text-decoration-none " style={{cursor:"pointer"}} onClick={()=>handleShow("Tokyo",["/packages-1.jpg","/packages-2.jpg","/packages-3.jpg","/packages-4.jpg","/gallery-6.jpg"])}>
                  View All City <FaArrowRight />
                </div>{" "}
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div className="mt-2 div-popimg">
              <img src="/destination-9.jpg" className=" w-100 dest-img" />
              <div className=" p-5 opaci"></div>
              <div
                className="plus rounded rounded-circle text-center mt-4 me-4"
                id="i" onClick={goBook}
              >
                <FaRegPlusSquare className=" fw-bold " />
              </div>
              <div className="info ps-5">
                <Button
                  variant="outline-primary"
                  id="discovernow"
                  className="rounded-pill fw-bold border border-light mb-2"
                >
                  5 Photos
                </Button>
                <h5>San francisco</h5>
                <div className="text-decoration-none " style={{cursor:"pointer"}} onClick={()=>handleShow("San francisco",["/gallery-11.jpg","/gallery-12.jpg","/explore-tour-6.jpg","/gallery-4.jpg","/gallery-5.jpg"])}>
                  View All City <FaArrowRight />
                </div>{" "}
              </div>
            </div>
            <div className="mt-2 div-popimg">
              <img src="/destination-6.jpg" className=" w-100" />
              <div className=" p-5 opaci"></div>
              <div
                className="plus rounded rounded-circle text-center mt-4 me-4"
                id="i" onClick={goBook}
              >
                <FaRegPlusSquare className=" fw-bold " />
              </div>
              <div className="info ps-5">
                <Button
                  variant="outline-primary"
                  id="discovernow"
                  className="rounded-pill fw-bold border border-light mb-2"
                >
                  5 Photos
                </Button>
                <h5>Los angelas</h5>
                <div className="text-decoration-none " style={{cursor:"pointer"}} onClick={()=>handleShow("Los angelas",["/destination-1.jpg","/destination-2.jpg","/explore-tour-3.jpg","/packages-4.jpg","/gallery-6.jpg"])}>
                  View All City <FaArrowRight />
                </div>{" "}
              </div>
            </div>
            <Modal size="lg" show={show} onHide={handleClose} className="bg-secondary bg-opacity-25">
            <Modal.Header closeButton>
              <Modal.Title style={{ color: "#13357b" }} className="">
                {selectedPlace.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-secondary bg-opacity-25">
              <Row>
                {selectedPlace.images.map((img, index) => (
                  <img src={img} key={index} className="w-50 selected my-2" alt={`image-${index}`} />
                ))}
              </Row>
            </Modal.Body>
            <Modal.Footer>
             
            </Modal.Footer>
          </Modal>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Destination;
