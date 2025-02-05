"use client";
import React from 'react';
import './about.css';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

export const AboutSection = () => {
    return (
        <section id="about">
            <Container>
                <Row className="align-items-center">
                    {/* Left Side: Text Section */}
                    <Col md={7}>
                        <div className="text-box">
                            <h2>About Me</h2>
                            <p>
                                I’m <strong>Sidharath Sharma</strong>, Cybersecurity Master's graduate with a passion for
                                 hands-on security, skilled in penetration testing, threat intelligence, and network security 
                                 tools such as Metasploit, Burp Suite, and Nmap. I’m eager to contribute to a cybersecurity 
                                 analyst role where I can apply my skills in safeguarding IT infrastructures and implementing
                                  cutting-edge threat detection mechanisms. </p>
                        </div>
                    </Col>

                    {/* Right Side: Image Section */}
                    <Col md={5} className="image-container">
                        <div className="image-box">
                            <Image src="/images/author.jpg" alt="Sidharath Sharma" width={400} height={450} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
