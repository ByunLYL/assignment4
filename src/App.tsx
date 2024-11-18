import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Resources from './pages/Resources';
import Developer_setup from './pages/Developer_setup';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        {/* 导航栏 */}
        <nav style={styles.navbar}>
          <ul style={styles.navList}>
            <li style={styles.navItem}>
              <Link to="/" style={styles.link}>Home</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/projects" style={styles.link}>Project</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/skills" style={styles.link}>Skills</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/resources" style={styles.link}>Resources</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/developer_setup" style={styles.link}>Developer Setup</Link>
            </li>
          </ul>
        </nav>

        {/* 路由 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/developer_setup" element={<Developer_setup />} />
        </Routes>
      </div>
    </Router>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '10px 20px',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginRight: '20px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
  },
};

export default App;
