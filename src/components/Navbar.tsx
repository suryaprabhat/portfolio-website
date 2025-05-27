import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/achievements">Achievements</Link>
        <Link to="/skills">Skills</Link>
      </div>
    </nav>
  );
};

export default Navbar;
