"use client";
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ContactForm } from './contactform'; 
import './footer.css';

export const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <footer>
      <Container>
        <Row className="align-items-center">
          <Col md={6} sm={12}>
            <p>© 2025 Sidharath Sharma. All Rights Reserved.</p>
          </Col>
          <Col md={6} sm={12} className="social-links">
            <a href="mailto:sidharathsharmainfo@gmail.com" className="btn-style">Email</a>
            <a href="https://www.linkedin.com/in/sidharath-sharma-b945a2156/" target="_blank" className="btn-style" rel="noopener noreferrer">LinkedIn</a>
            <Button variant="link" onClick={handleShow} className="btn-style">Contact</Button>
          </Col>
        </Row>
      </Container>

      {/* Use the ContactForm component here */}
      <ContactForm showModal={showModal} handleClose={handleClose} />
    </footer>
  );
};
