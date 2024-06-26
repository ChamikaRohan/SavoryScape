import React from 'react'
import Navbar from "../components/Navbar.jsx"
import Hero from '../components/Hero.jsx'
import { ThemeProvider } from '@emotion/react';
import Theme from '../utils/Theme.js';
import CategoriesSection from '../components/CategoriesSection.jsx';
import SolidSpace from "../components/SolidSpace.jsx"
import StylesSection from '../components/StylesSection.jsx';
import Footer from '../components/Footer.jsx';
import SectionBreak from '../components/SectionBreak.jsx';
import ExploreInviteSection from '../components/ExploreInviteSection.jsx';
import AboutSection from '../components/AboutSection.jsx';
import FeaturedRecipesSection from '../components/FeaturedRecipesSection.jsx';

export default function HomePage() {
  return (
    <ThemeProvider theme={Theme}>
      <div style={{backgroundColor: "white"}}>
        <div style={{ marginBottom: "70px" }}>
          <SolidSpace/>
          <Navbar/>
          <SolidSpace/>
        </div>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "890px", margin: "0 auto", padding: "0 20px"}}>
          <Hero />
          <SolidSpace/>
          <SectionBreak/>
          <SolidSpace/>
          <ExploreInviteSection/>
          <SolidSpace/>
          <AboutSection/>
          <SolidSpace/>
          <SectionBreak/>
          <SolidSpace/>
          <CategoriesSection/>
          <SolidSpace/>
          <SectionBreak/>
          <FeaturedRecipesSection/>
          <SolidSpace/>
          <SectionBreak/>
          <StylesSection/>
          <SolidSpace/>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </ThemeProvider>
  )
}
