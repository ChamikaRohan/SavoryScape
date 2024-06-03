import React from 'react';
import CategoryCard from './CategoryParts/CategoryCard';
import Appetizer from "../assets/Categories/Appetizer.jpg";
import './CategoriesSection.css'; // Import the CSS file
import { Typography } from '@mui/material';

export default function CategoriesSection() {
  const foodCategories = [
    "Appetizers",
    "Main Courses",
    "Salads",
    "Soups",
    "Desserts",
    "Beverages",
    "Vegetarian",
    "Seafood",
    "Pasta",
    "Breakfast/Brunch"
  ];

  return (
    <div className="categories-wrapper">
      <div style={{ display: "flex", flexDirection:"row", justifyContent: "flex-end" }}>
        <Typography sx={{color: "white"}}>Categories</Typography>
      </div>
      <div className="categories-container">
        {foodCategories.map((foodCategory, index) => (
          <CategoryCard key={index} img={Appetizer} category={foodCategory} />
        ))}
      </div>
    </div>
  );
}
