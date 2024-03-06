import React from 'react'
import Navbar from '../components/Navbar.jsx';
import Services from '../components/Services.jsx';
import About from '../components/About.jsx';
import Products from '../components/Products.jsx';
import Blog from '../components/Blog.jsx';
import Newsletter from '../components/Newsletter.jsx';
import MyFooter from '../components/MyFooter.jsx';
import Banner from '../components/Banner.jsx';

const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Services/>
    <About/>
    <Products/>
    <Newsletter/>
    <Blog/>
    <MyFooter/>
    </>
  )
}

export default Home