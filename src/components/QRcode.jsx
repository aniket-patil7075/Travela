import React, { useState, useEffect } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const generateRandomString = () => {
    return Math.random().toString(36).substring(2, 15);
  }
function QRcode() {
    const [qrValue, setQRValue] = useState("");
  const [timeLeft, setTimeLeft] = useState(120); // 120 seconds countdown

  useEffect(() => {
    // Function to generate a new QR code value
    const generateQRValue = () => {
      const newValue = `QR-${Date.now()}`;
      setQRValue(newValue);
      setTimeLeft(120); // Reset the countdown
    };

    // Generate the initial QR code
    generateQRValue();

    // Set interval to update QR code every 2 minutes (120000 ms)
    const qrInterval = setInterval(generateQRValue, 120000);

    // Set interval for countdown timer
    const countdownInterval = setInterval(() => {
      setTimeLeft((prevTimeLeft) => (prevTimeLeft > 0 ? prevTimeLeft - 1 : 0));
    }, 1000);

    // Cleanup intervals on component unmount
    return () => {
      clearInterval(qrInterval);
      clearInterval(countdownInterval);
    };
  }, []);

  // Format time as MM:SS
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };
  return (
    <div style={{ textAlign: 'center' }}>
    {/* <QRCode value={qrValue} size={256} className='mt-5' />
    <div style={{ marginTop: '20px' }}>
      <button onClick={() => setQrValue(generateRandomString())}>
        Generate New QR Code
      </button>
    </div> */}
    <Row>
    <Col>
    <div className='border border-secondary border-opacity-25'>
    <QRCodeCanvas value={qrValue} size={200} className='w-50 h-50 m-3'/>
    </div>
    </Col>
    <Col>
    <p>Scan the QR using any UPI app on your phone
    </p>
    <p className=''>{`QR Code will update in: ${formatTime(timeLeft)}`}</p>
    </Col>
    </Row>
  </div>
  )
}

export default QRcode