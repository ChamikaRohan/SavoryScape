import React, { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import Theme from '../utils/Theme.js';
import SolidSpace from '../components/SolidSpace';
import NavBar from '../components/Navbar';
import { Box, Typography, Grid } from '@mui/material';
import SearchBar from '../components/SearchBar.jsx';
import gifCooking from '../assets/Cooking.gif';
import Footer from '../components/Footer.jsx';
import Post from '../components/PostParts/Post.jsx';
import "./SearchPage.css"

export default function SearchPage() {
  const apiURL = import.meta.env.VITE_API_BASE_URL;
  const [searchthing, setSearchthing] = useState("");
  const [searchresult, setSearchresult] = useState([]);
  const [isloading, setIsloading] = useState(false);

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

  const handleSearch = async () => {
    try {
      setIsloading(true);
      const response = await fetch(`${apiURL}/recipe/searchrecipe/${searchthing}`);
      if (response.status === 500) {setSearchresult([]);setIsloading(false);return null;};
      const data = await response.json();
      const recipesWithImages = await Promise.all(data.map(async (recipe) => {
        const imageUrl = await getRecipeImage(recipe.imageId);
        return { ...recipe, imageUrl };
      }));
      setSearchresult(recipesWithImages);
      setIsloading(false);
    } catch (error) {
      setSearchresult([]);
      setIsloading(false);
      console.log(error);
    }
  };

  const handleClickOpen = (recipe) => {
    setSelectedRecipe(recipe);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log(searchresult.length);
  return (
    <ThemeProvider theme={Theme}>
      <div style={{ backgroundColor: "white" }}>
        <div style={{ marginBottom: "70px" }}>
          <SolidSpace />
          <NavBar />
          <SolidSpace />
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "890px", margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", width: "100%", marginBottom: "40px" }}>
            <Typography sx={{ fontSize: { xs: "25px", sm: "30px", md: "40px" }, fontFamily: "Poppins Semibold" }}>SEARCH RECIPES</Typography>
          </div>

          <SearchBar onClick={handleSearch} value={searchthing} onChange={(e) => setSearchthing(e.target.value)} />
         

          {isloading ? 
          <>
          <SolidSpace />
          <SolidSpace />
          <div class="loader">
          <div class="loaderMiniContainer">
            <div class="barContainer">
              <span class="bar"></span>
              <span class="bar bar2"></span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 101 114"
              class="svgIcon"
            >
              <circle
                stroke-width="7"
                stroke="black"
                transform="rotate(36.0692 46.1726 46.1727)"
                r="29.5497"
                cy="46.1727"
                cx="46.1726"
              ></circle>
              <line
                stroke-width="7"
                stroke="black"
                y2="111.784"
                x2="97.7088"
                y1="67.7837"
                x1="61.7089"
              ></line>
            </svg>
          </div>
          </div>
          <SolidSpace />
          <SolidSpace />
          </>
          :
          <>
          <SolidSpace />
          <Grid container style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
            {searchresult && searchresult.length > 0 ?
              searchresult.map((recipe) => (
                <Grid key={recipe.id} sx={{ marginBottom: "20px", display: "flex", alignItems: "center", justifyContent: "center" }} item xs={12} sm={6} md={4}>
                  <Post onClick={() => handleClickOpen(recipe)} comments={recipe.comments} id={recipe.id} name={recipe.name} style={recipe.style} description={recipe.description} image={recipe.imageUrl} />
                </Grid>
              )) :
              (
                <Box display="flex" justifyContent="center" alignItems="flex-start" height="50vh">
                  <img src={gifCooking} alt="Cooking GIF" style={{ width: '300px', height: 'auto' }} />
                </Box>
              )
            }
          </Grid>
          </>}
        </div>
        <SolidSpace />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
