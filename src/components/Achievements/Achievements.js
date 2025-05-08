import React from 'react';
import './Achievements.css'; // Ensure this path is correct

// AchievementCard Component
const AchievementCard = ({ title, description, imageUrl }) => {
  return (
    <div className="achievement-card">
      {imageUrl && <img src={imageUrl} alt={title} className="image-size" />}
      <h3 className="achievement-title">{title}</h3>
      <p className="achievement-description">{description}</p>
    </div>
  );
};

// Achievements Component
const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "First Prize in Agri-Tech Startup Ideas",
      description: "In recognition of innovative agricultural technology solutions, I was awarded the First Prize at the Inter-College Competition held at MREC. This achievement reflects my commitment to leveraging technology for sustainable agricultural practices."
    },
    {
      id: 2,
      title: "First Prize in Website Development",
      description: "I was honored with the First Prize for Website Development, awarded by Dr. M. Ashok at MRCE. This project showcased my skills in designing user-friendly interfaces and implementing responsive web design principles."
    },
    {
      id: 3,
      title: "Kho-Kho State Winner",
      description: "In 2020, I proudly represented my school and emerged as the Kho-Kho State Winner at the competition held in Wargal. This achievement highlights my teamwork, strategy, and dedication to sportsmanship."
    }
  ];

  // Separate image URLs
  const imageUrls = {
    1: "https://i.postimg.cc/hPrKqbrw/Whats-App-Image-2024-10-26-at-22-52-54-9770594c.jpg",
    2: "", // No image for this achievement
    3: ""  // No image for this achievement
  };

  return (
    <section className="achievements-section">
      <h2 className="section-title">Achievements</h2>
      <div className="achievements-container">
        {achievements.map(({ id, title, description }) => (
          <AchievementCard 
            key={id} 
            title={title} 
            description={description} 
            imageUrl={imageUrls[id] } // Access the image URL by ID
          />
        ))}
      </div>
    </section>
  );
};

export default Achievements;