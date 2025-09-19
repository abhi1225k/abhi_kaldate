import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router,Routes,Route, BrowserRouter } from 'react-router-dom';
//import UiUsDesign from './Components/Pages/UiUsDesign';
import CSharpPage from './Components/Skills/CSharpPage';

const App = () => {
  return (

    
    <div>
    
      <Navbar/>
      
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>

      
      <Footer/>
      
      
    </div>
  
  );
};

export default App