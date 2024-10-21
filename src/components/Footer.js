import React from "react";
import "../styles/footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-left">
        Developed by{" "}
        <a href="https://shovanraut.vercel.app" target="_blank" rel="noopener noreferrer">
          Shovan Raut
        </a>
      </div>
      <div className="footer-right">
        &copy; {currentYear}
      </div>
    </footer>
  );
};

export default Footer;