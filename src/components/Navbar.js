import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from './assets/person-logo.png';
import './styles/Navbar.css'

const Links = [
  { path: '/', component: 'Books' },
  { path: '/category', component: 'Category' },
];

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navigation">
       <h1>Bookstore CMS</h1>
      <button type="button" className="menu" onClick={toggleMenu}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </button>
      <ul className={`primary-nav ${menuOpen ? 'render' : ''}`}>
        <li>
          <button type="button" className="close" onClick={toggleMenu}>&times;</button>
        </li>
        {Links.map(link => {
          const isActive = location.pathname === link.path;

          return (
            <li key={link.path}>
              <NavLink to={link.path} className={isActive ? 'active' : ''}>
                {link.component}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
