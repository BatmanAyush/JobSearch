import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Footer from './Footer'

const Homepage = () => {
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <Navbar/>
      <Hero/>
      <About/>
      <Footer/>
    </div>
  )
}

export default Homepage
