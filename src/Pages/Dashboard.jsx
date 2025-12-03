import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Home from '../Components/Home'
import About from '../Components/About'
import Skills from '../Components/Skills'
import Experience from '../Components/Experience'

function Dashboard() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Footer />

    </div>
  )
}

export default Dashboard