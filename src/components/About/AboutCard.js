import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./AboutCard.css"; // Optional CSS file for custom styles

function AboutCard() {
  return (
    <Card className="quote-card-view shadow-lg border-0 rounded-lg">
      <Card.Body className="p-4">
        <blockquote className="blockquote mb-0" data-aos="fade-up">
          <p style={{ textAlign: "justify", fontSize: "1.1rem", color: "#333" }}>
            <span className="primary-header" style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
              Hello, I'm Rohith Sarikela!
            </span>
            <br />
            <span style={{ color: "#666" }}>
              A Data Science enthusiast, Full Stack Developer & Embedded Systems learner from Hyderabad, India.
            </span>
            <br />
            <br />
            With a strong foundation in Electronics and Communication Engineering, I thrive at the intersection of intelligent systems, clean web design, and data-driven problem solving. My journey spans multiple domains with a passion for building practical and impactful tech.
          </p>
          <ul style={{ listStyleType: "none", padding: "0", margin: "1rem 0" }}>
            <li className="about-activity my-2 d-flex align-items-center">
              <AiOutlineArrowRight className="icon" style={{ color: "#0d6efd", marginRight: "0.5rem" }} />
              <span>Full Stack Development with React.js & Node.js</span>
            </li>
            <li className="about-activity my-2 d-flex align-items-center">
              <AiOutlineArrowRight className="icon" style={{ color: "#0d6efd", marginRight: "0.5rem" }} />
              <span>Data Science & Machine Learning using Python</span>
            </li>
            <li className="about-activity my-2 d-flex align-items-center">
              <AiOutlineArrowRight className="icon" style={{ color: "#0d6efd", marginRight: "0.5rem" }} />
              <span>Predictive Modeling & Statistical Analysis</span>
            </li>
            <li className="about-activity my-2 d-flex align-items-center">
              <AiOutlineArrowRight className="icon" style={{ color: "#0d6efd", marginRight: "0.5rem" }} />
              <span>Embedded Systems & IoT Prototyping</span>
            </li>
            <li className="about-activity my-2 d-flex align-items-center">
              <AiOutlineArrowRight className="icon" style={{ color: "#0d6efd", marginRight: "0.5rem" }} />
              <span>Cross-functional Collaboration & Mentorship</span>
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
