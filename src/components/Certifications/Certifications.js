import React from 'react';
import './Certifications.css';

// Individual Certification Card Component
const CertificationCard = ({ title, issuer, imageUrl }) => {
  return (
    <div className="certification-card">
      <h3 className="certification-title">{title}</h3>
      <p className="certification-issuer">Issued by: {issuer}</p>
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={title} 
          className="certification-image"
        />
      )}
    </div>
  );
};

// Main Certifications Component
const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "High Impact Presentations",
      issuer: "Infosys Springboard",
      imageUrl: "https://i.postimg.cc/BbPNBgvv/1-fb568c48-73b3-4a99-a4e2-0778e8189515.png"
    },
    {
      id: 2,
      title: "Developer Foundation",
      issuer: "CCBP 4.0 Academy & NXT WAVE",
      imageUrl: "https://i.postimg.cc/X78xcpjd/ZSMURKGNAH.png"
    },
    {
      id: 3,
      title: "Principles of Generative AI",
      issuer: "Infosys Springboard",
      imageUrl: "https://i.postimg.cc/2jLPwdMv/1-db9d0b8c-b9af-4db3-ba14-e35aa59e738f-1.png"
    },
    {
      id: 4,
      title: "Introduction to Databases",
      issuer: "CCBP 4.0 Academy & NXT WAVE",
      imageUrl: "https://i.postimg.cc/3xmVTKYw/MTIRJMKILT-2.png"
    },
    {
      id: 5,
      title: "Data Science",
      issuer: "Infosys Springboard",
      imageUrl: "https://i.postimg.cc/fRDpDGLj/1-57e9c976-bfda-48fc-b86d-2c3d203ad874.png"
    },
    {
      id: 6,
      title: "Own Responsive Website",
      issuer: "CCBP 4.0 Academy & NXT WAVE",
      imageUrl: "https://i.postimg.cc/B6QVHHD8/LAMKGMLIUF.png"
    },
    {
      id:7,
      title: "Microsoft Learn Student Ambassador",
      issuer: "Microsoft",
      imageUrl: "https://i.ibb.co/cSzdWxzF/Screenshot-2025-05-09-014139.png"
     

    }
  ];

  return (
    <section className="certifications-section" id="certifications">
      <div className="certifications-container">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert) => (
            <CertificationCard
              key={cert.id}
              title={cert.title}
              issuer={cert.issuer}
              imageUrl={cert.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;