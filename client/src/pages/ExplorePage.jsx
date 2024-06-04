import React, { useEffect, useState } from 'react'
import SolidSpace from '../components/SolidSpace'
import NavBar from '../components/Navbar'
import { ThemeProvider } from '@emotion/react'
import Theme from '../utils/Theme.js';
import Footer from '../components/Footer';
import Post from '../components/PostParts/Post.jsx';
import { Grid } from '@mui/material';

export default function ExplorePage() {
  const apiURL = import.meta.env.VITE_API_BASE_URL;
  const [recipes, setRecipes] = useState([]);

  const getRecipeImage = async (fileId) => {
    try {
      const response = await fetch(`${apiURL}/recipe/getrecipeimg?fileId=${fileId}`);
      if (response.ok) {
        const imageBlob = await response.blob();
        return URL.createObjectURL(imageBlob);
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error fetching image:', error);
      return null;
    }
  };

  const getrecipes = async ()=>{
    const respone = await fetch(`${apiURL}/recipe/getalltrecipes`);
    const data = await respone.json();
    const recipesWithImages = await Promise.all(data.map(async (recipe) => {
      const imageUrl = await getRecipeImage(recipe.imageId);
      return { ...recipe, imageUrl };
    }));
    setRecipes(recipesWithImages);
  }

  useEffect(()=>{
    getrecipes();
  },[]);

  return (
    <ThemeProvider theme={Theme}>
    <div style={{backgroundColor: "white"}} >
      <div style={{ marginBottom: "70px" }}>
        <SolidSpace/>
        <NavBar/>
        <SolidSpace/>
      </div>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center",maxWidth: "890px" ,margin: "0 auto", padding: "0 20px"}}>
        <Grid container>
          {recipes.map((recipe)=>{
            return <Grid sx={{ marginBottom: "20px",display: "flex", alignItems: "flex-start", justifyContent: "center"  }} item xs={12} sm={6} md={4}>
              <Post _id={recipe._id} likes={0} name={recipe.name} style={recipe.style} description={recipe.description} image={recipe.imageUrl} />
            </Grid>
          })}
        </Grid>
      
      </div>
    </div>
    <SolidSpace/>
    <Footer/>
    </ThemeProvider>
  )
}
