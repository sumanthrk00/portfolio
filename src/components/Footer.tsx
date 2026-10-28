import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export function Footer() {
  const [istTime, setIstTime] = useState<string>('--:--:--');

  useEffect(() => {
    function updateClock() {
      try {
        const timeStr = new Date().toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        });
        setIstTime(timeStr);
      } catch {
        setIstTime('15:30:00');
      }
    }
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="mt-[84px] border-t border-graphite">
      <div className="in">
        <div className="grid gap-10 py-11 lg:grid-cols-[1.2fr_1.3fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="iv-label grid h-[34px] w-[34px] place-items-center border border-graphite text-[10px] tracking-[0.18em]">
                SRK
              </span>
              <span className="text-[16px] italic text-graphite">Sumanth R K</span>
            </div>
            <p className="iv-label iv-muted mt-[18px]">Full Stack Software Engineer</p>
            <p className="iv-label iv-muted mt-2">
              Bengaluru, India · <span>{istTime} IST</span>
            </p>
          </div>

          <nav className="grid grid-cols-3 gap-x-7 gap-y-3 self-start">
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
            <a href="/Sumanth_RK_CV.pdf" download="Sumanth_RK_CV.pdf" className="iv-label lnk">
              Résumé
            </a>
          </nav>

          <div>
            <div className="mb-3.5 flex gap-2.5">
              <a
                href="https://github.com/sumanthrk00"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="soc-link"
              >
                <Github className="h-[18px] w-[18px]" strokeWidth={1.5} />
              </a>
              <a
                href="http://linkedin.com/in/sumanth-r-k"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="soc-link"
              >
                <Linkedin className="h-[18px] w-[18px]" strokeWidth={1.5} />
              </a>
              <a
                href="mailto:sumanthrk512@gmail.com"
                aria-label="Email"
                className="soc-link"
              >
                <Mail className="h-[18px] w-[18px]" strokeWidth={1.5} />
              </a>
              <a href="#home" aria-label="Back to top" className="soc-link">
                <ArrowUp className="h-[18px] w-[18px]" strokeWidth={1.5} />
              </a>
            </div>
            <a href="mailto:sumanthrk512@gmail.com" className="iv-label iv-muted lnk">
              sumanthrk512@gmail.com
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-ruleline py-5">
          <p className="iv-label iv-muted">© 2026 Sumanth R K — 12.9716 N / 77.5946 E</p>
          <p className="iv-label iv-muted">Built full stack · React · TypeScript · AWS</p>
        </div>
      </div>
    </footer>
  );
}
