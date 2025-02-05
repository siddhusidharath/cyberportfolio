"use client";
import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { ContactForm } from './contactform'; 
import { FaBars } from "react-icons/fa"; // For mobile menu icon
import "./header.css"; // Ensure this file exists

export const Headernavbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [navbarBg, setNavbarBg] = useState("transparent"); // Default transparent

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarBg("#1a1a1a"); // Darken the navbar when scrolling
    } else {
      setNavbarBg("transparent"); // Make it transparent when at the top
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main id="header-scrolling">
      <Navbar
        expand="lg"
        style={{ backgroundColor: navbarBg, transition: "0.4s ease-in-out" }}
        className="navbar-custom fixed-top"
      >
        <Container fluid>
          <Navbar.Brand href="#home" className="text-white">
            Sidharath Sharma
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll">
            <FaBars className="text-white" size={24} />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0 text-white" navbarScroll>
              <Nav.Link href="#home" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="text-white">
                About
              </Nav.Link>
              <Nav.Link href="#skills" className="text-white">
                Skills
              </Nav.Link>
              <Nav.Link href="#experience-projects" className="text-white">
                Experience & Projects
              </Nav.Link>
              <Nav.Link href="#education-certification" className="text-white">
                Education & Certification
              </Nav.Link>
              <Nav.Link href="#blogs" className="text-white">
                Blogs
              </Nav.Link>
              <Nav.Link onClick={handleShow} className="text-white">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Contact Us Modal */}
      <ContactForm showModal={showModal} handleClose={handleClose} />
    </main>
  );
};
