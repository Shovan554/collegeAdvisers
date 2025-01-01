import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import "../styles/blogPage.css"; // Ensure this CSS file is imported

const BlogPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const blogCardsContainer = document.querySelector('.blog-cards-container');
      const { top, bottom } = blogCardsContainer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (top < windowHeight && bottom > 0) {
        setIsVisible(true); // Set visible when in view
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial render

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="blog-page">
      <h1 className="blog-page-title">Our Blogs</h1>
      <div className={`blog-cards-container ${isVisible ? 'blog-cards-visible' : ''}`}>
        <BlogCard 
          title="Applying to the U.S. Colleges for 2025? Here's What You Need to Know:"
          author="Pragati Karki"
          subtitle="Explore various options to study overseas"
          date="Oct 28 2024"
          imageFilePath="/images/blog1.jpg"
          filePath="/blogs/blog1.docx" // Update to .docx file
        />
       
      </div>
    </div>
  );
};

export default BlogPage;