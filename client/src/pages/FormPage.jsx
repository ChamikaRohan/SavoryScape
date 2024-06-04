import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography, Button, styled } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import Theme from '../utils/Theme.js';
import Navbar from "../components/Navbar.jsx"
import Footer from '../components/Footer.jsx';
import SolidSpace from '../components/SolidSpace.jsx';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useState, useEffect } from 'react';
import LoadingIcons from 'react-loading-icons'

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function FormPage() {

  const apiURL = import.meta.env.VITE_API_BASE_URL;

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

    const styleNames = [
      "Italian",
      "Mexican",
      "Chinese",
      "Indian",
      "French",
      "Thai",
      "American"
    ];
  
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Appetizers");
    const [style, setStyle] = useState("Italian");
    const [description, setDescription] = useState("");
    const [ingrediants, setIngrediants] = useState("");
    const [recipe, setRecipe] = useState("");
    const [selectedimg, setSelectedimg] = useState("");
    const [imageId, setImageId] = useState("");

    const [imguploadstatus, setImguploadstatus] = useState(false);
    const [imgloading, setImgloading] = useState(false);

    const handlePictureUpload = async(e)=>{
      setImgloading(true);
      e.preventDefault();
      if(!selectedimg){console.log("No file selected!");return;}
      const fromdata = new FormData();
      fromdata.append("file", selectedimg);
  
      try{
        const response = await fetch(`${apiURL}/recipe/createrecipeimg`,{
          method: "POST",
          body: fromdata
        });
        const data = await response.json();
        console.log(data.message);
        setImageId(data.id);
        setImguploadstatus(true);
        setImgloading(false);
      }
      catch(error)
      {
        setImgloading(false);
        console.log(error);
      }
    }
  

    const handleSubmit = async() =>{
      try
      {
        const response = await fetch(`${apiURL}/recipe/createrecipe`,{
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({name, category, style, description, ingrediants, recipe, imageId})
        });
        const data = await response.json();
        console.log(data.message);
      }
      catch(error)
      {
        console.log(data.message);
      }
    }

  return (
    <ThemeProvider theme={Theme}>
    <div style={{backgroundColor: "white"}} >
      <div style={{ marginBottom: "70px" }}>
        <SolidSpace/>
        <Navbar/>
        <SolidSpace/>
      </div>
      <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start",maxWidth: "890px" ,margin: "0 auto", padding: "0 20px"}}>
        <div style={{display : "flex", flexDirection: "row", justifyContent: "center", width: "100%", marginBottom: "40px"}}>
        <Typography sx={{ fontSize:{xs: "25px", sm: "30px", md:"40px"} , fontFamily: "Poppins Semibold"}}>POST A RECIPE</Typography>
        </div>

        <div style={{ marginBottom: "30px" ,width: "100%" ,display:"flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Typography sx={{whiteSpace: "nowrap" , marginRight: { xs: "110px", sm : "180px", md: "250px" } ,fontSize: {xs: "15px", sm: "18px", md:"20px"} ,fontFamily: "Poppins Regular" }}>Recipe Name</Typography>
          <TextField value={name} onChange={(e)=>setName(e.target.value)} fullWidth  required id="outlined-required" label="Required" inputProps={{ sx: {fontFamily: "Poppins Regular",fontSize: { xs: '12px', sm: '15px', md: '16px' }} }} InputLabelProps={{ sx: {fontFamily: "Poppins Regular", fontSize: { xs: '15px', sm: '15px', md: '15px' }}  }} />
        </div>

        <div style={{ marginBottom: "30px" ,width: "100%" ,display:"flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: {xs: "15px", sm: "18px", md:"20px"} ,fontFamily: "Poppins Regular" }}>Recipe Category</Typography>
          <TextField value={category} onChange={(e)=>setCategory(e.target.value)}  select SelectProps={{native: true}} required id="outlined-select-required" helperText="Please select food catgeory" inputProps={{ sx: {fontFamily: "Poppins Regular",fontSize: { xs: '12px', sm: '15px', md: '16px' }} }} InputLabelProps={{ sx: {fontFamily: "Poppins Regular", fontSize: { xs: '15px', sm: '15px', md: '15px' }}  }} >
          {categoryNames.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
          </TextField>
        </div>

        <div style={{ marginBottom: "30px" ,width: "100%" ,display:"flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: {xs: "15px", sm: "18px", md:"20px"} ,fontFamily: "Poppins Regular" }}>Recipe Style</Typography>
          <TextField value={style} onChange={(e)=>setStyle(e.target.value)} select SelectProps={{native: true}} required id="outlined-select-required" helperText="Please select food catgeory" inputProps={{ sx: {fontFamily: "Poppins Regular",fontSize: { xs: '12px', sm: '15px', md: '16px' }} }} InputLabelProps={{ sx: {fontFamily: "Poppins Regular", fontSize: { xs: '15px', sm: '15px', md: '15px' }}  }} >
          {styleNames.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
          </TextField>
        </div>

        <div style={{ marginBottom: "30px" ,width: "100%" ,display:"flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Typography sx={{ whiteSpace: "nowrap" , marginRight: { xs: "110px", sm : "180px", md: "250px" } ,fontSize: {xs: "15px", sm: "18px", md:"20px"} ,fontFamily: "Poppins Regular" }}>Recipe Description</Typography>
          <TextField required value={description} onChange={(e)=>setDescription(e.target.value)} fullWidth multiline rows={6} required id="outlined-required" label="Required" inputProps={{ sx: {fontFamily: "Poppins Regular",fontSize: { xs: '12px', sm: '15px', md: '16px' }} }} InputLabelProps={{ sx: {fontFamily: "Poppins Regular", fontSize: { xs: '15px', sm: '15px', md: '15px' }}  }} />
        </div>

        <div style={{ marginBottom: "30px" ,width: "100%" ,display:"flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Typography sx={{ whiteSpace: "nowrap" , marginRight: { xs: "110px", sm : "180px", md: "250px" } ,fontSize: {xs: "15px", sm: "18px", md:"20px"} ,fontFamily: "Poppins Regular" }}>Recipe Ingrediants</Typography>
          <TextField value={ingrediants} onChange={(e)=>setIngrediants(e.target.value)} fullWidth multiline required id="outlined-required" label="Required" inputProps={{ sx: {fontFamily: "Poppins Regular",fontSize: { xs: '12px', sm: '15px', md: '16px' }} }} InputLabelProps={{ sx: {fontFamily: "Poppins Regular", fontSize: { xs: '15px', sm: '15px', md: '15px' }}  }} />
        </div>

        <div style={{ marginBottom: "30px" ,width: "100%" ,display:"flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Typography sx={{ whiteSpace: "nowrap" , marginRight: { xs: "110px", sm : "180px", md: "250px" } ,fontSize: {xs: "15px", sm: "18px", md:"20px"} ,fontFamily: "Poppins Regular" }}>The Recipe</Typography>
          <TextField value={recipe} onChange={(e)=>setRecipe(e.target.value)} fullWidth multiline rows={10} required id="outlined-required" label="Required" inputProps={{ sx: {fontFamily: "Poppins Regular",fontSize: { xs: '12px', sm: '15px', md: '16px' }} }} InputLabelProps={{ sx: {fontFamily: "Poppins Regular", fontSize: { xs: '15px', sm: '15px', md: '15px' }}  }} />
        </div>

        <div style={{ marginBottom: "30px" ,width: "100%" ,display:"flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Typography sx={{ whiteSpace: "nowrap" , marginRight: { xs: "110px", sm : "180px", md: "250px" } ,fontSize: {xs: "15px", sm: "18px", md:"20px"} ,fontFamily: "Poppins Regular" }}>Recipe Image</Typography>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <Button style={{flexGrow: 1, marginRight: "10px"}}  component="label" variant="contained" tabIndex={-1} onChange={(e)=>setSelectedimg(e.target.files[0])}>
                <Typography sx={{ fontSize: { xs: "12px", sm: "14px", md: "15px" } }} >
                  Select picture
                </Typography>
              <VisuallyHiddenInput type="file" accept="image/*" /></Button>
            <Button variant="contained" color="primary" size="large" type="submit" fullWidth style={{ maxWidth: "10px" }} onClick={handlePictureUpload} >{imgloading ? <LoadingIcons.TailSpin  speed={1} height={24} /> : <CloudUploadIcon />}</Button>
          </div>
        </div>
        <div style={{  display: "flex", flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center" ,marginTop: '15px' }}>
          <Button disabled={!imguploadstatus} sx={{":hover" : {background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',boxShadow: '0 0 20px #FE6B8B',}, maxWidth: "100px" }} onClick={handleSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth style={{ marginBottom: '10px' }}>Submit</Button>
        </div>
     </div>
    </div>
    <Footer/>
    </ThemeProvider>
  );
}
