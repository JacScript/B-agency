import React from 'react';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import Products from './components/Products.jsx';
import Blog from './components/Blog.jsx';
import Newsletter from './components/Newsletter.jsx';
import MyFooter from './components/MyFooter.jsx';


import './App.css'

function App() {
    
  return (
   <>
   <Navbar/>
   <Home/>
   <Services/>
   <About/>
   <Products/>
   <Blog/>
   <Newsletter/>
   <MyFooter/>
   </>
  )
}

export default App
