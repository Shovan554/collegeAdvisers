import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/blogDetails.css";  // Create a CSS file for styling if needed

const BlogDetails = () => {
  const { state } = useLocation();  // Get the passed state from navigation
  const navigate = useNavigate();  // Hook to handle navigation
  const { title, content, author, date, imageFilePath } = state || {};

  if (!state) {
    return <h2 className="not-found">Blog not found</h2>;
  }

  const handleBack = () => {
    navigate(-1);  // Go back to the previous page
  };

  return (
    <div className="blog-details">
      <div className="blog-header">
        <img className="details-image" src={imageFilePath} alt={title} />
        <h1 className="details-title">{title}</h1>
        <p className="details-author">By {author} | {date}</p>
      </div>
      <div
        className="details-content"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
      <button onClick={handleBack} className="back-btn">
        Back to Blogs
      </button>
    </div>
  );
};

export default BlogDetails;