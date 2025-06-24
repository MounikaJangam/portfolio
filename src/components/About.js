import React from 'react';

const About = () => (
  <section id="about" style={{textAlign: 'center', padding: '3rem 0'}}>
    <h1 style={{fontSize: '2.5rem', marginBottom: '0.5rem'}}>Mounika Jangam</h1>
    <h2 style={{fontWeight: 400, color: '#555', marginBottom: '1.5rem'}}>Software Engineer</h2>
    <p style={{maxWidth: 600, margin: '0 auto 2rem', fontSize: '1.2rem', color: '#333'}}>
      As a front-end developer with 3 years of experience, I specialize in building high-quality, responsive web applications. I am passionate about modern JavaScript frameworks, performance optimization, and delivering seamless user experiences. I am always eager to learn new technologies and take on challenging projects.
    </p>
    <div style={{display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1.5rem'}}>
      <a href="https://www.linkedin.com/in/jangam-mounika-bba0b3180" target="_blank" rel="noopener noreferrer" style={{color: '#0077b5', fontWeight: 'bold', fontSize: '1.1rem'}}>LinkedIn</a>
      <a href="https://github.com/MounikaJangam" target="_blank" rel="noopener noreferrer" style={{color: '#333', fontWeight: 'bold', fontSize: '1.1rem'}}>GitHub</a>
    </div>
    <div style={{color: '#666', fontSize: '1rem'}}>
      <span style={{marginRight: '1.5rem'}}><b>Phone:</b> +91 8247228263</span>
      <span><b>Email:</b> jangammounika60@gmail.com</span>
    </div>
  </section>
);

export default About; 