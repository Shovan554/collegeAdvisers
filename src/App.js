import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./pages/About";
import ResourcesAndServices from "./pages/ResourcesAndServices";
import LoadingScreen from "./components/LoadingScreen";
import ContactUs from "./pages/ContactUs";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    if (!loading) {
      // Delay to trigger slide-in effect when Home component loads
      setTimeout(() => {
        setSlideIn(true);
      }, 100); // Adjust timing as needed
    }
  }, [loading]);

  return (
    <Router>
      {loading ? (
        <LoadingScreen setLoading={setLoading} />
      ) : (
        <>
          <NavBar />
          <div className={`home-wrapper ${slideIn ? "slide-in" : ""}`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<BlogPage />} /> {/* Add BlogPage */}
              <Route path="/about" element={<About />} />
              <Route path="/resourcesAndServices" element={<ResourcesAndServices />} />
              <Route path="/contactUs" element={<ContactUs / >} />
            </Routes>
          </div>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;