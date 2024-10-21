import React, { useEffect } from "react";
import Logo from "../components/Logo";
import Lottie from "lottie-react";
import homeScreenAnimation from "../assets/animations/homeScreenAnimation.json";
import "../styles/home.css";

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const contentSections = document.querySelectorAll(".content-section");
      contentSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        // Add 'visible' class when the section is in view
        if (sectionTop < windowHeight - 100 && sectionBottom > 100) {
          section.classList.add("visible");
        } else {
          // Remove 'visible' class when the section is out of view
          section.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home-container">
      {/* Full-width Logo and Animation Section */}
      <section className="home-top">
        <div className="home-left">
          <div className="home-logo">
            <Logo />
          </div>
          <p className="home-quote">
            <strong>Helping you achieve your study abroad dream.</strong> <br />We provide guidance, support, and resources to turn your dreams into reality.
          </p>
        </div>
        <div className="home-right">
          <Lottie animationData={homeScreenAnimation} loop={true} />
        </div>
      </section>

      {/* Horizontal Container for Content Sections */}
      <div className="content-wrapper">
        <section className="content-section">
          <h2>Personalized Guidance for Your Educational Journey</h2>
          <p>
            At The College Advisers, we understand that navigating the complex world of higher education can be daunting. Our team of experienced counselors is dedicated to providing tailored support to help you unlock your academic potential and achieve your educational goals.
          </p>
          <button className="home-button">Get Started</button>
        </section>

        <section className="content-section">
          <h2>Comprehensive Educational Guidance</h2>
          <p>
            Our team of knowledgeable advisers will work closely with you to navigate the complex landscape of educational opportunities, helping you identify the best-fit programs, scholarships, and resources to support your academic and career aspirations.
          </p>
          <p>
            With our expert guidance, you'll be empowered to make informed decisions and take the necessary steps to achieve your educational goals.
          </p>
          <button className="home-button">Book an Appointment</button>
        </section>
      </div>
    </div>
  );
};

export default Home;