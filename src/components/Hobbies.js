import React from 'react';

const Hobbies = () => (
  <section id="hobbies" style={{padding: '3rem 0', background: '#f7f9fa'}}>
    <h2 style={{textAlign: 'center', marginBottom: '2rem'}}>Hobbies</h2>
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div style={{background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', maxWidth: 900, padding: '2rem', margin: '0 1rem', textAlign: 'center'}}>
        <div style={{display: 'flex', flexDirection: 'row', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
          <div style={{background: '#f8f9fa', padding: '1rem', borderRadius: 8, border: '1px solid #e9ecef', minWidth: '150px', flex: '1'}}>
            <h4 style={{color: '#003366', marginBottom: '0.5rem'}}>🎨 Drawing</h4>
            <p style={{color: '#666', fontSize: '0.9rem'}}>Creative expression through art</p>
          </div>
          <div style={{background: '#f8f9fa', padding: '1rem', borderRadius: 8, border: '1px solid #e9ecef', minWidth: '150px', flex: '1'}}>
            <h4 style={{color: '#003366', marginBottom: '0.5rem'}}>👨‍🍳 Cooking</h4>
            <p style={{color: '#666', fontSize: '0.9rem'}}>Exploring culinary creativity</p>
          </div>
          <div style={{background: '#f8f9fa', padding: '1rem', borderRadius: 8, border: '1px solid #e9ecef', minWidth: '150px', flex: '1'}}>
            <h4 style={{color: '#003366', marginBottom: '0.5rem'}}>📚 Reading</h4>
            <p style={{color: '#666', fontSize: '0.9rem'}}>Expanding knowledge through books</p>
          </div>
          <div style={{background: '#f8f9fa', padding: '1rem', borderRadius: 8, border: '1px solid #e9ecef', minWidth: '150px', flex: '1'}}>
            <h4 style={{color: '#003366', marginBottom: '0.5rem'}}>🌱 Gardening</h4>
            <p style={{color: '#666', fontSize: '0.9rem'}}>Connecting with nature</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hobbies; 