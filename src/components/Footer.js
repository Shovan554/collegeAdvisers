import React, { useEffect } from "react";
import "../styles/footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const footer = document.querySelector(".footer");
    if (footer) {
      setTimeout(() => {
        footer.classList.add("slide-up"); // Add the slide-up class on mount
      }, 100); // Delay slightly to ensure smooth entry
    }
  }, []);

  return (
    <footer className="footer">
      <div className="footer-left">
        Developed by{" "}
        <a href="https://shovanraut.vercel.app" target="_blank" rel="noopener noreferrer">
          Shovan Raut
        </a>
      </div>
      <div className="footer-right">
        &copy; {currentYear} College Advisers
      </div>
    </footer>
  );
};

export default Footer;