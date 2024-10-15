import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import Card from 'react-bootstrap/Card';
import {useNavigate} from 'react-router-dom'

function AwesomePack() {
  const [activeButton, setActiveButton] = useState('');
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const navigat = useNavigate('')

  const cards = [
    {
      place: "Thailand",
      days: "3 Days",
      person: "2 Person",
      src: "/packages-1.jpg",
      title: "Thailand Trip",
      text1: "HOTEL DEALS",
      text2: <><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></>,
      text3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque",
      updated1: "Read More",
      updated2: "Book Now",
    },
    {
      place: "Venice-Italy",
      days: "3 Days",
      person: "2 Person",
      src: "/packages-2.jpg",
      title: "Venice - Italy",
      text1: "HOTEL DEALS",
      text2: <><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></>,
      text3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque",
      updated1: "Read More",
      updated2: "Book Now",
    },
    {
      place: "California",
      days: "2 Days",
      person: "4 Person",
      src: "/packages-3.jpg",
      title: "The New California",
      text1: "HOTEL DEALS",
      text2: <><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></>,
      text3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque",
      updated1: "Read More",
      updated2: "Book Now",
    },
    {
      place: "Japan",
      days: "3 Days",
      person: "2 Person",
      src: "/packages-4.jpg",
      title: "Discover Japan",
      text1: "HOTEL DEALS",
      text2: <><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></>,
      text3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempore nam, architecto doloremque",
      updated1: "Read More",
      updated2: "Book Now",
    }
  ];

  // Clone the first 3 cards to make the infinite loop effect
  const extendedCards = [...cards, ...cards.slice(0, 3)];

  const handleButtonClick = (direction) => {
    if (isTransitioning) {
      if (direction === 'LeftArrow') {
        setVisibleIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : cards.length - 1));
      } else if (direction === 'RightArrow') {
        setVisibleIndex(prevIndex => prevIndex + 1);
      }
    }
    setActiveButton(direction);
  };

  // Automatically move the carousel after every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex(prevIndex => prevIndex + 1);
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
              transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
              transform: `translateX(-${visibleIndex * (100 / 3)}%)`,
            }}
          >
            {extendedCards.map((card, index) => (
              <Card className="packCard mx-3 " key={index} >
                <div className=' card-img'>
                  <Card.Img variant="top" className='' src={card.src} />
                  <div className='explore1 d-flex bg-secondary bg-opacity-50'>
                    <p className='px-3 text-light py-1 '>{card.place} </p>
                    <p className='days px-3 text-light py-1 '>{card.days} </p>
                    <p className='px-3 text-light py-1 '>{card.person} </p>
                  </div>
                  <div className='opaci1'></div>
                </div>

                <Card.Body className='bg-success bg-opacity-10'>
                  <Card.Title className='my-0'>{card.title}</Card.Title>
                  <Card.Text className='my-0'>{card.text1}</Card.Text>
                  <Card.Text className='colorBlue'>{card.text2}</Card.Text>
                  <Card.Text>{card.text3}</Card.Text>
                </Card.Body>
                <Card.Footer className='' style={{ backgroundColor: "#13357B" }}>
                  <div className='d-flex justify-content-between py-1'>
                    <small className="fw-bold text-light" onClick={()=>navigat('Packages')} style={{cursor:"pointer"}}>{card.updated1}</small>
                    <small className="fw-bold text-light" onClick={()=>navigat('Booknow')} style={{cursor:"pointer"}}>{card.updated2}</small>
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
