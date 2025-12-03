import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Home from '../Components/Home'
import About from '../Components/About'
import Skills from '../Components/Skills'
import Experience from '../Components/Experience'
import Contact from '../Components/Contact'

function Dashboard() {
  return (
  <div>
  <Navbar />
  <Home id="home" />
  <About id="about" />
  <Skills id="skills" />
  <Experience id="experience" />
  <Contact id="contact" />
  <Footer />
</div>

  )
}

export default Dashboard