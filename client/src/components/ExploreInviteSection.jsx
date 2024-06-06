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
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
      <div className="image-container">
        <img className="animate-up-down" src={exploreinvite} alt="Explore Invite" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <Typography style={{ fontFamily: "Poppins Regular", fontSize: "25px" ,textAlign: "center",marginBottom: "25px", display: "flex", alignItems: "center", justifyContent: "center"}} variant="h4">
        Explore our collection  <br/> of tasty dishes!
        </Typography>
        <button class="butt type1" onClick={handleExploreClick}/>
      </div>
    </div>
  );
}
