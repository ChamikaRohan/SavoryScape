import React from 'react'
import RecipesByCategories from "../components/RecipesByCategories.jsx"
import { ThemeProvider } from '@emotion/react'
import Theme from "../utils/Theme.js"
import SolidSpace from '../components/SolidSpace.jsx'
import NavBar from '../components/Navbar.jsx'
import { Typography } from '@mui/material'

export default function RecipesByCategoriesPage() {
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
          <Typography sx={{ fontSize:{xs: "25px", sm: "30px", md:"40px"} , fontFamily: "Poppins Semibold"}}>CATEGORY</Typography>
        </div>
        <RecipesByCategories/>
      </div>
    </div>
    </ThemeProvider>
  )
}
