"use client";
import { useState } from "react";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import "./experience.css";

const experience = [
  {
    title: "Graduate Teaching Assistant",
    company: "Stephen F. Austin State University",
    duration: "Jan 2024 - Dec 2024",
    description: [
      "Assisted professors with compiling and marking test questions.",
      "Taught introductory HTML and CSS to students.",
      "Delivered lectures on fundamental cybersecurity concepts.",
    ],
  },
  {
    title: "Sr. Frontend Developer",
    company: "Hypotenuse Corporation Pvt.Ltd",
    duration: "Aug 2020 - Dec 2022",
    description: [
      "Developed user-centric websites optimizing load speed and design.",
      "Implemented new web technologies ensuring secure and efficient performance.",
      "Collaborated with cross-functional teams to deliver web solutions.",
    ],
  },
  {
    title: "Web Developer",
    company: "Digipanda Consulting Pvt.Ltd",
    duration: "Oct 2019 - July 2020",
    description: [
      "Built responsive layouts using HTML5 and CSS3.",
      "Enhanced site performance and implemented responsive designs.",
      "Validated code for quality and security, ensuring compatibility.",
    ],
  },
  {
    title: "Jr. Web Developer",
    company: "Vanser Technologies Ltd",
    duration: "Aug 2018 - Sept 2019",
    description: [
      "Applied SEO practices to enhance website visibility.",
      "Collaborated with team members to estimate time and resources for development.",
    ],
  },
];

const projects = [
  {
    name: "Windows 10 Firewall Bypassing Using Cyber Threat Intelligence Techniques",
    description:
      "This project involved assessing the security of the Windows 10 Firewall by using penetration testing techniques to identify potential vulnerabilities and bypass mechanisms.",
    tech: ["Nmap", "Metasploit", "Shodan", "pfSense"],
  },
  {
    name: "USB Data Theft Investigation",
    description:
      "In this forensic analysis project, I investigated unauthorized USB data transfers to determine the nature and scope of the data theft.",
    tech: ["Autopsy", "Kali Linux", "Endpoint Security"],
  },
  {
    name: "Military Database Management Systems",
    description:
      "Led a team to develop secure and scalable front-end and back-end solutions for a military database management system, preventing SQL injection attacks.",
    tech: ["PHP", "MySQLi", "SQL Injection Prevention"],
  },
  {
    name: "Chat Console System Using gRPC",
    description:
      "Developed a real-time, secure chat console system using Python and gRPC with encrypted messaging capabilities.",
    tech: ["Python", "gRPC", "End-to-End Security"],
  },
];

export const ExperienceAndProjectsSection = () => {
  const [key, setKey] = useState("experience");

  return (
    <main id="experience-projects" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Experience & Projects</h2>

        {/* Bootstrap Tabs */}
        <Tabs
          id="experience-projects-tabs"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3 custom-tabs"
        >
          {/* Experience Tab */}
          <Tab eventKey="experience" title="Experience">
            <Row>
              {experience.map((exp, index) => (
                <Col md={6} key={index} className="mb-4">
                  <div className="box p-4">
                    <h5>{exp.title} <span className="text-muted">({exp.company})</span></h5>
                    <p className="text-muted">{exp.duration}</p>
                    <ul>
                      {exp.description.map((desc, idx) => (
                        <li key={idx}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </Col>
              ))}
            </Row>
          </Tab>

          {/* Projects Tab */}
          <Tab eventKey="projects" title="Projects">
            <Row>
              {projects.map((project, index) => (
                <Col md={6} key={index} className="mb-4">
                  <div className="box p-4">
                    <h5>{project.name}</h5>
                    <p>{project.description}</p>
                    <strong>Technologies Used:</strong>
                    <ul>
                      {project.tech.map((tech, idx) => (
                        <li key={idx}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                </Col>
              ))}
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </main>
  );
};
