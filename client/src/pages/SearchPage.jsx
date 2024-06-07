import { ThemeProvider } from '@emotion/react'
import React from 'react'
import Theme from "../utils/Theme.js"
import SolidSpace from '../components/SolidSpace'
import NavBar from '../components/Navbar'
import { Box, Typography } from '@mui/material'
import SearchBar from '../components/SearchBar.jsx'
import gifCooking from '../assets/Cooking.gif';
import Footer from '../components/Footer.jsx'

export default function SearchPage() {
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
        <Typography sx={{ fontSize:{xs: "25px", sm: "30px", md:"40px"} , fontFamily: "Poppins Semibold"}}>SEARCH RECIPES</Typography>
        </div>

        <SearchBar/>
        <Box 
          display="flex" 
          justifyContent="center" 
          alignItems="flex-start" 
          height="50vh"
          >
          <img src={gifCooking} alt="Cooking GIF" style={{ width: '300px', height: 'auto' }} />
        </Box>

      </div>
      <SolidSpace/>
      <Footer/>
      </div>
    </ThemeProvider>
  )
}
