import React from 'react'
import Navbar from './component/Navbar/navbar'

// import { Route, Routes } from "react-router-dom";
import Intro from './component/Intro/intro';
import Skill from './component/skill/skill';
import Portfolio from './component/portfolio/portfolio';
import Language from './component/languages/language';
import Contact from './component/contact/contact';
import Footer from './component/footer/footer';

const App = () => {
  return (
    <>
      <Navbar/>
      <Intro/>
      <Skill/>
      <Portfolio/>
      <Language/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
