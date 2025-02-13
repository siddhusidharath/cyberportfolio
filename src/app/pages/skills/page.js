"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './skills.css';

const skills = [
  "Penetration Testing - Metasploit, Burp Suite, Nmap",
  "Programming Languages - Python, PHP, JavaScript",
  "Operating Systems - Windows, Linux, System Hardening",
  "Cybersecurity Fundamentals - Encryption, Firewalls, IDS/IPS",
  "Network Scanning & Vulnerability Assessment - Nessus, Wireshark, Nmap",
  "Cyber Threat Intelligence (CTI) - TTP Analysis & Mitigation",
  "Firewall Vulnerability Analysis & Risk Assessment",
  "Incident Response - Real-time Detection & Mitigation",
  "Communication - Explaining Complex Concepts",
  "Data Analysis & Presentation - Security Reporting",
  "Design Thinking - Security Architecture & Problem Solving"
];

export const SkillsSection = () => {
  return (
    <main id="skills" className="py-5 text-light">
      <Container className="text-center">
        <h2 className="heading-dark mb-5">Core Skills & Technical Expertise</h2>
        <Row className="justify-content-center">
          {skills.map((skill, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <div className="skill-badge">{skill}</div>
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
};
