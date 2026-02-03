import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Certifications from './sections/Certifications';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import './App.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Refresh ScrollTrigger on load
    ScrollTrigger.refresh();

    return () => {
      // Cleanup all ScrollTriggers on unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-light">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Certifications />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
