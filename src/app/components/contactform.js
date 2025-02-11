'use client'; // Ensure this component is client-side
import './contactform.css'; // Adjust the path as per your project structure

import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import emailjs from 'emailjs-com'; // Import EmailJS
import ReCAPTCHA from 'react-google-recaptcha'; // Import reCAPTCHA

export const ContactForm = ({ showModal, handleClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [captchaVerified, setCaptchaVerified] = useState(false); // reCAPTCHA state

  // reCAPTCHA handler
  const handleCaptchaChange = (value) => {
    if (value) {
      setCaptchaVerified(true);
    } else {
      setCaptchaVerified(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaVerified) {
      setStatus('Please complete the CAPTCHA before submitting.');
      return;
    }

    setStatus('Message Sending...');

    // EmailJS send method
    emailjs
      .sendForm('service_fay7rfe', 'template_cofkw91', e.target, 's795dRsiW3OnP6irD')
      .then((response) => {
        console.log('Email successfully sent!', response);
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form
        setCaptchaVerified(false); // Reset CAPTCHA
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setStatus('Error sending message. Please try again.');
      });
  };

  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Header closeButton className="modal-header-custom">
        <Modal.Title>Contact Us</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-custom">
        <Form onSubmit={handleSubmit} className="contact-form">
          <Form.Group controlId="formName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              required
              className="form-control-custom"
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
              className="form-control-custom"
            />
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={3}
              placeholder="Your message"
              required
              className="form-control-custom"
            />
          </Form.Group>

          {/* reCAPTCHA */}
          <ReCAPTCHA
            sitekey="6LcnYNMqAAAAAE9u_JvQUH1UjD1smxmidqGfqjss"  // Your reCAPTCHA sitekey here
            onChange={handleCaptchaChange}
          />

          <p className="status-message">{status}</p>
          <div className="button-group">
            <Button variant="secondary" onClick={handleClose} className="close-button">
              Close
            </Button>
            <Button variant="primary" type="submit" className="send-button" disabled={!captchaVerified}>
              Send Message
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
