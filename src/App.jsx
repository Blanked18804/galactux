import { useState } from 'react'
import './App.css'
import Hero from './components/sections/hero/Hero'
import Clients from './components/sections/clients/Clients'
import AboutUs from './components/sections/aboutUs/AboutUs'
import Career from './components/sections/career/Career'
import Discover from './components/sections/discover/Discover'
import OurWork from './components/sections/ourWork/OurWork'
import Testimonial from './components/sections/testimonial/Testimonial'
import Plan from './components/sections/plan/Plan'
import Footer from './components/sections/footer/Footer'

function App() {

  return (
    <div className='flex flex-col gap-64 overflow-x-hidden'>
      <Hero />
      <Clients />
      <AboutUs />
      <Career />
      <Discover />
      <OurWork />
      <Testimonial />
      <Plan />
      <Footer />
    </div>
  )
}

export default App
