import React from "react";
import { FaLinkedin } from "react-icons/fa"; // Import LinkedIn icon
import "../styles/teamCard.css";

const TeamCard = ({ memberName, position, linkedIn, description, imageFilePath }) => {
    return (
        <div className="team-card">
            <img className="team-image" src={imageFilePath} alt={memberName} />
            <h3 className="team-name">{memberName}</h3>
            <h4 className="team-position">{position}</h4>
            <h5 className="team-description">{description}</h5>

            <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                <FaLinkedin size={24} className="linkedin-icon" />
            </a>
        </div>
    );
};

export default TeamCard;