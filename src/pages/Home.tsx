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

      {/* Basic Information */}
      <section style={styles.section}>
        <h1>Basic Information</h1>
        <p style={styles.paragraph}>
          Hi, I'm a passionate developer with experience in building dynamic and responsive web applications. I love exploring new technologies and solving real-world problems through code.
        </p>
      </section>

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

      {/* Resources */}
      <section style={styles.section}>
        <h1>Resources</h1>
        <div style={styles.resourceContainer}>
          {resources.map((resource, index) => (
            <div key={index} style={styles.resourceCard}>
              <Img src={resource.image} alt={resource.title} />
              <h3 style={styles.resourceTitle}>{resource.title}</h3>
              <p style={styles.paragraph}>{resource.description}</p>
              <Button text="Visit"/>
            </div>
          ))}
        </div>
      </section>

      {/* Developer Setup */}
      <section style={styles.section}>
        <h1>Developer Setup</h1>
        <div style={styles.setupGrid}>
          <div style={styles.setupItem}>
            <h3>VS Code Setup</h3>
            <p style={styles.paragraph}>
              My VS Code is configured with ESLint, Prettier, and custom themes for better productivity.
            </p>
          </div>
          <div style={styles.setupItem}>
            <h3>Terminal Setup</h3>
            <p style={styles.paragraph}>
              I use Oh My Zsh with plugins for Git and syntax highlighting.
            </p>
          </div>
          <div style={styles.setupItem}>
            <h3>Preferred Editor Font</h3>
            <p style={styles.paragraph}>
              Fira Code with ligatures enabled for clean and efficient coding.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

const resources = [
  {
    image: 'https://miro.medium.com/v2/resize:fit:1358/1*KmgHVtbY9uJEoT-_9T8Nvg.png',
    title: 'React Documentation',
    description: 'The official React docs for learning and reference.',
  },
  {
    image: 'https://static1.xdaimages.com/wordpress/wp-content/uploads/2022/03/moz_blog_header_MDN-Intro.jpg',
    title: 'MDN Web Docs',
    description: 'Comprehensive resources for web developers.',
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
