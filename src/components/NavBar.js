import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo"; // Import the Logo component
import "../styles/navbar.css"; // Import your CSS

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }; 

  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      setTimeout(() => {
        navbar.classList.add("slide-down");
      }, 100);
    }
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".navbar")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo-container">
        <Logo />
      </div>

      {/* Hamburger Menu Icon */}
      <div className="navbar-menu-icon" onClick={toggleMenu} role="button" aria-label="Toggle Menu">
        <svg
          className={`menu-icon ${isOpen ? "rotate" : ""}`}
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
      <div
        className={`navbar-links ${isOpen ? "block" : "hidden"} md:flex`}
      >
        <Link to="/" className="navbar-link" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" className="navbar-link" onClick={() => setIsOpen(false)}>About us</Link>
        <Link to="/resourcesAndServices" className="navbar-link" onClick={() => setIsOpen(false)}>Resources and Services</Link>
        <Link to="/blog" className="navbar-link" onClick={() => setIsOpen(false)}>Blog</Link>
        <Link to="/contactUs" className="navbar-link" onClick={() => setIsOpen(false)}>Contact Us</Link>

        <Link
          to="https://calendly.com/collegeadvisors2021/30min"
          className="navbar-button"
          onClick={() => setIsOpen(false)}
        >
          Book an Appointment
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;