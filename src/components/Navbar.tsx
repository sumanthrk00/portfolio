import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative z-40">
      <div className="in">
        <div className="anim-up flex items-center justify-between gap-6 pb-[18px] pt-[22px]">
          <a href="#home" className="lnk flex items-center gap-3">
            <span className="iv-label grid h-[34px] w-[34px] place-items-center border border-graphite text-[10px] tracking-[0.18em]">
              SRK
            </span>
            <span className="hidden text-[16px] italic text-graphite sm:block">
              Sumanth R K
            </span>
          </a>

          <nav className="hidden items-center gap-[26px] lg:flex">
            <a href="#work" className="iv-label lnk">
              Work
            </a>
            <a href="#capabilities" className="iv-label lnk">
              Capabilities
            </a>
            <a href="#journey" className="iv-label lnk">
              Journey
            </a>
            <a href="#skills" className="iv-label lnk">
              Matrix
            </a>
            <a href="#about" className="iv-label lnk">
              About
            </a>
            <a href="#contact" className="iv-label lnk">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#contact" className="btn-ivory hidden sm:inline-flex">
              Let&#x27;s talk
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Open navigation"
              className="grid h-10 w-10 place-items-center border border-graphite text-graphite lg:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
      <div className="rule-draw" />

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-b border-graphite bg-parchment px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            <a
              href="#work"
              onClick={() => setMobileOpen(false)}
              className="iv-label lnk py-1 text-sm"
            >
              Work
            </a>
            <a
              href="#capabilities"
              onClick={() => setMobileOpen(false)}
              className="iv-label lnk py-1 text-sm"
            >
              Capabilities
            </a>
            <a
              href="#journey"
              onClick={() => setMobileOpen(false)}
              className="iv-label lnk py-1 text-sm"
            >
              Journey
            </a>
            <a
              href="#skills"
              onClick={() => setMobileOpen(false)}
              className="iv-label lnk py-1 text-sm"
            >
              Matrix
            </a>
            <a
              href="#about"
              onClick={() => setMobileOpen(false)}
              className="iv-label lnk py-1 text-sm"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="iv-label lnk py-1 text-sm"
            >
              Contact
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="btn-ivory btn-ivory-solid mt-2 text-center"
            >
              Let&#x27;s talk
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
