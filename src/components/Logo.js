import React from "react";
import Lottie from "lottie-react";
import logoAnimation from "../assets/animations/logoAnimation.json";
import "../styles/logo.css";

const Logo = () => {
  return (
    <div className="logo-container">
      <div className="logo-animation">
        <Lottie animationData={logoAnimation} loop={true} />
      </div>
      <div className="logo-text-container">
        <div className="logo-the">The</div>
        <div>
          <span className="logo-college">College</span>
          <span className="logo-advisors">Advisers</span>
        </div>
      </div>
    </div>
  );
};

export default Logo;