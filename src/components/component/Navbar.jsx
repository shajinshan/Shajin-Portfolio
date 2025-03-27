import { useState } from 'react';

import './css/Navbar.css';

function Navbar({ onNavChange, activePage }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <button className="menu-toggle" onClick={toggleMenu}>☰</button>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a 
          onClick={() => { onNavChange('home'); setIsOpen(false); }} 
          className={activePage === 'home' ? 'active' : ''}
        >
          Home
        </a>
        <a 
          onClick={() => { onNavChange('experience'); setIsOpen(false); }}
          className={activePage === 'experience' ? 'active' : ''}
        >
          Experience
        </a>
        <a 
          onClick={() => { onNavChange('education'); setIsOpen(false); }}
          className={activePage === 'education' ? 'active' : ''}
        >
          Education
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
