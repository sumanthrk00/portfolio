import { ShieldCheck, ArrowUp, Send, Sparkles, Rocket } from 'lucide-react';
import { profile } from '@/data/portfolio';

export function HackerEnding() {
  return (
    <section id="hacker-ending" className="relative py-20 overflow-hidden border-t border-slate-200/80 dark:border-emerald-900/30 bg-slate-950 text-slate-100">
      {/* Cyberpunk Matrix Ambient Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1.2px,transparent_1.2px)] [background-size:28px_28px] opacity-15 pointer-events-none" />
      
      {/* Soft Glow Orbs */}
      <div className="absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute right-10 bottom-0 h-52 w-52 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />

      <div className="container-px relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Cyber Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1.5 text-xs font-mono text-emerald-400 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            <ShieldCheck size={14} className="animate-pulse text-emerald-400" />
            <span>[ SESSION COMPLETE // ACCESS GRANTED ]</span>
          </div>

          {/* Main Thank You Message */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            <span className="inline-block transition-transform hover:scale-110">✨</span> Thank you for visiting my portfolio.
          </h2>

          {/* Tagline */}
          <p className="font-mono text-lg sm:text-xl md:text-2xl text-emerald-300 font-medium mb-8 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2">
            <span>Let's build something extraordinary together.</span>
            <Rocket size={22} className="inline text-emerald-400 animate-bounce" />
          </p>

          {/* Interactive Hacker HUD Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-mono text-sm font-semibold text-slate-950 shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all hover:bg-emerald-400 hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] active:scale-[0.98]"
            >
              <Send size={16} />
              <span>[ GET IN TOUCH ]</span>
            </a>

            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-3 font-mono text-sm font-semibold text-slate-300 backdrop-blur-md transition-all hover:border-emerald-500/50 hover:bg-slate-800 hover:text-emerald-400 active:scale-[0.98]"
            >
              <ArrowUp size={16} />
              <span>[ BACK TO TOP ]</span>
            </a>
          </div>

          {/* Cyber Sub-Footer Metadata */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-mono text-slate-500 border-t border-slate-800/80 pt-6 max-w-xl mx-auto">
            <span className="flex items-center gap-1.5">
              <Sparkles size={13} className="text-emerald-400" />
              <span>Dev: <strong>{profile.name}</strong></span>
            </span>
            <span className="hidden sm:inline text-slate-700">•</span>
            <span className="text-emerald-500/70">01010100 01001000 01000001 01001110 01001011 00100000 01011001 01001111 01000101</span>
          </div>

        </div>
      </div>
    </section>
  );
}
