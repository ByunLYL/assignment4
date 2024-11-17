import React from 'react';
import { CSSProperties } from 'react';
import Card from '../components/Card';

const Projects: React.FC = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>My Projects</h1>
        <p>Explore some of the work I've done in web development, e-commerce, and database.</p>
      </header>

      <section style={styles.section}>
        <div style={styles.projectsContainer}>
          {projects.map((project, index) => (
            <div key={index} style={styles.card}>
              <Card
                title={project.title}
                content={project.content}
                text={project.text}
                additionalInfo={{
                  image: project.image,
                  link: project.link,
                  techList: project.techList,
                }}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const projects = [
  {
    title: 'Ecommerce Project',
    content: 'A responsive web application built using React.',
    text: 'View Details',
    image: '/images/project_A.jpg',
    link: 'https://github.com/ByunLYL/Project2',
    techList: ['Rails', 'SCSS', 'Ruby'],
  },
  {
    title: 'Intro to Rails Project',
    content: 'An e-commerce platform developed with Node.js.',
    text: 'View Details',
    image: '/images/project_B.png',
    link: 'https://github.com/ByunLYL/Project1',
    techList: ['Rails', 'MySQL'],
  },
  {
    title: 'UI Component Library',
    content: 'A machine learning tool for data analysis.',
    text: 'View Details',
    image: '/images/project_C.jpg',
    link: 'https://github.com/ByunLYL/assignment13',
    techList: ['Python', 'TensorFlow', 'Docker'],
  },
];

const styles: { [key: string]: CSSProperties } = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    lineHeight: '1.6',
    backgroundColor: '#f9f9f9',
    color: '#333',
  },
  header: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '8px',
    marginBottom: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  section: {
    marginBottom: '40px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  projectsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  },
  card: {
    width: '300px',
    textAlign: 'center',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '15px',
    transition: 'transform 0.3s ease',
  },
  cardHover: {
    transform: 'scale(1.05)',
  },
};

export default Projects;
