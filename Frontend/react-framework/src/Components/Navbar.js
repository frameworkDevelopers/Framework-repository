// Navbar.js
import React, { useState } from 'react';

const Navbar = ({ brand, links }) => {
  const [expanded, setExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <nav className='my-4'  style={{ backgroundColor: 'lightgray', padding: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>{brand}</div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <button onClick={handleNavbarToggle}>Toggle</button>
          <div style={{ display: expanded ? 'flex' : 'none', flexDirection: 'column', alignItems: 'flex-end' }}>
            {links.map((link, index) => (
              <a key={index} href={link.href} style={{ padding: '5px' }}>
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
