import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import {useNavigate} from 'react-router-dom'

function PopularBlog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [activeButton, setActiveButton] = useState("");
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const navigate = useNavigate();

  const cards = [
    {
      place: "28 Jan 2023",
      days: "1.7K",
      person: "1K",
      src: "/blog-1.jpg",
      title: "Adventures Trip",
      text1: "Posted By: Royal Hamblin",
      text3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque",
    },
    {
      place: "21 Oct 2020",
      days: "2.1K",
      person: "1K",
      src: "/gallery-11.jpg",
      title: "Beach Trip",
      text1: "Posted By: Jack Paris",
      text3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque",
    },
    {
      place: "1 Jan 2024",
      days: "1K",
      person: "500",
      src: "blog-3.jpg",
      title: "Adventure Trip",
      text1: "Posted By: Martin",
      text3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque",
    },
    {
      place: "15 sep 2024",
      days: "2K",
      person: "1.3K",
      src: "blog-2.jpg",
      title: "Family Trip",
      text1: "Posted By: John Abraham",
      text3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque",
    },
  ];

  const extendedCards = [...cards, ...cards.slice(0, 3)];

  const handleButtonClick = (direction) => {
    if (isTransitioning) {
      if (direction === "LeftArrow") {
        setVisibleIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : cards.length - 1
        );
      } else if (direction === "RightArrow") {
        setVisibleIndex((prevIndex) => prevIndex + 1);
      }
    }
    setActiveButton(direction);
  };

  // Automatically move the carousel after every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => prevIndex + 1);
    }, 3000); // Change the duration as per your requirement (in milliseconds)

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  // Check when to reset the position to create an infinite loop effect
  useEffect(() => {
    if (visibleIndex === extendedCards.length - 3) {
      setTimeout(() => {
        setIsTransitioning(false);
        setVisibleIndex(0); // Reset to the first set of cards
      }, 500); // Time it to match the CSS transition duration

      // Restore the transition effect after resetting
      setTimeout(() => {
        setIsTransitioning(true);
      }, 600);
    }
  }, [visibleIndex, extendedCards.length]);
  return (
    <div className="" style={{ marginTop: "120px" }}>
      <Container>
        <h4 className="colorBlue pt-5 pb-2 text-center">
          ----- OUR BLOGS -----
        </h4>
        <h1 className="text-center">Popular Travel Blog</h1>
        <p className="text-center mx-5 px-5 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          deserunt tenetur sapiente atque. Magni non explicabo beatae sit, vel
          reiciendis consectetur numquam id similique sunt error obcaecati
          ducimus officia maiores.
        </p>
        <div className="d-flex justify-content-between py-5">
          <Button
            variant=""
            className={`destiBtn rounded-pill py-3 mx-1 ${
              activeButton === "LeftArrow" ? "active-btn" : ""
            }`}
            onClick={() => handleButtonClick("LeftArrow")}
          >
            <FaArrowLeft />
          </Button>

          <Button
            variant=""
            className={`destiBtn rounded-pill py-3 mx-1 ${
              activeButton === "RightArrow" ? "active-btn" : ""
            }`}
            onClick={() => handleButtonClick("RightArrow")}
          >
            <FaArrowRight />
          </Button>
        </div>

        <div className="overflow-hidden">
          <div
            className="card-container"
            style={{
              display: "flex",
              transition: isTransitioning
                ? "transform 0.5s ease-in-out"
                : "none",
              transform: `translateX(-${visibleIndex * (100 / 3)}%)`,
            }}
          >
            {extendedCards.map((card, index) => (
              <Card className="packCard mx-3 " key={index}>
                <div className=" card-img">
                  <Card.Img variant="top" className="" src={card.src} />
                  <div className="explore1 d-flex bg-secondary bg-opacity-50">
                    <p className="px-3 text-light py-1 ">{card.place} </p>
                    <p className="days px-3 text-light py-1 ">{card.days} </p>
                    <p className="px-3 text-light py-1 ">{card.person} </p>
                  </div>
                  <div className="opaci1"></div>
                </div>

                <Card.Body className="">
                  <Card.Text className="my-0">{card.text1}</Card.Text>
                  <Card.Title className="my-3">{card.title}</Card.Title>
                  <Card.Text className="colorBlue">{card.text2}</Card.Text>
                  <Card.Text>{card.text3}</Card.Text>
                </Card.Body>
                <Card.Footer
                  className="BlogCardFooter"
                >
                  <div className="mt-2">
                    <Button
                      variant="outline-primary"
                      className="position-absolute rounded rounded-pill px-4 fw-bold"
                      id="button-addon2" 
                      onClick={()=>navigate('/Blog')}
                    >
                      Read More
                    </Button>
                  </div>
                </Card.Footer>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default PopularBlog;
