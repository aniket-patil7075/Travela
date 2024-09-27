import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from 'react-bootstrap/Card';
import { FaStar } from "react-icons/fa";

function AwesomePack() {
  const [activeButton, setActiveButton] = useState('');
  const [visibleIndex, setVisibleIndex] = useState(0);

  const cards = [
    {
      place:"Venice-Italy",
      days:"3 Days",
      person:"2 Person",
      src: "/packages-1.jpg",
      title: "Thailand Trip",
      text1: "HOTEL DEALS",
      text2: <><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></>,
      text3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque",
      updated1: "Read More",
      updated2: "Book Now",
    },
    {
      src: "/packages-2.jpg",
      title: "Venice - Italy",
      text1: "HOTEL DEALS",
      text2: <><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></>,
      text3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque",
      updated1: "Read More",
      updated2: "Book Now",
    },
    {
      src: "packages-3.jpg",
      title: "The New California",
      text1: "HOTEL DEALS",
      text2: <><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></>,
      text3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque",
      updated1: "Read More",
      updated2: "Book Now",
    },
    {
      src: "packages-4.jpg",
      title: "Discover Japan",
      text1: "HOTEL DEALS",
      text2: <><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></>,
      text3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque",
      updated1: "Read More",
      updated2: "Book Now",
    }
  ];

  const handleButtonClick = (direction) => {
    if (direction === 'LeftArrow' && visibleIndex > 0) {
      setVisibleIndex(visibleIndex - 1);
    } else if (direction === 'RightArrow' && visibleIndex < cards.length - 3) {
      setVisibleIndex(visibleIndex + 1);
    }
    setActiveButton(direction);
  };

  return (
    <div className='' style={{ marginTop: '120px' }}>
      <Container>
        <h4 className='colorBlue pt-5 pb-2 text-center'>----- PACKAGES -----</h4>
        <h1 className='text-center'>Awesome Packages</h1>
        <div className='d-flex justify-content-between py-5'>
          <Button
            variant=""
            className={`destiBtn rounded-pill py-3 mx-1 ${activeButton === 'LeftArrow' ? 'active-btn' : ''}`}
            onClick={() => handleButtonClick('LeftArrow')}
          >
            <FaArrowLeft />
          </Button>

          <Button
            variant=""
            className={`destiBtn rounded-pill py-3 mx-1 ${activeButton === 'RightArrow' ? 'active-btn' : ''}`}
            onClick={() => handleButtonClick('RightArrow')}
          >
            <FaArrowRight />
          </Button>
        </div>

        <div className="overflow-hidden">
          <div
            className="card-container"
            style={{
              display: 'flex',
              transition: 'transform 0.5s ease-in-out',
              transform: `translateX(-${visibleIndex * (100 / 3)}%)`,
            }}
          >
            {cards.map((card, index) => (
              <Card className="packCard mx-3 " key={index} >
                <div className=' card-img'>
                  <Card.Img variant="top" className='' src={card.src} />
                  <div className='explore1 d-flex'>
                    <p className='px-3'>{card.place} </p>
                    <p className='px-3'>{card.days} </p>
                    <p className='px-3'>{card.person} </p>
                  </div>
                  <div className='opaci1'></div>
                </div>

                <Card.Body>
                  <Card.Title className='my-0'>{card.title}</Card.Title>
                  <Card.Text className='my-0'>{card.text1}</Card.Text>
                  <Card.Text className='colorBlue'>{card.text2}</Card.Text>
                  <Card.Text>{card.text3}</Card.Text>
                </Card.Body>
                <Card.Footer className='' style={{ backgroundColor: "#13357B" }}>
                  <div className='d-flex justify-content-between py-1'>
                    <small className="fw-bold text-light">{card.updated1}</small>
                    <small className="fw-bold text-light">{card.updated2}</small>
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

export default AwesomePack;
