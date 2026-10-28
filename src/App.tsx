import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Capabilities } from '@/components/sections/Capabilities';
import { About } from '@/components/sections/About';
import { Principles } from '@/components/sections/Principles';
import { Expertise } from '@/components/sections/Expertise';
import { Journey } from '@/components/sections/Journey';
import { SkillsMatrix } from '@/components/sections/SkillsMatrix';
import { SelectedWork } from '@/components/sections/SelectedWork';
import { OpenSource } from '@/components/sections/OpenSource';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/Footer';

export function App() {
  return (
    <div className="paper-page relative min-h-screen overflow-x-hidden">
      {/* Background paper grain effect */}
      <div className="grain" aria-hidden="true" />

      {/* Main page content container */}
      <div className="relative z-[1]">
        <Navbar />
        <main>
          <Hero />
          <Capabilities />
          <About />
          <Principles />
          <Expertise />
          <Journey />
          <SkillsMatrix />
          <SelectedWork />
          <OpenSource />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
