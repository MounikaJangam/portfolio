import React from 'react';

const projects = [
  {
    title: 'Mindly',
    role: 'Lead Frontend & Full Stack Developer @ Zelarsoft Private Limited',
    description: 'Mindly is a U.S.-based digital health initiative focused on enhancing communication between schools and hospitals, especially for children with psychological health conditions such as Autism. The platform empowers parents to collaborate effectively with specialized hospitals and schools for their child\'s mental well-being, offering real-time communication, file sharing, scheduling, and role-based access.',
    highlights: [
      'Developed responsive UI screens from Figma designs using ReactJS, React Native, CSS, Bootstrap, and Material-UI.',
      'Integrated Firebase (Authentication, Firestore, Storage, Cloud Functions) for real-time data and serverless backend.',
      'Implemented group and one-on-one chat, file upload, calendar sync, dashboards, and role-based access.',
      'Used React Query, Redux, and custom navigation for scalable, efficient data and smooth UX.'
    ],
    tech: ['ReactJS', 'React Native', 'Material-UI', 'Node.js', 'Firebase', 'Bootstrap', 'Google Calendar API', 'Microsoft Graph API', 'Recharts'],
    image: '/Mindly-Zelar.png',
    featured: true
  },
  {
    title: 'Review Deals',
    role: 'Full Stack Developer',
    description: 'A comprehensive e-commerce platform with user authentication, product management, shopping cart functionality, payment integration, and admin dashboard.',
    highlights: [
      'Built responsive frontend with React.js and Material-UI components.',
      'Implemented secure user authentication and authorization system.',
      'Integrated payment gateway (Stripe) for secure transactions.',
      'Developed RESTful APIs with Node.js and Express.js.',
      'Cart Management, Order Management, Product Management, Admin Dashboard'
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Material-UI', 'Stripe API', 'JWT'],
    image: null,
    featured: false
  }
];

const Projects = () => (
  <section id="projects">
    <h2 className="section-title">My Projects</h2>
    <div className="projects-grid">
      {projects.map((proj, idx) => (
        <div className={`project-card${proj.featured ? ' featured' : ''}`} key={idx}>
          {proj.image ? (
            <img src={proj.image} alt={proj.title + ' screenshot'} className="project-image" />
          ) : (
            <div className="project-header-alt">{proj.title}</div>
          )}
          <h3 className="project-title">{proj.title}</h3>
          <p className="project-role">{proj.role}</p>
          <p className="project-desc">{proj.description}</p>
          <ul className="project-highlights">
            {proj.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
          <div className="project-tech">
            {proj.tech.map((t, i) => (
              <span className="tech-tag" key={i}>{t}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;