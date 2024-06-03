import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage.jsx'
import FormPage from './pages/FormPage.jsx'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/createrecipe" element={<FormPage/>} />
      </Routes>
    </Router>
  )
}
