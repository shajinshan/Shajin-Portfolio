import { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';

function Navbar({ onNavChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <button className="menu-toggle" onClick={toggleMenu}>☰</button>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a onClick={() => { onNavChange('home'); setIsOpen(false); }} className="active">Home</a>
        <a onClick={() => { onNavChange('experience'); setIsOpen(false); }}>Experience</a>
        <a onClick={() => { onNavChange('education'); setIsOpen(false); }}>Education</a>
      </div>
    </nav>
  );
}

export default Navbar;
