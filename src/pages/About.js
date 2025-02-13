import React, { useEffect } from "react";
import Lottie from "lottie-react";
import storyAnimation from "../assets/animations/story.json";
import philosophyAnimation from "../assets/animations/philosophy.json";
import founderAnimation from "../assets/animations/founder.json";
import promiseAnimation from "../assets/animations/promise.json";
import diverseAnimation from "../assets/animations/diverse.json";
import "../styles/about.css";
import TeamCard from "../components/TeamCard";


const About = () => {
  useEffect(() => {
    const aboutSections = document.querySelectorAll(".about-section");

    const handleScroll = () => {
      aboutSections.forEach((section) => {
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
    <div className="about-page">
      <h1 className="about-page-title">About Us</h1>

      {/* First Section with animation on the left */}
      <section className="about-section reverse">
        <div className="content-animation-container reverse">
          <div className="animation-container">
            <Lottie animationData={storyAnimation} loop={true} />
          </div>
          <div className="content-container">
            <h2>Our Story</h2>
            <p>
              At College Advisers, we are more than just an education consulting
              company; we are a trusted partner in guiding students through the
              often overwhelming journey of studying abroad. Founded by Pragati
              Karki, an experienced counselor, College Advisers was born out of a
              passion to bridge the gap between dreams and reality for students
              worldwide.
            </p>
            <p>
              Pragati’s journey as an international student, scholarship recipient,
              and admissions expert has enabled her to understand the complex needs
              of students and their families as they navigate global education.
            </p>
          </div>
        </div>
      </section>

      {/* Second Section with animation on the right */}
      <section className="about-section">
        <div className="content-animation-container">
          <div className="content-container">
            <h2>Our Philosophy</h2>
            <p>
              At College Advisers, we believe that finding the ‘best-fit’
              institution is crucial to a student’s success. We begin our process
              by understanding each student’s unique background, financial plans,
              academic strengths, interests, and long-term goals.
            </p>
            <p>
              By tailoring our approach, we ensure that every student is matched
              with opportunities that align with their aspirations and personal
              values.
            </p>
          </div>
          <div className="animation-container">
            <Lottie animationData={philosophyAnimation} loop={true} />
          </div>
        </div>
      </section>

      {/* Third Section with animation on the left */}
      <section className="about-section reverse">
        <div className="content-animation-container reverse">
          <div className="animation-container">
            <Lottie animationData={founderAnimation} loop={true} />
          </div>
          <div className="content-container">
            <h2>Our Founder and Team</h2>
            <p>
              Although currently led by Pragati Karki, a dedicated and experienced
              counselor with a Master’s degree in Research and Innovation in Higher
              Education, College Advisers is a growing organization.
            </p>
            <p>
              Pragati’s experience working as a recruitment counselor at the #1
              private university in Germany has equipped her with insights into
              global admissions processes, allowing her to offer strategic,
              impactful advice to students.
            </p>
          </div>
        </div>
      </section>

      {/* Fourth Section with animation on the right */}
      <section className="about-section">
        <div className="content-animation-container">
          <div className="content-container">
            <h2>Our Promise</h2>
            <p>
              Integrity and transparency are at the core of our services. At College
              Advisers, we are dedicated to providing honest and ethical guidance,
              ensuring that every decision we help students make is in their best
              interest.
            </p>
            <p>
              Our promise is simple: we only accept payment for services agreed upon
              and provide support within the boundaries of our expertise, without
              any exchanges or affiliations with university admissions offices.
            </p>
          </div>
          <div className="animation-container">
            <Lottie animationData={promiseAnimation} loop={true} />
          </div>
        </div>
      </section>

      {/* Fifth Section with animation on the left */}
      <section className="about-section reverse">
        <div className="content-animation-container reverse">
          <div className="animation-container">
            <Lottie animationData={diverseAnimation} loop={true} />
          </div>
          <div className="content-container">
            <h2>Our Commitment to Diversity</h2>
            <p>
              As we expand our team and network, we are committed to building an
              inclusive environment that values diverse perspectives. At College
              Advisers, we understand the importance of representing varied
              backgrounds and experiences, as it allows us to better serve our
              students in a global context.
            </p>
          </div>
        </div>
      </section>
      <h2 className="team-title">Meet the Team</h2>
      <section className="about-team">
        
        
      <TeamCard 
    memberName="Pragati Karki"
    position="Founder"
    linkedIn="https://www.linkedin.com/in/pragatikarki/"
    description="Pragati Karki is a dedicated college counselor with over five years of experience helping high school students navigate their academic and career journeys. She has guided more than 80 students in achieving their educational goals, including placements at top universities and securing $2 million in scholarships.

Her expertise spans career planning, university admissions, and skill-building, empowering students to make confident and informed decisions about their future. Pragati’s passion for education and personalized approach has established her as a trusted mentor in shaping student success.

"
    imageFilePath="/team/pragati.jpeg"
/>
<TeamCard 
    memberName="Pragya Karki"
    position="Advisor"
    linkedIn="https://www.linkedin.com/in/pragya-karki003/"
    description="Pragya Karki is a dedicated guidance counselor with extensive experience working with high school students. Currently at Ullens School, one of Nepal's leading IB institutions, she specializes in guiding A-Level and IB students toward their best-fit universities worldwide.

 

With a certification in College and Career Counseling from the IC3 Institute, Pragya brings expertise in university admissions, career planning, and scholarship acquisition. Her ability to understand students' strengths and aspirations has helped them secure placements in renowned universities globally.

 

Pragya is passionate about making guidance counseling accessible and empowering students to achieve their academic and career goals.

"
    imageFilePath="/team/Pragya.jpeg"
/>

      </section>
      
     <section>
     <TeamCard 
    memberName="Kriti"
    position="Social Media Coordinator"
   

 



    imageFilePath="/team/Kriti.png"
/>
     </section>
    </div>
  );
};

export default About;