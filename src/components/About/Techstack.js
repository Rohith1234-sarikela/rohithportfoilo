import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiHtml5,
  SiCss3,
  SiMysql,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiFlask,
  SiScikitlearn,
  SiJupyter,
  SiVisualstudiocode,
} from "react-icons/si";
import { FaChartBar, FaBrain, FaCode, FaChartLine, FaTasks, FaUsers,  FaMicrophone, FaFilePowerpoint } from "react-icons/fa";

function Techstack() {
  return (
    <>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>SKILLS</h2>
      
      <h3 style={{ textAlign: "center", margin: "20px 0" }}>Languages & Tools</h3>
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <DiPython title="Python" />
          <p className="paragraph">Python</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMysql title="SQL" />
          <p className="paragraph">SQL</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 title="JavaScript" />
          <p className="paragraph">JavaScript</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiGit title="Git" />
          <p className="paragraph">Git</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiJupyter title="Jupyter Notebook" />
          <p className="paragraph">Jupyter Notebook</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode title="VS Code" />
          <p className="paragraph">VS Code</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaCode title="Google Colab" />
          <p className="paragraph">Google Colab</p>
        </Col>
      </Row>

      <h3 style={{ textAlign: "center", margin: "20px 0" }}>Frameworks & Libraries</h3>
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiPandas title="Pandas" />
          <p className="paragraph">Pandas</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiNumpy title="NumPy" />
          <p className="paragraph">NumPy</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaCode title="SciPy" />
          <p className="paragraph">SciPy</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaChartBar title="Matplotlib" />
          <p className="paragraph">Matplotlib</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaChartBar title="Seaborn" />
          <p className="paragraph">Seaborn</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiScikitlearn title="Scikit-learn" />
          <p className="paragraph">Scikit-learn</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiTensorflow title="TensorFlow" />
          <p className="paragraph">TensorFlow</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaBrain title="Keras" />
          <p className="paragraph">Keras</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiFlask title="Flask" />
          <p className="paragraph">Flask</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiReact title="React.js" />
          <p className="paragraph">React.js</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiHtml5 title="HTML" />
          <p className="paragraph">HTML</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiCss3 title="CSS" />
          <p className="paragraph">CSS</p>
        </Col>
      </Row>

      <h3 style={{ textAlign: "center", margin: "20px 0" }}>Analytics & ML</h3>
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <FaBrain title="Predictive Modeling" />
          <p className="paragraph">Predictive Modeling</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaCode title="Feature Engineering" />
          <p className="paragraph">Feature Engineering</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaChartLine title="Model Evaluation" />
          <p className="paragraph">Model Evaluation</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaChartBar title="Statistical Analysis" />
          <p className="paragraph">Statistical Analysis</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaChartBar title="Data Visualization" />
          <p className="paragraph">Data Visualization</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaTasks title="Data Cleaning" />
          <p className="paragraph">Data Cleaning</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaBrain title="Deep Learning" />
          <p className="paragraph">Deep Learning</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaBrain title="Natural Language Processing" />
          <p className="paragraph">NLP</p>
        </Col>
      </Row>

      <h3 style={{ textAlign: "center", margin: "20px 0" }}>Soft Skills</h3>
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <FaUsers title="Leadership and Team Management" />
          <p className="paragraph">Leadership</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaTasks title="Project Coordination and Mentorship" />
          <p className="paragraph">Project Coordination</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaMicrophone title="Presentation and Public Speaking" />
          <p className="paragraph">Public Speaking</p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaFilePowerpoint title="PowerPoint and Visual Communication" />
          <p className="paragraph">Visual Communication</p>
        </Col>
      </Row>
    </>
  );
}

export default Techstack;