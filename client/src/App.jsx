import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage.jsx'
import FormPage from './pages/FormPage.jsx'
import ExplorePage from './pages/ExplorePage.jsx'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/createrecipe" element={<FormPage/>} />
        <Route path="/explorerecipes" element={<ExplorePage/>} />
      </Routes>
    </Router>
  )
}
