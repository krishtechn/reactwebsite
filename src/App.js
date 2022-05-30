import React from 'react'
import Cards from './Components/Cards'
import Navbar from './Components/Navbar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import Services from './Pages/Services';
import About from './Pages/About';
import Footer from './Components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar image="./logo.jfif" title="Technical krish"/>
    <Routes>
     <Route path='/' element={<Home />}/>   
     <Route path='/services' element={<Services />}/>  
     <Route path='/about' element={<About />}/>          
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App