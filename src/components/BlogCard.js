import React, { useState, useEffect } from "react";
import "../styles/blogCard.css";

const BlogCard = ({ title, subtitle, filePath }) => {
  const [content, setContent] = useState("");
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    // Fetch content from the text file
    fetch(filePath)
      .then(response => response.text())
      .then(text => setContent(text))
      .catch(err => console.error("Failed to load blog content:", err));
  }, [filePath]);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`blog-card ${expanded ? "expanded" : ""}`}>
      <h2 className="blog-title">{title}</h2>
      <h4 className="blog-subtitle">{subtitle}</h4>
      <p className={`blog-content ${expanded ? "show" : "hide"}`}>
        {expanded ? content : content.substring(0, 100) + "..."}
      </p>
      <button onClick={toggleExpanded} className="read-more-btn">
        {expanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default BlogCard;