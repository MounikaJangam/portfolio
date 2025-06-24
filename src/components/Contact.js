import React from 'react';

const Contact = () => (
  <section id="contact">
    <h2 className="section-title">Contact</h2>
    <p className="contact-desc">Feel free to reach out to me via email or connect on LinkedIn/GitHub!</p>
    <div className="contact-links">
      <a href="mailto:jangammounika60@gmail.com" className="contact-icon-link" aria-label="Email">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="#d44638"/><path d="M6 8.5L12 13L18 8.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="6" y="8" width="12" height="8" rx="2" stroke="#fff" strokeWidth="1.5"/></svg>
        <span>Email</span>
      </a>
      <a href="https://www.linkedin.com/in/jangam-mounika-bba0b3180" target="_blank" rel="noopener noreferrer" className="contact-icon-link" aria-label="LinkedIn">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="#0077b5"/><path d="M7.1 9.5H4.9V19H7.1V9.5ZM6 8.3C6.7 8.3 7.2 7.8 7.2 7.1C7.2 6.4 6.7 5.9 6 5.9C5.3 5.9 4.8 6.4 4.8 7.1C4.8 7.8 5.3 8.3 6 8.3ZM19.1 14.2C19.1 11.7 17.7 10.5 15.9 10.5C14.8 10.5 14.2 11.1 13.9 11.6V10.7H11.7C11.7 11.4 11.7 19 11.7 19H13.9V14.4C13.9 13.2 14.2 12.3 15.2 12.3C16.1 12.3 16.3 13 16.3 14.5V19H18.5V14.2H19.1Z" fill="white"/></svg>
        <span>LinkedIn</span>
      </a>
      <a href="https://github.com/MounikaJangam" target="_blank" rel="noopener noreferrer" className="contact-icon-link" aria-label="GitHub">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="#222"/><path d="M12 2C6.48 2 2 6.58 2 12.26C2 16.62 4.87 20.26 8.84 21.5C9.34 21.59 9.52 21.3 9.52 21.05C9.52 20.82 9.51 20.18 9.51 19.39C7 19.91 6.48 18.36 6.48 18.36C6.04 17.23 5.42 16.95 5.42 16.95C4.5 16.32 5.49 16.34 5.49 16.34C6.5 16.42 7.01 17.47 7.01 17.47C7.91 19.09 9.41 18.63 10.02 18.38C10.11 17.67 10.39 17.19 10.7 16.94C8.78 16.7 6.76 15.97 6.76 12.97C6.76 12.13 7.06 11.45 7.56 10.91C7.47 10.66 7.2 9.77 7.65 8.58C7.65 8.58 8.29 8.32 9.51 9.1C10.11 8.93 10.75 8.85 11.39 8.85C12.03 8.85 12.67 8.93 13.27 9.1C14.49 8.32 15.13 8.58 15.13 8.58C15.58 9.77 15.31 10.66 15.22 10.91C15.72 11.45 16.02 12.13 16.02 12.97C16.02 15.98 14 16.7 12.08 16.94C12.48 17.27 12.84 17.91 12.84 18.87C12.84 20.18 12.83 20.97 12.83 21.05C12.83 21.3 13.01 21.6 13.51 21.5C17.48 20.26 20.35 16.62 20.35 12.26C20.35 6.58 15.87 2 12 2Z" fill="white"/></svg>
        <span>GitHub</span>
      </a>
    </div>
  </section>
);

export default Contact; 