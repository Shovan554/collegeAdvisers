import React, { useEffect } from "react";
import Lottie from "lottie-react";
import { FaInstagram, FaTiktok } from "react-icons/fa"; // Import Instagram and TikTok icons
import "../styles/footer.css";
import logoAnimation from "../assets/animations/logoAnimation.json"; // Ensure correct path

const Footer = () => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const footer = document.querySelector(".footer");
    if (footer) {
      setTimeout(() => {
        footer.classList.add("slide-up"); // Add the slide-up class on mount
      }, 100);
    }
  }, []);

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-header" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div className="footer-logo">
            <Lottie animationData={logoAnimation} loop={true} style={{ width: 50, height: 50 }} />
          </div>
          <h2 className="footer-title">The College Advisers</h2>
        </div>
        <p>Kathmandu, Nepal</p>
        <p>+9779800000000</p>
        <div className="footer-social">
          <span>Follow us on</span>
          <div className="footer-icons">
            <a href="https://www.instagram.com/the.college.advisers/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} color="#E1306C" className="instagram-icon" /> {/* Instagram icon */}
            </a>
            <a href="https://www.tiktok.com/@the.college.advisers" target="_blank" rel="noopener noreferrer">
              <FaTiktok size={24} color="#fff" className="tiktok-icon" /> {/* TikTok icon */}
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-left">
          Developed by{" "}
          <a href="https://shovanraut.vercel.app" target="_blank" rel="noopener noreferrer">
            Shovan Raut
          </a>
        </div>
        <div className="footer-right">
          &copy; {currentYear} The College Advisers
        </div>
      </div>
    </footer>
  );
};

export default Footer;
