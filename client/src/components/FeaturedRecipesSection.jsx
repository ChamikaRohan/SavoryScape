import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Grid, Typography } from '@mui/material';

import Post from '../components/PostParts/Post.jsx';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const FeaturedContainer = styled.div`
  text-align: center;
  padding: 40px 20px;
  background-color: #ffffff;
  margin: 40px 0;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const FeaturedTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #000000;
`;

const FeaturedText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #000000;
  max-width: 700px;
  margin: 0 auto 20px;
`;

const RecipeGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const RecipeCard = styled.div`
  width: 300px;
  height: 350px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: left;
  margin-bottom: 20px;
`;

const RecipeImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const RecipeContent = styled.div`
  padding: 15px;
`;

const RecipeTitle = styled.h3`
  font-size: 1.5rem;
  color: #000000;
  margin-bottom: 10px;
`;

const RecipeDescription = styled.p`
  font-size: 1rem;
  color: #000000;
`;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FeaturedRecipesSection = () => {
  const apiURL = import.meta.env.VITE_API_BASE_URL;
  const [popularRecipes, setPopularRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (recipe) => {
    setSelectedRecipe(recipe);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

  const getPopularRecipes = async () => {
    try {
      const response = await fetch(`${apiURL}/recipe/popularrecipes`);
      const data = await response.json();
      const recipesWithImages = await Promise.all(data.map(async (recipe) => {
        const imageUrl = await getRecipeImage(recipe.imageId);
        return { ...recipe, imageUrl };
      }));
      setPopularRecipes(recipesWithImages);
    } catch (error) {
      console.error('Error fetching popular recipes:', error);
    }
  };

  useEffect(() => {
    getPopularRecipes();
  }, []);

  return (
    <FeaturedContainer>
      <FeaturedTitle>Featured Recipes</FeaturedTitle>
      <FeaturedText>Discover our handpicked selection of this month's must-try recipes.</FeaturedText>
      <Grid container style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
        {popularRecipes.map((recipe) => (
          <Post onClick={()=>handleClickOpen(recipe)} getrecipes={()=>getPopularRecipes()} comments={recipe.comments} id={recipe.id} name={recipe.name} style={recipe.style} description={recipe.description} image={recipe.imageUrl} />
        ))}
      </Grid>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {selectedRecipe ? selectedRecipe.name : ''}
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
            <ListItemButton>
              <ListItemText primary="Type" secondary={<Typography sx={{color: "gray", fontSize: "14px"}} >{selectedRecipe ? selectedRecipe.style : '' } {selectedRecipe ? selectedRecipe.category : '' }</Typography>} />
            </ListItemButton>
          <Divider />
            <ListItemButton>
              <ListItemText primary="Description" secondary={selectedRecipe ? selectedRecipe.description : ''} />
            </ListItemButton>
          <Divider />
            <ListItemButton>
              <ListItemText primary="Ingrediants" secondary={selectedRecipe ? selectedRecipe.ingrediants : ''} />
            </ListItemButton>
          <Divider />
            <ListItemButton>
              <ListItemText primary="Recipe" secondary={selectedRecipe ? selectedRecipe.recipe : ''} />
            </ListItemButton>
          <Divider />
            <ListItemButton sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
              <img style={{maxHeight: "400px"}} src={selectedRecipe ? selectedRecipe.imageUrl : ''} />
            </ListItemButton>
        </List>
      </Dialog>
    </FeaturedContainer>
  );
};

export default FeaturedRecipesSection;
