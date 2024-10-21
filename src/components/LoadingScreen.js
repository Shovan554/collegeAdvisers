import React, { useEffect } from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/animations/loadingAnimation.json";
import "../styles/loadingScreen.css";

const LoadingScreen = ({ setLoading }) => {
    useEffect(() => {
        // Simulate loading time (e.g., 3 seconds)
        setTimeout(() => {
            const loadingContainer = document.querySelector(".loading-container");
            if (loadingContainer) {
                loadingContainer.classList.add("burst");

                // Remove the loading screen after the burst animation completes
                setTimeout(() => {
                    setLoading(false);
                }, 500); // Match this to the CSS transition duration
            }
        }, 3000); // Simulated loading duration
    }, [setLoading]);

    return (
        <div className="loading-container">
            <Lottie 
                animationData={loadingAnimation} 
                loop={true} 
                style={{ width: "250px", height: "250px" }} // Set size here
            />
        </div>
    );
};

export default LoadingScreen;