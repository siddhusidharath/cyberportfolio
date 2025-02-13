'use client'; // Ensure this component is client-side
import React, { useState, useEffect } from 'react';
import './contactform.css'; // Adjust the path as per your project structure
import { Modal, Button, Form } from 'react-bootstrap';
import emailjs from 'emailjs-com'; // Import EmailJS

export const ContactForm = ({ showModal, handleClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [captchaVerified, setCaptchaVerified] = useState(false); // reCAPTCHA state
  const [captchaQuestion, setCaptchaQuestion] = useState(''); // Store the captcha question
  const [captchaAnswer, setCaptchaAnswer] = useState(null); // Store the captcha answer
  const [userAnswer, setUserAnswer] = useState(''); // Store user's answer

  // Function to generate random math CAPTCHA question
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
    const num2 = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
    const operationType = Math.floor(Math.random() * 4); // 0 - addition, 1 - subtraction, 2 - multiplication, 3 - division

    let question = '';
    let answer = 0;

    switch (operationType) {
      case 0: // Addition
        question = `${num1} + ${num2} = ?`;
        answer = num1 + num2;
        break;
      case 1: // Subtraction
        question = `${num1} - ${num2} = ?`;
        answer = num1 - num2;
        break;
      case 2: // Multiplication
        question = `${num1} * ${num2} = ?`;
        answer = num1 * num2;
        break;
      case 3: // Division
        // Make sure the division is clean (no floating point numbers)
        question = `${num1 * num2} / ${num2} = ?`;
        answer = num1; // Since num1 * num2 / num2 = num1
        break;
      default:
        break;
    }

    setCaptchaAnswer(answer); // Set the correct answer
    setCaptchaQuestion(question); // Set the CAPTCHA question
  };

  useEffect(() => {
    generateCaptcha(); // Generate CAPTCHA when the component mounts or after submission
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAnswerChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if user's answer matches the captcha answer
    if (parseInt(userAnswer) !== captchaAnswer) {
      setStatus('Incorrect CAPTCHA answer.');
      generateCaptcha(); // Generate a new CAPTCHA question after error
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
        generateCaptcha(); // Generate a new CAPTCHA after successful message
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setStatus('Error sending message. Please try again.');
        generateCaptcha(); // Generate a new CAPTCHA after error
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

          {/* Math CAPTCHA */}
          <Form.Group controlId="captchaQuestion">
            <Form.Label>{captchaQuestion}</Form.Label>
            <Form.Control
              type="number"
              value={userAnswer}
              onChange={handleAnswerChange}
              placeholder="Enter answer"
              required
              className="form-control-custom"
            />
          </Form.Group>

          <p className="status-message">{status}</p>
          <div className="button-group">
            <Button variant="secondary" onClick={handleClose} className="close-button">
              Close
            </Button>
            <Button variant="primary" type="submit" className="send-button">
              Send Message
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
