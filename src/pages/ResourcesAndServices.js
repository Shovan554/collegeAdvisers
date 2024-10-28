import React, { useEffect } from "react";
import Lottie from "lottie-react";
import "../styles/resources.css";

// Importing animations
import blogAnimation from "../assets/animations/blog.json";
import servicesAnimation from "../assets/animations/services.json";

const ResourcesAndServices = () => {
  useEffect(() => {
    const resourceSections = document.querySelectorAll(".resource-section");

    const handleScroll = () => {
      resourceSections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 50) {
          section.classList.add("slide-in");
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="resources-page">
      <h1 className="resources-page-title">Our Resources & Services</h1>

      {/* Intro Section */}
      <div className="resource-section">
        <div className="resource-content content-container">
          <p>
            We offer a comprehensive range of resources tailored to provide guidance and insight for students and families. Whether you’re just beginning your college search or are deep into the application process, we have valuable information to support you every step of the way.
          </p>
        </div>
      </div>

      {/* Free Blogs & Articles Section with Animation */}
      <div className="resource-section alternate-layout">
        <div className="animation-container">
          <Lottie animationData={blogAnimation} loop={true} />
        </div>
        <div className="resource-content content-container">
          <h2>Free Blogs & Articles</h2>
          <p>
            Our collection of free blogs covers essential topics, from choosing the right college and crafting impactful application essays to managing deadlines and finding scholarship opportunities. These articles aim to demystify the admissions process and equip students with the knowledge needed to make well-informed decisions.
          </p>
        </div>
      </div>

      {/* In-Depth Guides Section */}
      <div className="resource-section">
        <div className="resource-content content-container">
          <h2>In-Depth Guides</h2>
          <p>
            For those seeking a deeper understanding of the college application process, our in-depth guides provide valuable insights. These resources delve into the complexities of admissions, including step-by-step guides on financial aid, interviews, and how to make your application stand out. Our guides are designed to empower students to approach their applications with confidence and clarity.
          </p>
        </div>
      </div>

      {/* Our Services Section with Animation */}
      <div className="resource-section alternate-layout">
        <div className="resource-content content-container">
          <h2>Our Services</h2>
          <ul className="services-list">
            <li><strong>Personalized Guidance Counseling:</strong> Tailored, one-on-one sessions to help you navigate your academic and career choices.</li>
            <li><strong>Essay Review and Feedback:</strong> Expert guidance to craft compelling and impactful essays for your applications.</li>
            <li><strong>University Selection Support:</strong> Assistance in finding the best-fit universities that align with your goals and aspirations.</li>
            <li><strong>Scholarship Application Assistance:</strong> Strategies and support to maximize your chances of securing scholarships.</li>
            <li><strong>Comprehensive Profile Building:</strong> Helping you develop a strong, standout profile for university and scholarship applications.</li>
          </ul>
        </div>
        <div className="animation-container">
          <Lottie animationData={servicesAnimation} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default ResourcesAndServices;