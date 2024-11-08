import React, { useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function MeetGuide() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const guide = [
    {
      src: "/guide-1.jpg",
      name: "Richie Rich",
      designation: "Historical Travel Guide",
    },
    {
      src: "/guide-2.jpg",
      name: "Henry luthan",
      designation: "Luxury Travel Guide",
    },
    {
      src: "/guide-3.jpg",
      name: "Herry potter",
      designation: "Adventure Travel Guide",
    },
    {
      src: "/guide-4.jpg",
      name: "Donald Mercy",
      designation: "Wildlife Travel Guide",
    },
  ];

  return (
    <div className="" style={{ marginTop: "120px" }}>
      <Container>
        <h4 className="colorBlue pt-5 pb-2 text-center">
          ----- TRAVEL GUIDE -----
        </h4>
        <h1 className="text-center">Meet Our Guide</h1>
        <div className="meetGuide d-flex flex-wrap my-5">
          {guide.map((guide, index) => (
            <div className="guideCard mx-2">
              <Card className="" key={index}>
                <div className="guideImg">
                  <Card.Img variant="top" className="" src={guide.src} />
                  <div className="div-GuideSocial rounded rounded-pill w-75 text-center">
                    <FaTwitter
                      className="GuideSocial border border-1 rounded rounded-circle p-2 me-2"
                      style={{ width: "35px", height: "35px" }}
                    />

                    <FaFacebookF
                      className="GuideSocial border border-1 rounded rounded-circle p-2 me-2"
                      style={{ width: "35px", height: "35px" }}
                    />

                    <FaLinkedinIn
                      className="GuideSocial border border-1 rounded rounded-circle p-2 me-2"
                      style={{ width: "35px", height: "35px" }}
                    />

                    <FaInstagram
                      className="GuideSocial border border-1 rounded rounded-circle p-2 me-2"
                      style={{ width: "35px", height: "35px" }}
                    />
                  </div>
                </div>

                <Card.Body className="guideBody ">
                  <Card.Title className="guideText fw-bold gtext">{guide.name}</Card.Title>
                  <Card.Text className="guideText  gtext1">
                    {guide.designation}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default MeetGuide;