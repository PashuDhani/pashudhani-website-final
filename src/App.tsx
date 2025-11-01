import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Stats from './components/Stats'
import Partners from './components/Partners'
import Download from './components/Download'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import { Routes, Route } from 'react-router-dom'

const Home: React.FC = () => (
  <>
    <main>
      <Hero />
      <Features />
      <Stats />
      <Partners />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Download />
      <FAQ />
      <Contact />
    </main>
  </>
)

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App


