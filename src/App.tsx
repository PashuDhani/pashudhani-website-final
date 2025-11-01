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

const App: React.FC = () => {
  // Very light client-side routing: render dedicated page for /privacy
  const path = typeof window !== 'undefined' ? window.location.pathname : '/'
  if (path === '/privacy') {
    return (
      <div className="min-h-screen">
        <PrivacyPolicy />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navbar />
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
      <Footer />
    </div>
  )
}

export default App


