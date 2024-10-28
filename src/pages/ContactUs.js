import React from "react";
import ContactForm from "../components/ContactForm";
import "../styles/contactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us-page">
      <div className="contact-us-left">
        <h1 className="contact-us-title">Contact Us</h1>
      </div>
      <div className="contact-us-right">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;