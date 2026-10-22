import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { profile } from '@/data/portfolio';

export function Footer() {
  return (
    <footer className="relative border-t border-ink-200/70 bg-ink-50/50 dark:border-white/10 dark:bg-ink-950/50">
      {/* Thank You Farewell Message */}
      <div className="border-b border-ink-200/60 py-10 text-center dark:border-white/5 bg-gradient-to-b from-brand-500/[0.02] to-transparent">
        <div className="container-px">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-ink-900 dark:text-white">
            ✨ Thank you for visiting my portfolio.
          </h3>
          <p className="mt-2 text-sm sm:text-base font-medium text-brand-600 dark:text-brand-300">
            Let's build something extraordinary together. 🚀
          </p>
        </div>
      </div>

      <div className="container-px py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 font-display text-sm font-bold text-white">
              SK
            </span>
            <div>
              <p className="font-display text-sm font-semibold">{profile.name}</p>
              <p className="text-xs text-ink-500 dark:text-ink-400">{profile.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid h-9 w-9 place-items-center rounded-full border border-ink-200 text-ink-700 transition-colors hover:bg-white dark:border-white/10 dark:text-ink-200 dark:hover:bg-white/10"
            >
              <Github size={17} />
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-9 w-9 place-items-center rounded-full border border-ink-200 text-ink-700 transition-colors hover:bg-white dark:border-white/10 dark:text-ink-200 dark:hover:bg-white/10"
            >
              <Linkedin size={17} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              onClick={(e) => {
                e.preventDefault();
                window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`, '_blank');
              }}
              target="_blank"
              rel="noreferrer"
              aria-label="Email"
              className="grid h-9 w-9 place-items-center rounded-full border border-ink-200 text-ink-700 transition-colors hover:bg-white dark:border-white/10 dark:text-ink-200 dark:hover:bg-white/10"
            >
              <Mail size={17} />
            </a>
          </div>

          <a
            href="#home"
            className="group inline-flex items-center gap-2 text-xs font-medium text-ink-500 transition-colors hover:text-brand-600 dark:text-ink-400 dark:hover:text-brand-300"
          >
            Back to top
            <span className="grid h-8 w-8 place-items-center rounded-full border border-ink-200 transition-transform group-hover:-translate-y-0.5 dark:border-white/10">
              <ArrowUp size={14} />
            </span>
          </a>
        </div>

        <div className="mt-8 border-t border-ink-200/60 pt-6 text-center text-xs text-ink-400 dark:border-white/5 dark:text-ink-500">
          <p>
            © {new Date().getFullYear()} {profile.name}. Designed & built with React, TypeScript,
            and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
