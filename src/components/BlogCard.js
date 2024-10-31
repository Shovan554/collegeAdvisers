import React, { useState, useEffect } from "react";
import mammoth from "mammoth";
import "../styles/blogCard.css";

const BlogCard = ({ title, subtitle, author,date,imageFilePath,filePath }) => {
  const [content, setContent] = useState("");
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    fetch(filePath)
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) => {
        return mammoth.convertToHtml({ arrayBuffer });
      })
      .then((result) => {
        setContent(result.value);
      })
      .catch((err) => console.error("Failed to load blog content:", err));
  }, [filePath]);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`blog-card ${expanded ? "expanded" : ""}`}>
      <h2 className="blog-title">{title}</h2>
      <h4 className="blog-author">{author}</h4>
      <h4 className="blog-date">{date}</h4>
      <h4 className="blog-subtitle">{subtitle}</h4>
      <img className="blog-image" src={imageFilePath} alt={title} />

      <div
        className={`blog-content ${expanded ? "show" : "hide"}`}
        dangerouslySetInnerHTML={{
          __html: expanded ? content : content.substring(0, 100) + "...",
        }}
      ></div>

      <button onClick={toggleExpanded} className="read-more-btn">
        {expanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default BlogCard;