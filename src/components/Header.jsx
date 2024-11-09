import React, { useEffect } from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigate = useNavigate();

  function signUp() {
    navigate("/registration");
  }
  function login() {
    navigate("/Login");
  }
  function bookNow(){
    navigate("/Booknow")
  }

  return (
    <div>
      <div className="blue container-fluid px-4 py-2 d-none d-lg-block">
        <span className="d-flex text-light">
          <div className="ps-4 icon">
            <FaTwitter
              className="header-icon border border-1 rounded rounded-circle p-2 me-2"
              style={{ width: "35px", height: "35px" }}
            />

            <FaFacebookF
              className="header-icon border border-1 rounded rounded-circle p-2 me-2"
              style={{ width: "35px", height: "35px" }}
            />

            <FaLinkedinIn
              className="header-icon border border-1 rounded rounded-circle p-2 me-2"
              style={{ width: "35px", height: "35px" }}
            />

            <FaInstagram
              className="header-icon border border-1 rounded rounded-circle p-2 me-2"
              style={{ width: "35px", height: "35px" }}
            />

            <FaYoutube
              className="header-icon border border-1 rounded rounded-circle p-2 me-2"
              style={{ width: "35px", height: "35px" }}
            />
          </div>

          {/* -------------------------------------------------------- */}

          <div style={{ cursor: "pointer" }} onClick={signUp} className="ps-4">
            <FaUser
              className="register py-2 px-2"
              style={{ width: "35px", height: "35px" }}
            />
            <span className="py-1 me-3">Register</span>
          </div>

          <div style={{ cursor: "pointer" }} onClick={login}>
            <FaArrowRightToBracket
              className="py-2 px-2"
              style={{ width: "40px", height: "35px" }}
            />
            <span className="py-1 me-3">Login</span>
          </div>

          <FaHome
            className="py-2 px-2"
            style={{ width: "40px", height: "35px" }}
          />
          <span className="py-1 me-1">My Profile</span>
          
        </span>
      </div>
      <div className="">
        <Navbar
          expand="lg "
          className="border-bottom-custom bg-transparent position-fixed w-100 z-index-10 mt-2 mt-sm-2 mt-md-2 mt-lg-5 shadow   bg-white rounded
"
          style={{ backdropFilter: "blur(1px)", py: "4" }}
        >
          <Container fluid>
            <h1 className="travela ps-2 ms-3 text-light">
              <FaLocationDot className="me-1" />
              Travela
            </h1>
            <Navbar.Toggle
              className="custom-toggle"
              aria-controls="navbarScroll"
            />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="custom-navbar navbar-light me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px", height: "100px" }}
                navbarScroll
              >
                <div className="blue1 py-3  px-2"  style={{ marginTop: "-3px" }}>
                  <Nav.Link as={Link} to="/" className="fw-bold py-4 text-light">
                    Home
                  </Nav.Link>
                </div>
                <div className="blue1 py-3 px-2" style={{ marginTop: "-3px" }}>
                  <Nav.Link as={Link} to="/About" className="fw-bold py-4 text-light">
                    About
                  </Nav.Link>
                </div>
                <div className="blue1 py-3 px-2" style={{ marginTop: "-3px" }}>
                  <Nav.Link as={Link}
                    to="/Services"
                    className="fw-bold py-4 text-light"
                  >
                    Services
                  </Nav.Link>
                </div>
                <div className="blue1 py-3 px-2" style={{ marginTop: "-3px" }}>
                  <Nav.Link as={Link}
                    to="/Packages"
                    className="fw-bold py-4 text-light"
                  >
                    Packages
                  </Nav.Link>
                </div>
                <div className="blue1 py-3 px-2" style={{ marginTop: "-3px" }}>
                  <Nav.Link as={Link} to="/Blog" className="fw-bold py-4 text-light">
                    Blog
                  </Nav.Link>
                </div>
                <div className="blue1 py-3 px-2" style={{ marginTop: "-3px" }}>
                  <NavDropdown
                    title={
                      <span id="pages" className="">
                        Pages<span className="custom-caret text-center"></span>
                      </span>
                    }
                    className="fw-bold py-3  text-light mb-5"
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item as={Link} to="/Desti">Destination</NavDropdown.Item>
                    <NavDropdown.Item  as={Link} to="/ExploreTour">
                      Explore Tour
                    </NavDropdown.Item>
                    <NavDropdown.Item  as={Link} to="/TravelBooking">
                      Travel Booking
                    </NavDropdown.Item>
                    <NavDropdown.Item  as={Link} to="/OurGallery">
                      Our Gallery
                    </NavDropdown.Item>
                    <NavDropdown.Item  as={Link} to="/TravelGuide">
                      Travel Guides
                    </NavDropdown.Item>
                    <NavDropdown.Item  as={Link} to="/Testi">
                      Testimonials
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
                <div className="blue1 py-3 px-2" style={{ marginTop: "-3px" }}>
                  <Nav.Link as={Link} to="/Contact" className="fw-bold py-4 text-light">
                    Contact
                  </Nav.Link>
                </div>
                <div
                  className="py-sm-4 py-lg-3 ps-md-2 px-3"
                  style={{ marginTop: "-3px" }}
                >
                  <Button
                    variant=""
                    id="discovernow"
                    className="fw-bold py-2 mt-3 rounded rounded-pill  me-4"
                    onClick={bookNow}
                  >
                    Book Now
                  </Button>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default Header;
