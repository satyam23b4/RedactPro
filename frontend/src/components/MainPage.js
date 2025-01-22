import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';

const MainPage = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleRedaction = (type) => {
    navigate(`/upload/${type}`);
    setShowPopup(false); // This will close the popup after navigation
  };

  const handleOverlayClick = () => {
    setShowPopup(false); // Close the popup when clicking the overlay
  };

  return (
    <div className="main-container">
      <header className="navbar">
        <h1 className="navbar-title">Redact<span>AI</span></h1>
        <nav>
          <a href="#features" className="nav-link">Features</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h2 className="hero-title">Empowering Information Security with <span>AI-Powered Redaction</span></h2>
          <p className="hero-subtitle">Secure, Comprehensive Data Redaction</p>
          <button className="try-button" onClick={() => setShowPopup(true)}>Try It Now</button>
        </div>
        <div className="parallax-background"></div>
      </section>

      <section id="features" className="features-section">
        <h3 className="section-title">What We Redact</h3>
        <ul className="feature-list">
          <li><strong>Metadata:</strong> Removes hidden data like creation dates and authors.</li>
          <li><strong>Facial Data:</strong> Blurs or masks faces to ensure privacy in images.</li>
          <li><strong>File Text:</strong> Masks sensitive keywords, names, and addresses.</li>
          <li><strong>Audio Redaction:</strong> Replaces sensitive speech with noise for privacy.</li>
        </ul>
      </section>

      <section id="about" className="about-section">
        <h3 className="section-title">Data Security First</h3>
        <p className="section-description">
          RedactAI operates locally or within your private network, ensuring no data is stored or accessible externally.
        </p>
      </section>

      <footer className="footer">
        <p>&copy; 2024 RedactAI - All Rights Reserved | Your Privacy, Secured.</p>
      </footer>

      {showPopup && (
        <div className="popup-overlay" onClick={handleOverlayClick}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h3>Select Redaction Type</h3>
            <button className="popup-button" onClick={() => handleRedaction('metadata')}>Metadata Redaction</button>
            <button className="popup-button" onClick={() => handleRedaction('face')}>Face Redaction</button>
            <button className="popup-button" onClick={() => handleRedaction('file_text')}>File Text Redaction</button>
            <button className="popup-button" onClick={() => handleRedaction('audio')}>Audio Redaction</button>
            <span className="popup-close" onClick={() => setShowPopup(false)}>✕</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;
