import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>CARECONNECT</h4>
          <p>Your trusted healthcare partner providing quality medical services and support.</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Services</h4>
          <ul className="footer-links">
            <li><a href="/appointments">Appointments</a></li>
            <li><a href="/emergency">Emergency Care</a></li>
            <li><a href="/healthstats">Health Statistics</a></li>
            <li><a href="/chat">Online Consultation</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Info</h4>
          <ul className="footer-links">
            <li>📞 +1 (555) 123-4567</li>
            <li>✉️ info@careconnect.com</li>
            <li>📍 123 Healthcare St, Medical City</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} CARECONNECT. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
