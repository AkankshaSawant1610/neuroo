import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogOut, Leaf } from 'lucide-react';
import './styles/layout.css';

const Navbar = () => {
  const location = useLocation();
  
  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Explore More', path: '/explore' },
    { label: 'Assessments', path: '/assessments' },
    { label: 'Blogs', path: '/blog' },
    { label: 'Games', path: '/games' },
  ];

  return (
    <nav className="navbar-container">
      <div className="navbar-inner">
        {/* Logo Area */}
        <Link to="/" className="navbar-logo">
          <div className="logo-box">
            <Leaf size={20} fill="white" />
          </div>
          <span>NeuroBloom</span>
        </Link>

        {/* Navigation Links */}
        <div className="navbar-links">
          {menuItems.map((item) => (
            <Link 
              key={item.label} 
              to={item.path} 
              className={`navbar-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Logout */}
        <div className="navbar-auth">
          <button className="navbar-logout">
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;