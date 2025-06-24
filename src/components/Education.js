import React from 'react';

const Education = () => (
  <section id="education" style={{padding: '3rem 0', background: '#f7f9fa'}}>
    <h2 style={{textAlign: 'center', marginBottom: '2rem'}}>Education</h2>
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div style={{background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', maxWidth: 700, padding: '2rem', margin: '0 1rem', textAlign: 'center'}}>
        <div style={{background: '#f8f9fa', padding: '1.5rem', borderRadius: 8, border: '1px solid #e9ecef'}}>
          <h3 style={{color: '#003366', marginBottom: '1rem'}}>Bachelor of Technology</h3>
          <p style={{fontWeight: 500, color: '#555', marginBottom: '0.5rem'}}>Completed in 2021</p>
          <p style={{color: '#666', marginBottom: '0.5rem'}}>Computer Science & Engineering</p>
        </div>
      </div>
    </div>
  </section>
);

export default Education; 