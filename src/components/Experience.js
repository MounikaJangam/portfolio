import React from 'react';

const experiences = [
  {
    role: 'Bachelor of Technology',
    company: 'Computer Science & Engineering',
    location: 'Geethanjali College of Engineering and Technology',
    period: 'Completed in 2021',
    logo: '🎓',
    highlights: [
      'Graduated with a degree in Computer Science & Engineering.'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'Zelarsoft Private Limited',
    location: 'Hyderabad',
    period: 'Oct 2022 – Present',
    logo: '/zelar.jpeg',
    highlights: [
      'Front-end development using HTML, CSS, JavaScript, ReactJS, React Native, and Material UI.',
      'Proficient in React.js with a solid understanding of its core features and functionalities.',
      'Developed reusable React components utilizing ES6 syntax for better code efficiency and readability.',
      'Managed the React component lifecycle for efficient DOM manipulation and event handling.',
      'Utilized Redux for global state management and React Router for SPA navigation.',
      'Built responsive websites with CSS Media Queries and Material UI.',
      'Developed mobile apps using React Native for both iOS and Android.',
      'Implemented React Navigation for seamless navigation in React Native apps.',
      'Designed UI in Adobe XD, converted CSS to SASS, and worked with SPFx for SharePoint.'
    ]
  },
  {
    role: 'Intern',
    company: 'Fixity Technologies',
    location: 'Hyderabad',
    period: 'June 2022 – Sept 2022',
    logo: '/fixity.png',
    highlights: [
      'Trained as Full Stack Java Developer.',
      'Implemented basic functionalities of applications like Product Management, Cart Management, Order Management.',
      'Developed login access for Admin and User.'
    ]
  }
];

const Experience = () => (
  <section id="experience">
    <h2 className="section-title">Experience</h2>
    <div className="timeline">
      {experiences.map((exp, idx) => (
        <div className="timeline-row" key={idx}>
          <div className="timeline-dot" />
          <div className="timeline-card">
            <div className="timeline-card-header">
              {exp.logo.endsWith('.png') || exp.logo.endsWith('.jpeg') ? (
                <img src={exp.logo} alt={exp.company + ' logo'} className="timeline-logo" />
              ) : (
                <span className="timeline-emoji-logo" role="img" aria-label="Education">{exp.logo}</span>
              )}
              <div>
                <h3 className="timeline-role">{exp.role}</h3>
                <p className="timeline-company"><b>{exp.company}</b> | {exp.location}</p>
                <p className="timeline-period">{exp.period}</p>
              </div>
            </div>
            <ul className="timeline-highlights">
              {exp.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      <div className="timeline-line" />
    </div>
  </section>
);

export default Experience; 