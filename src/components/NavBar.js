import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo"; // Import the Logo component
import "../styles/navbar.css"; // Import your CSS

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the open state
  };

  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      setTimeout(() => {
        navbar.classList.add("slide-down"); // Add the slide-down class on mount
      }, 100); // Delay slightly to ensure smooth entry
    }
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo-container">
        <Logo /> {/* Use the Logo component here */}
      </div>

      {/* Hamburger Menu Icon */}
      <div className="navbar-menu-icon" onClick={toggleMenu}>
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
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/about" className="navbar-link">About us</Link>
        <Link to="/scholarships" className="navbar-link">Scholarships</Link>
        <Link to="/resourcesAndServices" className="navbar-link">Resources and Services</Link>
        <Link to="/blog" className="navbar-link">Blog</Link>
        <Link to="/contactUs" className="navbar-link">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;