import React from "react";
import BlogCard from "../components/BlogCard";
import "../styles/blogPage.css"; // Ensure this CSS file is imported

const BlogPage = () => {
  return (
    <div className="blog-page">
      <h1 className="blog-page-title">Our Blogs</h1>
      <div className="blog-cards-container">
        <BlogCard 
          title="Applying to the U.S. Colleges for 2025? Here's What You Need to Know:"
          author="Pragati Karki "
          subtitle="Explore various options to study overseas"
          date="Oct 28 2024"
          filePath="/blogs/blog1.docx" // Update to .docx file
        />
      </div>
    </div>
  );
};

export default BlogPage;