import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function AwesomePack() {
  const [activeButton, setActiveButton] = useState('');
  const [visibleIndex, setVisibleIndex] = useState(0);

  const cards = [
    {
      title: "Card 1",
      text: "This is card 1 with supporting text.",
      updated: "Last updated 3 mins ago",
    },
    {
      title: "Card 2",
      text: "This is card 2 with supporting text.",
      updated: "Last updated 5 mins ago",
    },
    {
      title: "Card 3",
      text: "This is card 3 with supporting text.",
      updated: "Last updated 10 mins ago",
    },
    {
      title: "Card 4",
      text: "This is card 4 with supporting text.",
      updated: "Last updated 15 mins ago",
    },
    {
      title: "Card 5",
      text: "This is card 5 with supporting text.",
      updated: "Last updated 20 mins ago",
    },
  ];

  const handleButtonClick = (direction) => {
    if (direction === 'LeftArrow' && visibleIndex > 0) {
      setVisibleIndex(visibleIndex - 1);
    } else if (direction === 'RightArrow' && visibleIndex + 3 < cards.length) {
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

        <div className=''>
        <div className='d-flex'>
          {cards.slice(visibleIndex, visibleIndex + 3).map((card, index) => (
            <Card className='packCard' key={index}>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">{card.updated}</small>
              </Card.Footer>
            </Card>
          ))}
        </div>

        </div>
      </Container>
    </div>
  )
}

export default AwesomePack
