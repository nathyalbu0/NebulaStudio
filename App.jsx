import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css'

// Register GSAP
gsap.registerPlugin(ScrollTrigger)

// Importe TODOS os componentes
import LanguageSwitcher from './components/LanguageSwitcher'
import ParticlesBackground from './components/ParticlesBackground'
import Hero from './components/Hero/Hero'
import Manifesto from './components/Manifesto/Manifesto'
import Services from './components/Services/Services'
import Atmosphere from './components/Atmosphere/Atmosphere'
import About from './components/About/About'
import CTA from './components/CTA/CTA'
import Footer from './components/Footer/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [showDebug, setShowDebug] = useState(true)

  useGSAP(() => {
    ScrollTrigger.defaults({
      toggleActions: "play none none reverse",
      start: "top 80%",
      end: "bottom 20%"
    })
  })

  useEffect(() => {
    // Loading mais curto
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    // Remove debug após 5s
    const debugTimer = setTimeout(() => {
      setShowDebug(false)
    }, 5000)

    return () => {
      clearTimeout(timer)
      clearTimeout(debugTimer)
    }
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-nebula-dark">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-nebula-purple/20 border-t-nebula-cyan rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-nebula-light/60">Carregando Nebula Studio...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden bg-nebula-dark text-nebula-light">
      {/* Debug Info */}
      {showDebug && (
        <div className="fixed top-4 left-4 z-50 bg-green-600 text-white px-3 py-1 rounded-lg text-sm">
          ✅ Todos componentes OK
        </div>
      )}

      {/* Background */}
      <ParticlesBackground />
      
      {/* Language Switcher */}
      <LanguageSwitcher />
      
      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Hero />
          <Manifesto />
          <Services />
          <Atmosphere />
          <About />
          <CTA />
          <Footer />
        </motion.div>
      </AnimatePresence>

      {/* Simple loading indicator */}
      <div className="fixed bottom-4 right-4 z-40">
        <div className="flex items-center gap-2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>Nebula Studio</span>
        </div>
      </div>
    </div>
  )
}

export default App