import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/sections/About';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';
import Experience from '@/sections/Experience';
import Services from '@/sections/Services';
import Contact from '@/sections/Contact';

import LoadingScreen from '@/components/LoadingScreen';
import MouseGlow from '@/components/MouseGlow';
import Cursor from '@/components/Cursor';
import ScrollProgress from '@/components/ScrollProgress';
import ThreeBackground from '@/components/ThreeBackground';

export default function Home() {
  return (
    <>
      {/* Immersive 3D particle background */}
      <ThreeBackground />

      {/* Modern interactive global elements */}
      <ScrollProgress />
      <LoadingScreen />
      <MouseGlow />
      <Cursor />

      {/* Main navigation */}
      <Navbar />

      {/* Page sections */}
      <main className="relative z-10 flex flex-col w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Contact />
      </main>

      {/* Footer */}
      <footer 
        className="relative z-10 py-8 text-center text-gray-500 text-sm border-t border-white/5 backdrop-blur-xl"
        style={{ backgroundColor: 'rgba(10, 10, 15, 0.8)' }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <p>© {new Date().getFullYear()} Ajay Renjith. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
