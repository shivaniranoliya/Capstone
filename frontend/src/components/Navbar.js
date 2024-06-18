import React, { useEffect, useRef, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../stylesheet/Navbar.css';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const dropdownRef = useRef(null);
  const navRef = useRef(null);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setDropdownOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const getInitial = (name) => {
    return name ? name.charAt(0).toUpperCase() : '';
  };

  return (
    <div className="nav" ref={navRef}>
      <div className="nav-content">
        <h1 className="brand">
          <img src="./logo.png" alt="Logo" />
        </h1>
        <div className="links nav-items">
          <a href="/">Home</a>
          {!user ? (
            <a href="/login">Register</a>
          ) : (
            <div className="user-menu">
              <div className="avatar" onClick={toggleDropdown}>
                {getInitial(user.name)}
              </div>
              {dropdownOpen && (
                <div className="dropdown" ref={dropdownRef}>
                  <a href="/profile">Profile</a>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
