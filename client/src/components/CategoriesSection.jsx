import React from 'react';
import CategoryCard from './CategoryAndStyleParts/CategoryCard';
import Theme from '../utils/Theme';

import Appetizers from "../assets/Categories/Appetizers.jpg";
import Main from "../assets/Categories/Main.jpg";
import Salads from "../assets/Categories/Salads.jpg";
import Soups from "../assets/Categories/Soups.jpg";
import Desserts from "../assets/Categories/Desserts.jpg";
import Beverages from "../assets/Categories/Beverages.jpg";
import Vegetarian from "../assets/Categories/Vegetarian.jpg";
import Seafood from "../assets/Categories/Seafood.jpg";
import Breakfast from "../assets/Categories/Breakfast.jpg";

import './CategoriesSection.css'; 
import { Button, Typography } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

export default function CategoriesSection() {
  const navigate = useNavigate();
  
  const categoryImg =[Appetizers, Main, Salads, Soups, Desserts, Beverages, Vegetarian, Seafood, Breakfast]
  const categoryNames = [
    "Appetizers",
    "Main Courses",
    "Salads",
    "Soups",
    "Desserts",
    "Beverages",
    "Vegetarian",
    "Seafood",
    "Breakfast"
  ];

  const handleCategoryClick = (category) =>{
    navigate(`/category/${category}`);
  }

  return (
    <ThemeProvider theme={Theme}>
    <div className="categories-wrapper">
      <div style={{ display: "flex", flexDirection:"row", justifyContent: "flex-end" }}>
        <Button>
          <Typography variant="h5" sx={{color: Theme.palette.primary.main, fontFamily: "Poppins Regular"}}> Food Categories</Typography>
        </Button>
      </div>
      <div className="categories-container">
        {categoryNames.map((name, index) => (
          <CategoryCard  onClick={()=>handleCategoryClick(name)} key={index} img={categoryImg[index]} category={name} />
        ))}
      </div>
    </div>
    </ThemeProvider>
  );
}
