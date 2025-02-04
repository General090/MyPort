import React from 'react'
import Header from './Components/Header/header'
import Nav from './Components/Nav/Nav'
import About from './Components/About/About'
import Experience from './Components/Experience/experience'
import Portfolio from './Components/Portfolio/portfolio'
import Contact from './Components/Contact/contact'
import Footer from './Components/Footer/footer'
import './index.css'

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App