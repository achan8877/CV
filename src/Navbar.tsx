// src/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import portfolio from './assets/portfolio.png'; 
import { navLinks } from './constants'; 
import './App.css'
const Navbar: React.FC = () => {
  return (
    <nav className="sm:px-20 px-10 w-full flex items-center py-6 fixed top-0 z-40 bg-primary scrollable">
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <Link 
          to="/" 
          className="flex items-center gap-4" 
          onClick={() => window.scrollTo(0, 0)}
        >
          <img src={portfolio} alt="logo" className="w-15 h-12 object-contain" />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-12">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="text-secondary hover:text-blue text-[20px] font-medium cursor-pointer"
            >
              <Link to={`/${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
