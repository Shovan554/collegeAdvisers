import React from "react";
import BlogCard from "../components/BlogCard";
import "../styles/blogPage.css"; // Ensure this CSS file is imported

const BlogPage = () => {
  return (
    <div className="blog-page">
      <h1 className="blog-page-title">Our Blogs</h1>
      <div className="blog-cards-container">
        <BlogCard 
          title="Study Abroad Opportunities"
          subtitle="Explore various options to study overseas"
          filePath="/blogs/blog1.txt"
        />
        <BlogCard
          title="Suck balls"
          subtitle="Explore my balls"
          filePath="/blogs/blog1.txt"
        />
      </div>
    </div>
  );
};

export default BlogPage;