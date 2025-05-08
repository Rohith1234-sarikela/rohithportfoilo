import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <div className="education-section">
      <h2 className="education-title">Education</h2>
      <ul className="education-list">
        <li className="education-item">
          <h3>Malla Reddy College of Engineering</h3>
          <p><strong>Degree:</strong> B. Tech in Electronics and Communication Engineering (ECE)</p>
          <p><strong>Location:</strong> Hyderabad</p>
          <p><strong>Year:</strong> 2021 - 2025</p>
        </li>
        <li className="education-item">
          <h3>Shree Gayathri Junior College</h3>
          <p><strong>Course:</strong> Intermediate, MPC</p>
          <p><strong>Location:</strong> Armoor</p>
          <p><strong>Score:</strong> 897/1000</p>
          <p><strong>Year:</strong> 2019 - 2021</p>
        </li>
        <li className="education-item">
          <h3>Naveen Vidyaniketan High School</h3>
          <p><strong>Course:</strong> Secondary School Education (SSE)</p>
          <p><strong>Location:</strong> Balkonda</p>
          <p><strong>CGPA:</strong> 9.8</p>
          <p><strong>Year:</strong> 2018 - 2019</p>
        </li>
      </ul>
    </div>
  );
};

export default Education;