import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutMe from '../components/AboutMe'
import SkillsSection from '../components/SkillsSection'

const Home = () => {

  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
      {/* Theme toggle */}

      <ThemeToggle />

      {/* Background effect */}

      <StarBackground />

      {/* Navbar */}

      <Navbar />

      {/* main content */}
      <main>
        <HeroSection />
        <AboutMe />
        <SkillsSection />
      </main>

      {/* Footer */}
    </div>
  )
}

export default Home
