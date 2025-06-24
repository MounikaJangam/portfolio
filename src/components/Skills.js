import React from 'react';

const skills = [
  'HTML5 & CSS3', 'JavaScript (ES6+)', 'React.js', 'React Native', 'TypeScript', 'Bootstrap', 'Material-UI',
  'Node.js', 'RESTful APIs', 'GraphQL', 'MySQL', 'MongoDB', 'Firebase',
  'Git & GitHub', 'VS Code', 'Postman',
  'Redux', 'React Query', 'Axios',
  'Responsive Design', 'Mobile Development', 'UI/UX Design', 'Agile/Scrum', 'Problem Solving', 'Team Collaboration'
];

const Skills = () => (
  <section id="skills">
    <h2 className="section-title">Technical Skills</h2>
    <div className="skills-tag-list">
      {skills.map((skill, idx) => (
        <span className="skill-tag" key={idx}>{skill}</span>
      ))}
    </div>
  </section>
);

export default Skills; 