import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo"; // Import the Logo component
import "../styles/navbar.css"; // Import your CSS

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Slide down effect for the navbar on mount
  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      setTimeout(() => {
        navbar.classList.add("slide-down");
      }, 100);
    }
    setShowNavbar(true);
  }, []);

  return (
    <nav className={`navbar ${showNavbar ? 'slide-in-down' : ''}`}>
      <div className="navbar-logo-container">
        <Logo />
      </div>

      {/* Hamburger Menu Icon */}
      <div className="navbar-menu-icon md:hidden" onClick={toggleMenu}>
        <svg
          className="menu-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </div>

      {/* Navbar Links */}
      <div className={`navbar-links ${isOpen ? "block" : "hidden"} md:flex`}>
        <Link to="/" className="navbar-link" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link to="/about" className="navbar-link" onClick={() => setIsOpen(false)}>
          About us
        </Link>
        <Link to="/resourcesAndServices" className="navbar-link" onClick={() => setIsOpen(false)}>
          Resources and Services
        </Link>
        <Link to="/blog" className="navbar-link" onClick={() => setIsOpen(false)}>
          Blog
        </Link>
        <Link to="/contactUs" className="navbar-link" onClick={() => setIsOpen(false)}>
          Contact Us
        </Link>
        <a
  href="https://calendly.com/collegeadvisors2021/30min"
  className="navbar-button"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setIsOpen(false)}
>
  Book an Appointment
</a>
      </div>
    </nav>
  );
};

export default Navbar;