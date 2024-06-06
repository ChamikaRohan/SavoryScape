import React, { useEffect, useState } from 'react'
import SolidSpace from '../components/SolidSpace.jsx'
import NavBar from '../components/Navbar.jsx'
import { ThemeProvider } from '@emotion/react'
import Theme from '../utils/Theme.js';
import Footer from '../components/Footer.jsx';
import Post from '../components/PostParts/Post.jsx';
import { Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import "../components/UIVerseCss/ExplorePageButton.css"
import { useParams } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SpecificCategoryPage() {
  const { categoryname } = useParams();
  
  const apiURL = import.meta.env.VITE_API_BASE_URL;
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [isloading, setIsloading] = useState(true);

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

  const getrecipes = async ()=>{
    const respone = await fetch(`${apiURL}/recipe/getbycategory/${categoryname}`);
    if (respone.status == 204) {setRecipes(null); setIsloading(false); ;return null;};
    const data = await respone.json();
    
    const recipesWithImages = await Promise.all(data.map(async (recipe) => {
      const imageUrl = await getRecipeImage(recipe.imageId);
      return { ...recipe, imageUrl };
    }));
    setRecipes(recipesWithImages);
    setIsloading(false);
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
        
        <div style={{display : "flex", flexDirection: "row", justifyContent: "center", width: "100%", marginBottom: "40px"}}>
          <Typography sx={{ fontSize:{xs: "25px", sm: "30px", md:"40px"} , fontFamily: "Poppins Semibold"}}>{categoryname.toUpperCase()} RECIPES</Typography>
        </div>

        {isloading ? 

        <div style={{minHeight: "300px", display: "flex", alignItems: "center"}}>
          <button className='explorebutton' type="button" disabled="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 101" class="inline w-4 h-4 mr-3 text-white animate-bounce" role="status" aria-hidden="true">
            <circle fill="#34D399" r="45" cy="50" cx="50"></circle>
            </svg>
            Loading...
          </button>
        </div> :

        <Grid container>
          
          {recipes && recipes.length > 0 ?
          (
            recipes.map((recipe)=>(
              <Grid sx={{ marginBottom: "20px",display: "flex", alignItems: "flex-start", justifyContent: "center"  }} item xs={12} sm={6} md={4}>
                <Post onClick={()=>handleClickOpen(recipe)} _id={recipe._id} likes={0} name={recipe.name} style={recipe.style} description={recipe.description} image={recipe.imageUrl} />
              </Grid>))
          )
          :
          (
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center",alignItems: "center", width: "100%", minHeight: "300px"}}>
              <Typography variant="h6" sx={{color:"red"}}>
                Currently there are no available options for {categoryname}
              </Typography>
            </div>
          )
          
        }
        </Grid>
        
        
        }
      </div>
    </div>
    <SolidSpace/>
    <Footer/>
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
            <Button autoFocus color="inherit" onClick={handleClose}>
              Save
            </Button>
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
          {/* Add more details as needed */}
        </List>
      </Dialog>
    </ThemeProvider>
  )
}
