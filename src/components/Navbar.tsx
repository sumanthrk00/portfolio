import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Download } from 'lucide-react';
import { navLinks, profile } from '@/data/portfolio';
import { ThemeToggle } from './ThemeToggle';

type NavbarProps = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

export function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'border-b border-ink-200/70 bg-ink-50/80 backdrop-blur-xl dark:border-white/10 dark:bg-ink-950/80'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="container-px flex h-16 items-center justify-between sm:h-[4.5rem]">
          <a href="#home" className="group flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 font-display text-sm font-bold text-white shadow-lg shadow-brand-600/30 transition-transform group-hover:scale-105">
              SK
            </span>
            <span className="hidden font-display text-sm font-semibold tracking-tight sm:block">
              Sumanth R K
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === link.href.replace('#', '')
                    ? 'text-brand-600 dark:text-brand-300'
                    : 'text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-white'
                }`}
              >
                {active === link.href.replace('#', '') && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-brand-500/10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hidden h-9 w-9 items-center justify-center rounded-full border border-ink-200 bg-white/70 text-ink-700 transition-colors hover:bg-white sm:inline-flex dark:border-white/10 dark:bg-white/5 dark:text-ink-200 dark:hover:bg-white/10"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hidden h-9 w-9 items-center justify-center rounded-full border border-ink-200 bg-white/70 text-ink-700 transition-colors hover:bg-white sm:inline-flex dark:border-white/10 dark:bg-white/5 dark:text-ink-200 dark:hover:bg-white/10"
            >
              <Linkedin size={18} />
            </a>
            <ThemeToggle theme={theme} toggle={toggleTheme} />
            <a
              href="/Sumanth_RK_CV.pdf"
              download="Sumanth_RK_CV.pdf"
              className="hidden btn-primary !px-4 !py-2 !text-xs lg:inline-flex"
            >
              <Download size={15} /> Resume
            </a>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 bg-white/70 text-ink-700 md:hidden dark:border-white/10 dark:bg-white/5 dark:text-ink-200"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-ink-200/70 bg-ink-50/95 backdrop-blur-xl md:hidden dark:border-white/10 dark:bg-ink-950/95"
          >
            <div className="container-px flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-ink-700 transition-colors hover:bg-brand-500/10 dark:text-ink-200"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/Sumanth_RK_CV.pdf"
                download="Sumanth_RK_CV.pdf"
                onClick={() => setOpen(false)}
                className="btn-primary mt-2"
              >
                <Download size={16} /> Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
