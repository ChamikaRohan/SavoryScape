import React from 'react'
import Navbar from "../components/Navbar.jsx"
import Hero from '../components/Hero.jsx'
import { Container } from '@mui/material'

export default function HomePage() {
  return (
    <>
      <div style={{ marginBottom: "70px" }}>
        <Navbar/>
      </div>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center",maxWidth: "890px" ,margin: "0 auto", padding: "0 20px"}}>
        <Hero />
      </div>
    </>
  )
}
