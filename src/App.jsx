import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import About from './components/About'
import Services from './components/Services'
import Waitlist from './components/Waitlist'



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join-waitlist" element={<Waitlist />} />
      </Routes>
      <Footer/>
     
    </div>
  )
}

export default App