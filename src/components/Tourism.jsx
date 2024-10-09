import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

function Tourism() {
  const [activeButton, setActiveButton] = useState("All");

  const handleButtonClick = (destination) => {
    setActiveButton(destination);
  };
  return (
    <div style={{ marginTop: "140px" }}>
      <h4 className="colorBlue pt-5 pb-2 text-center">
        ----- OUR GALLERY -----
      </h4>
      <h1 className="text-center">Tourism & Travelling Gallery</h1>
      <p className="colorGray text-center w-75 py-4 m-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore
        nam, architecto doloremque velit explicabo? Voluptate sunt eveniet fuga
        eligendi! Expedita laudantium fugiat corrupti eum cum repellat.
      </p>
      <div className="d-flex justify-content-center py-5  flex-wrap  ">
        <Button
          variant=""
          className={`destiBtn rounded-pill py-2 m-3 ${
            activeButton === "All" ? "active-btn" : ""
          }`}
          onClick={() => handleButtonClick("All")}
        >
          All
        </Button>

        <Button
          variant=""
          className={`destiBtn rounded-pill py-2 m-3 ${
            activeButton === "World" ? "active-btn" : ""
          }`}
          onClick={() => handleButtonClick("World")}
        >
          World Tour
        </Button>

        <Button
          variant=""
          className={`destiBtn rounded-pill py-2 m-3 ${
            activeButton === "Ocean" ? "active-btn" : ""
          }`}
          onClick={() => handleButtonClick("Ocean")}
        >
          Ocean Tour
        </Button>

        <Button
          variant=""
          className={`destiBtn rounded-pill py-2 m-3 ${
            activeButton === "Summer" ? "active-btn" : ""
          }`}
          onClick={() => handleButtonClick("Summer")}
        >
          Summer Tour
        </Button>

        <Button
          variant=""
          className={`destiBtn rounded-pill py-2 m-3 ${
            activeButton === "Sport" ? "active-btn" : ""
          }`}
          onClick={() => handleButtonClick("Sport")}
        >
          Sport Tour
        </Button>
      </div>

      <Container fluid className="d-flex flex-wrap justify-content-center">
        <Row lg="12" className="px-2">
          {/* Column 1 */}
          <Col lg="2" md="6" className="p-1">
            {activeButton === "All" && (
              <div className=" div-touriimg h-50">
                <img
                  src="/gallery-1.jpg"
                  className="img-fluid touri-img h-100"
                  alt="Gallery"
                />
                <div className=" p-5 opaci"></div>

                <div
                  className="plus rounded rounded-circle text-center mt-4 me-4"
                  id="i"
                ></div>
                <div>
                  <FaPlus className="touri-plus mb-5" />
                </div>

                <div className="info text-center">
                  <h5>WORLD TOUR</h5>
                  <a href="#" className="text-decoration-none ">
                    View All Place <FaArrowRight />
                  </a>{" "}
                </div>
              </div>
            )}
            {activeButton === "All" && (
              <div className=" div-touriimg h-50">
                <img
                  src="/gallery-6.jpg"
                  className="img-fluid touri-img h-100"
                  alt="Gallery"
                />
                <div className=" p-5 opaci"></div>
                <div
                  className="plus rounded rounded-circle text-center mt-4 me-4"
                  id="i"
                ></div>
                <div>
                  <FaPlus className="touri-plus mb-5" />
                </div>

                <div className="info text-center">
                  <h5>WORLD TOUR</h5>
                  <a href="#" className="text-decoration-none ">
                    View All Place <FaArrowRight />
                  </a>{" "}
                </div>
              </div>
            )}
          </Col>

          {/* Column 2 */}
          <Col lg="3" md="6" className="p-1">
            {activeButton === "All" && (
              <div className=" div-touriimg h-50">
                <img
                  src="/gallery-2.jpg"
                  className="img-fluid touri-img h-100"
                  alt="Gallery"
                />
                <div className=" p-5 opaci"></div>
                <div
                  className="plus rounded rounded-circle text-center mt-4 me-4"
                  id="i"
                ></div>
                <div>
                  <FaPlus className="touri-plus mb-5" />
                </div>

                <div className="info text-center">
                  <h5>WORLD TOUR</h5>
                  <a href="#" className="text-decoration-none ">
                    View All Place <FaArrowRight />
                  </a>{" "}
                </div>
              </div>
            )}
            {activeButton === "All" && (
              <div className=" div-touriimg h-50">
                <img
                  src="/gallery-7.jpg"
                  className="img-fluid touri-img h-100"
                  alt="Gallery"
                />
                <div className=" p-5 opaci"></div>
                <div
                  className="plus rounded rounded-circle text-center mt-4 me-4"
                  id="i"
                ></div>{" "}
                <div>
                  <FaPlus className="touri-plus mb-5" />
                </div>
                <div className="info text-center">
                  <h5>WORLD TOUR</h5>
                  <a href="#" className="text-decoration-none ">
                    View All Place <FaArrowRight />
                  </a>{" "}
                </div>
              </div>
            )}
          </Col>
          {/* Column 3 */}
          <Col lg="2" md="6" className="p-1">
            {activeButton === "All" && (
              <div className=" div-touriimg h-50">
                <img
                  src="/gallery-3.jpg"
                  className="img-fluid touri-img h-100"
                  alt="Gallery"
                />
                <div className=" p-5 opaci"></div>
                <div
                  className="plus rounded rounded-circle text-center mt-4 me-4"
                  id="i"
                ></div>{" "}
                <div>
                  <FaPlus className="touri-plus mb-5" />
                </div>
                <div className="info text-center">
                  <h5>WORLD TOUR</h5>
                  <a href="#" className="text-decoration-none ">
                    View All Place <FaArrowRight />
                  </a>{" "}
                </div>
              </div>
            )}
            {activeButton === "All" && (
              <div className=" div-touriimg h-50">
                <img
                  src="/gallery-8.jpg"
                  className="img-fluid touri-img h-100"
                  alt="Gallery"
                />
                <div className=" p-5 opaci"></div>
                <div
                  className="plus rounded rounded-circle text-center mt-4 me-4"
                  id="i"
                ></div>{" "}
                <div>
                  <FaPlus className="touri-plus mb-5" />
                </div>
                <div className="info text-center">
                  <h5>WORLD TOUR</h5>
                  <a href="#" className="text-decoration-none ">
                    View All Place <FaArrowRight />
                  </a>{" "}
                </div>
              </div>
            )}
          </Col>
          {/* Column 4 */}
          <Col lg="3" md="6" className="p-1">
            {activeButton === "All" && (
              <div className=" div-touriimg h-50">
                <img
                  src="/gallery-4.jpg"
                  className="img-fluid touri-img h-100"
                  alt="Gallery"
                />
                <div className=" p-5 opaci"></div>
                <div
                  className="plus rounded rounded-circle text-center mt-4 me-4"
                  id="i"
                ></div>{" "}
                <div>
                  <FaPlus className="touri-plus mb-5" />
                </div>
                <div className="info text-center">
                  <h5>WORLD TOUR</h5>
                  <a href="#" className="text-decoration-none ">
                    View All Place <FaArrowRight />
                  </a>{" "}
                </div>
              </div>
            )}
            {activeButton === "All" && (
              <div className=" div-touriimg h-50">
                <img
                  src="/gallery-9.jpg"
                  className="img-fluid touri-img h-100"
                  alt="Gallery"
                />
                <div className=" p-5 opaci"></div>
                <div
                  className="plus rounded rounded-circle text-center mt-4 me-4"
                  id="i"
                ></div>{" "}
                <div>
                  <FaPlus className="touri-plus mb-5" />
                </div>
                <div className="info text-center">
                  <h5>WORLD TOUR</h5>
                  <a href="#" className="text-decoration-none ">
                    View All Place <FaArrowRight />
                  </a>{" "}
                </div>
              </div>
            )}
          </Col>
          {/* Column 5 */}
          <Col lg="2" className="p-1">
            {activeButton === "All" && (
              <div className=" div-touriimg h-50">
                <img
                  src="/gallery-5.jpg"
                  className="img-fluid touri-img h-100"
                  alt="Gallery"
                />
                <div className=" p-5 opaci"></div>
                <div
                  className="plus rounded rounded-circle text-center mt-4 me-4"
                  id="i"
                ></div>{" "}
                <div>
                  <FaPlus className="touri-plus mb-5" />
                </div>
                <div className="info text-center">
                  <h5>WORLD TOUR</h5>
                  <a href="#" className="text-decoration-none ">
                    View All Place <FaArrowRight />
                  </a>{" "}
                </div>
              </div>
            )}
            {activeButton === "All" && (
              <div className=" div-touriimg h-50">
                <img
                  src="/gallery-10.jpg"
                  className="img-fluid touri-img h-100"
                  alt="Gallery"
                />
                <div className=" p-5 opaci"></div>
                <div
                  className="plus rounded rounded-circle text-center mt-4 me-4"
                  id="i"
                ></div>{" "}
                <div>
                  <FaPlus className="touri-plus mb-5" />
                </div>
                <div className="info text-center">
                  <h5>WORLD TOUR</h5>
                  <a href="#" className="text-decoration-none ">
                    View All Place <FaArrowRight />
                  </a>{" "}
                </div>
              </div>
            )}
          </Col>
        </Row>
        <Row lg="12" className="my-3">
          <div className=" tour-gallery">
            {activeButton === "Ocean" && (
              <div className=" div-touriimg h-75 mx-3">
                <img
                  src="/gallery-2.jpg"
                  className="img-fluid touri-img h-100"
                  alt="Gallery"
                />
                <div className="opaci"></div>
                <div
                  className="plus rounded rounded-circle text-center mt-4 me-4"
                  id="i"
                ></div>
                <div>
                  <FaPlus className="touri-plus mb-5" />
                </div>

                <div className="info text-center">
                  <h5>WORLD TOUR</h5>
                  <a href="#" className="text-decoration-none ">
                    View All Place <FaArrowRight />
                  </a>{" "}
                </div>
              </div>
            )}
            {activeButton === "Ocean" && (
              <div className=" div-touriimg h-75 mx-3">
                <img
                  src="/gallery-9.jpg"
                  className="img-fluid touri-img h-100"
                  alt="Gallery"
                />
                <div className="opaci"></div>
                <div
                  className="plus rounded rounded-circle text-center mt-4 me-4"
                  id="i"
                ></div>
                <div>
                  <FaPlus className="touri-plus mb-5" />
                </div>

                <div className="info text-center">
                  <h5>WORLD TOUR</h5>
                  <a href="#" className="text-decoration-none ">
                    View All Place <FaArrowRight />
                  </a>{" "}
                </div>
              </div>
            )}
            {activeButton === "World" && (
              <div className=" div-touriimg h-75 mx-3">
                <img
                  src="/gallery-1.jpg"
                  className="img-fluid touri-img h-100"
                  alt="Gallery"
                />
                <div className="opaci"></div>
                <div
                  className="plus rounded rounded-circle text-center mt-4 me-4"
                  id="i"
                ></div>
                <div>
                  <FaPlus className="touri-plus mb-5" />
                </div>

                <div className="info text-center">
                  <h5>WORLD TOUR</h5>
                  <a href="#" className="text-decoration-none ">
                    View All Place <FaArrowRight />
                  </a>{" "}
                </div>
              </div>
            )}
            {activeButton === "World" && (
              <div className=" div-touriimg h-75 mx-3">
                <img
                  src="/gallery-3.jpg"
                  className="img-fluid touri-img h-100"
                  alt="Gallery"
                />
                <div className="opaci"></div>
                <div
                  className="plus rounded rounded-circle text-center mt-4 me-4"
                  id="i"
                ></div>
                <div>
                  <FaPlus className="touri-plus mb-5" />
                </div>

                <div className="info text-center">
                  <h5>WORLD TOUR</h5>
                  <a href="#" className="text-decoration-none ">
                    View All Place <FaArrowRight />
                  </a>{" "}
                </div>
              </div>
            )}
            {activeButton === "Summer" && (
              <div className=" div-touriimg h-75 mx-3">
                <img
                  src="/gallery-5.jpg"
                  className="img-fluid touri-img h-100"
                  alt="Gallery"
                />
                <div className="opaci"></div>
                <div
                  className="plus rounded rounded-circle text-center mt-4 me-4"
                  id="i"
                ></div>
                <div>
                  <FaPlus className="touri-plus mb-5" />
                </div>

                <div className="info text-center">
                  <h5>WORLD TOUR</h5>
                  <a href="#" className="text-decoration-none ">
                    View All Place <FaArrowRight />
                  </a>{" "}
                </div>
              </div>
            )}
            {activeButton === "Summer" && (
              <div className=" div-touriimg h-75 mx-3">
                <img
                  src="/gallery-6.jpg"
                  className="img-fluid touri-img h-100"
                  alt="Gallery"
                />
                <div className="opaci"></div>
                <div
                  className="plus rounded rounded-circle text-center mt-4 me-4"
                  id="i"
                ></div>
                <div>
                  <FaPlus className="touri-plus mb-5" />
                </div>

                <div className="info text-center">
                  <h5>WORLD TOUR</h5>
                  <a href="#" className="text-decoration-none ">
                    View All Place <FaArrowRight />
                  </a>{" "}
                </div>
              </div>
            )}
            {activeButton === "Summer" && (
              <div className=" div-touriimg h-75 mx-3">
                <img
                  src="/gallery-7.jpg"
                  className="img-fluid touri-img h-100"
                  alt="Gallery"
                />
                <div className="opaci"></div>
                <div
                  className="plus rounded rounded-circle text-center mt-4 me-4"
                  id="i"
                ></div>
                <div>
                  <FaPlus className="touri-plus mb-5" />
                </div>

                <div className="info text-center">
                  <h5>WORLD TOUR</h5>
                  <a href="#" className="text-decoration-none ">
                    View All Place <FaArrowRight />
                  </a>{" "}
                </div>
              </div>
            )}
            {activeButton === "Sport" && (
              <div className=" div-touriimg h-75 mx-3">
                <img
                  src="/gallery-9.jpg"
                  className="img-fluid touri-img h-100"
                  alt="Gallery"
                />
                <div className="opaci"></div>
                <div
                  className="plus rounded rounded-circle text-center mt-4 me-4"
                  id="i"
                ></div>
                <div>
                  <FaPlus className="touri-plus mb-5" />
                </div>

                <div className="info text-center">
                  <h5>WORLD TOUR</h5>
                  <a href="#" className="text-decoration-none ">
                    View All Place <FaArrowRight />
                  </a>{" "}
                </div>
              </div>
            )}
            {activeButton === "Sport" && (
              <div className=" div-touriimg h-75 mx-3">
                <img
                  src="/gallery-8.jpg"
                  className="img-fluid touri-img h-100"
                  alt="Gallery"
                />
                <div className="opaci"></div>
                <div
                  className="plus rounded rounded-circle text-center mt-4 me-4"
                  id="i"
                ></div>
                <div>
                  <FaPlus className="touri-plus mb-5" />
                </div>

                <div className="info text-center">
                  <h5>WORLD TOUR</h5>
                  <a href="#" className="text-decoration-none ">
                    View All Place <FaArrowRight />
                  </a>{" "}
                </div>
              </div>
            )}
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Tourism;
