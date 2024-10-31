import React from "react";
import ContactForm from "../components/ContactForm";
import Lottie from "lottie-react"; // Import Lottie
import teamAnimation from "../assets/animations/team.json"; // Import the team animation
import "../styles/contactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us-page">
      <div className="contact-us-left">
        <h1 className="contact-us-title">Contact Us</h1>
        <Lottie 
          animationData={teamAnimation} 
          loop={true} 
          style={{ width: 300, height: 300, marginTop: "20px" }} // Adjust size and margin
        />
      </div>
      <div className="contact-us-right">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;