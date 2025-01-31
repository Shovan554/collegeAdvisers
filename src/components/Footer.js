import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { FaInstagram, FaLinkedin, FaTiktok, FaYoutube, FaArrowRight } from "react-icons/fa"; 
import "../styles/footer.css";
import logoAnimation from "../assets/animations/logoAnimation.json"; 
import emailjs from "emailjs-com";

const Footer = () => {
  const [formData, setFormData] = useState({
    email: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const footer = document.querySelector(".footer");
    if (footer) {
      setTimeout(() => {
        footer.classList.add("slide-up");
      }, 100);
    }
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!formData.email) {
      alert("Please enter a valid email address.");
      return;
    }

    emailjs.send(
      "service_qe9zw7o",
      "template_ghcrq9q",
      formData,
      "QJ9bfch9eBJAOAKQo"
    )
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus("Subscribed");
      },
      (error) => {
        console.log("FAILED...", error);
        setStatus("Failed to Subscribe please try again later");
      }
    );

    setFormData({
      email: ""
    });
  };

  return (
    <footer className="footer">
      <div className="subscribe-email">
        <p className="subscribe-email-text">Subscribe to our emails</p>
        <div className="email-subscribe-container">
          <div className="email-input-wrapper">
            <input
              type="email"
              name="email" // Ensure the input has a 'name' attribute to match formData field
              className="email-input"
              placeholder="Enter your email"
              value={formData.email} // Bind value to formData state
              onChange={handleChange} // Use handleChange to update formData
            />
            <button className="subscribe-button" onClick={handleSubscribe}>
              <FaArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
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
              <FaInstagram size={24} color="#E1306C" className="instagram-icon" />
            </a>
            <a href="https://www.tiktok.com/@the.college.advisers" target="_blank" rel="noopener noreferrer">
              <FaTiktok size={24} color="#fff" className="tiktok-icon" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={24} color="#E1306C" className="youtube-icon" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} color="Blue" className="linkedin-icon" />
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
