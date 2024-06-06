import React from 'react';
import { Typography, Button } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';
import exploreinvite from "../assets/exploreinvite.jpg";
import './ExploreInviteSection.css';

export default function ExploreInviteSection() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/explorerecipes');
  };

  return (
    <div className="explore-invite-wrapper">
      <div className="image-container">
        <img className="animate-up-down" src={exploreinvite} alt="Explore Invite" />
      </div>
      <div className="text-container">
        <Typography style={{ marginBottom: "25px", marginLeft: "20px" }} variant="h4" className="invite-text">
          Come and Explore Our Exciting Features!
        </Typography>
        <button class="butt type1" onClick={handleExploreClick}/>
      </div>
    </div>
  );
}
