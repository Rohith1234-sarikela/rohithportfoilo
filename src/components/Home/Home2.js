import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }} data-aos="fade-right">
              <span className="primary-header">ABOUT</span> ME
            </h1>
            <p className="home-about-body" data-aos="fade-up">
              <br />
              I'm a <i className="primary-header">B.Tech Electronics and Communication Engineering student</i>{" "}
              with a strong foundation in <i>IoT, Embedded Systems, and Full Stack Development</i>, currently expanding into the field of{" "}
              <i className="primary-header">Data Science</i>.
              <br />
              <br />
              I specialize in developing functional web applications using{" "}
              <i className="primary-header">React.js</i> and <i className="primary-header">Node.js</i>, and I’m proficient in{" "}
              <i>Python and C++</i> for system-level programming and data-driven solutions.
              <br />
              <br />
              My interest lies in merging intelligent software with interactive systems. I’ve worked on projects involving{" "}
              <i>predictive modeling, natural language processing, and interactive dashboards</i> using tools like{" "}
              <i>Scikit-learn, Pandas, and Seaborn</i>.
              <br />
              <br />
              I am driven by curiosity and continuously grow through innovative projects, industry internships, and{" "}
              <i className="primary-header">technical challenges</i> that integrate embedded systems, full stack development, and data science.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
            <img
  data-aos="fade-left"
  src="https://i.ibb.co/ZpF2qBv6/passportsize.jpg"
  className="img-fluid"
  alt="avatar"
/>

            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 data-aos="fade-right">
              <span className="primary-header">CONNECT</span> WITH ME
            </h1>
            <p data-aos="fade-left">Feel free to connect with me</p>
            <ul className="home-about-social-links" data-aos="fade-up">
              <li className="social-icons">
                <a
                  href="https://github.com/Rohith1234-sarikela"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/RohithSarikela"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:rohithsarikela9542@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="email"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rohithsarikela/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
