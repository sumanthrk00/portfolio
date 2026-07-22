import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { GitHubSection } from '@/components/sections/GitHubSection';
import { Contact } from '@/components/sections/Contact';
import { useTheme } from '@/hooks/useTheme';

function App() {
  const { theme, toggle } = useTheme();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar theme={theme} toggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
      {/* Scroll progress bar */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-50 h-0.5 origin-left bg-gradient-to-r from-brand-500 to-accent-500"
        style={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false }}
      />
    </div>
  );
}

export default App;
