import React from 'react';
import CategoryCard from './CategoryAndStyleParts/CategoryCard';
import Theme from "../utils/Theme.js"

import Italian from "../assets/Styles/Italian.jpg";
import Mexican from "../assets/Styles/Mexican.jpg";
import Chinese from "../assets/Styles/Chinese.jpg";
import Indian from "../assets/Styles/Indian.jpg";
import French from "../assets/Styles/French.jpg";
import Thai from "../assets/Styles/Thai.jpg";
import American from "../assets/Styles/American.jpg";

import './CategoriesSection.css'; 
import { Typography } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import SolidSpace from './SolidSpace.jsx';

export default function StylesSection() {
  const navigate = useNavigate();
  const styleNames = [
    "Italian",
    "Mexican",
    "Chinese",
    "Indian",
    "French",
    "Thai",
    "American"
  ];
  
  const styleImgs = [Italian,Mexican,Chinese,Indian,French,Thai,American];

  const handleStyleClick = (style) =>{
    navigate(`/style/${style}`);
  }

  return (
    <ThemeProvider theme={Theme}>
    <div className="categories-wrapper">
      <div style={{ display: "flex", flexDirection:"row", justifyContent: "flex-end" }}>
        <Typography variant="h5" sx={{color: Theme.palette.primary.main, fontFamily: "Poppins Regular"}}> Food Styles</Typography>
      </div>
      <SolidSpace/>
      <div className="categories-container">
        {styleNames.map((name, index) => (
          <CategoryCard onClick={()=>handleStyleClick(name)} key={index} img={styleImgs[index]} category={name} />
        ))}
      </div>
    </div>
    </ThemeProvider>
  );
}
