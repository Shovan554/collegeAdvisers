import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/contactForm.css"; // Ensure you have CSS styling as needed

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
        "service_xil5gyv",      // Your service ID
        "template_b89nzhw",      // Your template ID
        formData,                // Form data object with updated keys
        "kSPSAhEHaWOGyhGNQ"      // Your public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus("Failed to send the message. Please try again later.");
        }
      );

    setFormData({
      name: "",
      email: "",
      phone: "",
      country: "",
      message: "",
    });
  };

  return (
    <div className="contact-form-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Phone Number:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label>Country of Residence:</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        />

        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message</button>
        <p className="status-message">{status}</p>
      </form>
    </div>
  );
};

export default ContactForm;