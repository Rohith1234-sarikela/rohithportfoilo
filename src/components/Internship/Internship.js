import React from "react";
import "./Internship.css";

const Internship = () => {
  return (
    <div className="internship-section">
      
      

      <h2 className="internship-title">Internships</h2>
      <img src="https://i.ibb.co/7xpcnM4Q/Screenshot-2025-04-19-153633.png" alt="Internship" className="internship-image" />
      <ul className="internship-list">
        <li className="internship-item">
          <h3>AI Intern, Microsoft SAP-AICTE Internship</h3>
          <p><strong>Duration:</strong> Nov 2024 - Jan 2025</p>
          <p><strong>Location:</strong> Remote</p>
          <p><strong>Responsibilities:</strong></p>
          <ul>
            <li>Examined localized shopping datasets (demographic, category, payment) to uncover consumer trends</li>
            <li>Cleaned and preprocessed raw data, improving quality and consistency for analysis</li>
            <li>Applied statistical methods and built charts using Python (Pandas, NumPy, Matplotlib, Seaborn)</li>
            <li>Created interactive dashboards to enable small businesses to optimize sales strategies</li>
          </ul>
          <p><strong>Technologies:</strong> Python, Pandas, NumPy, Matplotlib, Seaborn</p>
        </li>
      </ul>
    </div>
  );
};

export default Internship;