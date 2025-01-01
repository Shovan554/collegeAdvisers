import React, { useState, useEffect } from "react";
import mammoth from "mammoth";
import { useNavigate } from "react-router-dom";
import "../styles/blogCard.css";

const BlogCard = ({ title, subtitle, author, date, imageFilePath, filePath }) => {
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(filePath)
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) => mammoth.convertToHtml({ arrayBuffer }))
      .then((result) => {
        setContent(result.value);
      })
      .catch((err) => console.error("Failed to load blog content:", err));
  }, [filePath]);

  const handleReadMore = () => {
    navigate(`/blog/${title}`, {
      state: { title, content, author, date, imageFilePath },
    });
  };

  return (
    <div className="blog-card">
      <img className="blog-image" src={imageFilePath} alt={title} />
      <div className="blog-text">
        <h2 className="blog-title">{title}</h2>
        <h4 className="blog-author">By {author}</h4>
        <h4 className="blog-date">{date}</h4>
        <h4 className="blog-subtitle">{subtitle}</h4>
        
        <button onClick={handleReadMore} className="read-more-btn">
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;