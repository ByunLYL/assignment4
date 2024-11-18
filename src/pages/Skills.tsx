import React from 'react';
import { CSSProperties } from 'react';
import Text from '../components/Text';
import Label from '../components/Label';
import Img from '../components/Img';
import Button from '../components/Button';

const Home: React.FC = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Welcome to My Portfolio</h1>
        <Text content="Exploring technology, creating solutions, and growing every day." />
      </header>



      {/* Skills */}
      <section style={styles.section}>
        <h1>Skills</h1>
        <p style={styles.paragraph}>Here are some of the technical skills I bring to the table:</p>
        <div style={styles.skillsGrid}>
          <div style={styles.skillCategory}>
            <h3>Languages/Frameworks</h3>
            <ul style={styles.skillList}>
              <li>JavaScript/TypeScript</li>
              <li>React/Next.js</li>
              <li>Node.js/Express</li>
            </ul>
          </div>
          <div style={styles.skillCategory}>
            <h3>Tools</h3>
            <ul style={styles.skillList}>
              <li>Git/GitHub</li>
              <li>Webpack</li>
              <li>Postman</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
};



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
  },
  section: {
    marginBottom: '40px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  paragraph: {
    margin: '10px 0',
  },
  skillsGrid: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
  },
  skillCategory: {
    flex: 1,
  },
  skillList: {
    listStyleType: 'circle',
    paddingLeft: '20px',
  },
  resourceContainer: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  resourceCard: {
    width: '200px',
    textAlign: 'center',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '15px',
  },
  resourceTitle: {
    margin: '10px 0',
  },
  setupGrid: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  setupItem: {
    flex: 1,
    minWidth: '250px',
    textAlign: 'center',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};

export default Home;
