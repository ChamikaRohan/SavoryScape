import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import Theme from '../utils/Theme.js';
import Navbar from "../components/Navbar.jsx"
import Footer from '../components/Footer.jsx';
import SolidSpace from '../components/SolidSpace.jsx';


export default function FormPage() {

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
          <Typography sx={{ fontSize: {xs: "15px", sm: "18px", md:"20px"} ,fontFamily: "Poppins Regular" }}>Recipe Name</Typography>
          <TextField required id="outlined-required" label="Required" inputProps={{ sx: {fontFamily: "Poppins Regular",fontSize: { xs: '12px', sm: '15px', md: '16px' }} }} InputLabelProps={{ sx: {fontFamily: "Poppins Regular", fontSize: { xs: '15px', sm: '15px', md: '15px' }}  }} />
        </div>

        <div style={{ marginBottom: "30px" ,width: "100%" ,display:"flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: {xs: "15px", sm: "18px", md:"20px"} ,fontFamily: "Poppins Regular" }}>Recipe Category</Typography>
          <TextField select SelectProps={{native: true}} required id="outlined-select-required" label="Select" helperText="Please select food catgeory" inputProps={{ sx: {fontFamily: "Poppins Regular",fontSize: { xs: '12px', sm: '15px', md: '16px' }} }} InputLabelProps={{ sx: {fontFamily: "Poppins Regular", fontSize: { xs: '15px', sm: '15px', md: '15px' }}  }} >
          {categoryNames.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
          </TextField>
        </div>

        <div style={{ marginBottom: "30px" ,width: "100%" ,display:"flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: {xs: "15px", sm: "18px", md:"20px"} ,fontFamily: "Poppins Regular" }}>Recipe Style</Typography>
          <TextField select SelectProps={{native: true}} required id="outlined-select-required" label="Select" helperText="Please select food catgeory" inputProps={{ sx: {fontFamily: "Poppins Regular",fontSize: { xs: '12px', sm: '15px', md: '16px' }} }} InputLabelProps={{ sx: {fontFamily: "Poppins Regular", fontSize: { xs: '15px', sm: '15px', md: '15px' }}  }} >
          {styleNames.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
          </TextField>
        </div>

        <div style={{ marginBottom: "30px" ,width: "100%" ,display:"flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: {xs: "15px", sm: "18px", md:"20px"} ,fontFamily: "Poppins Regular" }}>Recipe Description</Typography>
          <TextField required id="outlined-required" label="Required" inputProps={{ sx: {fontFamily: "Poppins Regular",fontSize: { xs: '12px', sm: '15px', md: '16px' }} }} InputLabelProps={{ sx: {fontFamily: "Poppins Regular", fontSize: { xs: '15px', sm: '15px', md: '15px' }}  }} />
        </div>

        <div style={{ marginBottom: "30px" ,width: "100%" ,display:"flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: {xs: "15px", sm: "18px", md:"20px"} ,fontFamily: "Poppins Regular" }}>Recipe Ingrediants</Typography>
          <TextField required id="outlined-required" label="Required" inputProps={{ sx: {fontFamily: "Poppins Regular",fontSize: { xs: '12px', sm: '15px', md: '16px' }} }} InputLabelProps={{ sx: {fontFamily: "Poppins Regular", fontSize: { xs: '15px', sm: '15px', md: '15px' }}  }} />
        </div>

        <div style={{ marginBottom: "30px" ,width: "100%" ,display:"flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: {xs: "15px", sm: "18px", md:"20px"} ,fontFamily: "Poppins Regular" }}>Recipe Recipe</Typography>
          <TextField required id="outlined-required" label="Required" inputProps={{ sx: {fontFamily: "Poppins Regular",fontSize: { xs: '12px', sm: '15px', md: '16px' }} }} InputLabelProps={{ sx: {fontFamily: "Poppins Regular", fontSize: { xs: '15px', sm: '15px', md: '15px' }}  }} />
        </div>

        <div style={{ marginBottom: "30px" ,width: "100%" ,display:"flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: {xs: "15px", sm: "18px", md:"20px"} ,fontFamily: "Poppins Regular" }}>Recipe Image</Typography>
          <TextField required id="outlined-required" label="Required" inputProps={{ sx: {fontFamily: "Poppins Regular",fontSize: { xs: '12px', sm: '15px', md: '16px' }} }} InputLabelProps={{ sx: {fontFamily: "Poppins Regular", fontSize: { xs: '15px', sm: '15px', md: '15px' }}  }} />
        </div>
     </div>
    </div>
    <Footer/>
    </ThemeProvider>
  );
}
