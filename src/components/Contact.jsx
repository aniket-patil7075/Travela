import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { RiMailOpenFill } from "react-icons/ri";

function Contact() {
  return (
    <div className='bg-body-tertiary '>
      <Container>
        <h4 className="colorBlue pt-5 pb-2 text-center">
          ----- CONTACT US -----
        </h4>
        <h1 className="text-center mt-1 " >Contact for Any Query</h1>
       <div>
        
        <Row className='ms-2 pb-5'>
          <Col lg="4" className='bg-white'>
          <div className=' text-center div-contact pt-2'>
              <FaLocationDot className='ico'/>
              <p className='text-center pt-4'>123 ranking Street,</p>
              <p className='text-center'>New York, USA</p>
            
              <FaPhoneAlt className='ico'/>
              <h3 className='pp pt-2'>Mobile</h3>
              <p className='text-center'>+012 345 67890</p>

              <p className='text-center'>+012 345 67890</p>
            
            
            <RiMailOpenFill className='ico'/>
            <h3 className='pp pt-2'>Email</h3>
            <p className='text-center '>nfo@example.com</p>
            <p className='text-center'>info@example.com</p>
            
          </div>
          </Col>

          <Col lg="8">
            <h4>Send us a message</h4>
            <p>The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done.<a href='#' className='text-decoration-none' style={{color:"#13357B"}}> Download Now.</a></p>

            <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Control type="email" placeholder="Your Name" className='p-3 ' style={{border:"none"}}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Control type="password" placeholder="Your Email" className='p-3 ' style={{border:"none"}}/>
        </Form.Group>
      </Row>

     
      <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
      <Form.Control type="text" placeholder="subject" className='p-3 ' style={{border:"none"}}/>     
       </Form.Group>

      
      <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={3} placeholder='Message' className='pb-5 'style={{border:"none"}}/>
      </Form.Group>

     

      <Button variant="" className=' fw-bold me-5 px-5 py-3   w-100' id='discovernow'>Discover Now</Button> 
    </Form>
          </Col>
        </Row>
       </div>
        
        
      </Container>
    </div>
  )
}

export default Contact