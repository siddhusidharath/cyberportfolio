"use client";
import React from "react";
import './education.css'; 
import { Container, Row, Col } from "react-bootstrap";

export const EducationCertifications = () => {
  return (
    <main id="education-certification" className="py-5 text-light">
      <Container>
        <h2 className="heading-dark">Education & Certifications</h2>
        <Row>
          {/* Education Section */}
          <Col md={6}>
            <h3 className="mb-3 section-title">Education</h3>
            <div className="edu-box p-4 mb-4">
              <h5>Stephen F. Austin State University, USA</h5>
              <p>Master's in Cyber Security | <strong>Graduated: Dec 2024</strong></p>
            </div>
            <div className="edu-box p-4">
              <h5>Kurukshetra University, India</h5>
              <p>Bachelor's in Electronics & Communication | <strong>Graduated: 2018</strong></p>
            </div>
          </Col>
          {/* Certifications Section */}
          <Col md={6}>
            <h3 className="mb-3 section-title">Certifications</h3>
            <div className="cert-box p-4">
              <h5>Mastercard Cybersecurity Virtual Experience Program</h5>
              <p><strong>Forage | March 2024</strong></p>
              <ul>
                <li>Completed a job simulation focusing on threat identification and security awareness.</li>
                <li>Developed training programs to mitigate phishing risks and enhance security posture.</li>
              </ul>
            </div>
          </Col>
        </Row>
        {/* Download Resume Button */}
        <div className="text-center mt-5">
          <a href="/pdf/Sidharath_Sharma_Cybersecurity_Resume.pdf" download className="btn btn-custom btn-lg">
            Download Resume
          </a>
        </div>
      </Container>
    </main>
  );
};