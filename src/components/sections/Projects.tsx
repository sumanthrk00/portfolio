import { useState } from 'react';
import { ArrowUpRight, Github, Star } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { SectionHeading } from '@/components/SectionHeading';

export function Projects() {
  const [active, setActive] = useState(0);

  return (
    <section id="projects" className="section-pad">
      <div className="container-px">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="A few systems I've designed and shipped end to end — from cloud architecture to mobile apps."
        />

        {/* Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {projects.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActive(i)}
              className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                active === i
                  ? 'text-white'
                  : 'text-slate-700 hover:text-slate-900 dark:text-ink-300 dark:hover:text-white'
              }`}
            >
              {active === i && (
                <span className="absolute inset-0 -z-10 rounded-full bg-brand-600 shadow-lg shadow-brand-600/30" />
              )}
              {p.title.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Showcase */}
        <div className="mt-10">
          <div className="card overflow-hidden shadow-lg border-slate-200/90 dark:border-white/10">
            <div className="grid lg:grid-cols-2">
              {/* Visual panel */}
              <div className={`relative min-h-[280px] overflow-hidden bg-gradient-to-br ${projects[active].accent} p-8`}>
                <div className="absolute inset-0 bg-grid opacity-20" />
                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-center gap-2 text-white/80">
                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur shadow-sm">
                      {String(active + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                      {projects[active].title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-white/90">{projects[active].tagline}</p>
                  </div>
                  {projects[active].metric && (
                    <div className="flex gap-6">
                      {projects[active].metric.map((m) => (
                        <div key={m.label}>
                          <p className="font-display text-xl font-bold text-white">{m.value}</p>
                          <p className="text-xs text-white/80">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Detail panel */}
              <div className="flex flex-col p-6 sm:p-8">
                <p className="text-sm leading-relaxed text-slate-700 dark:text-ink-300">
                  {projects[active].description}
                </p>
                <ul className="mt-5 space-y-2">
                  {projects[active].highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-sm text-slate-800 dark:text-ink-200">
                      <Star size={14} className="mt-0.5 shrink-0 text-accent-500 fill-accent-500/20" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {projects[active].tags.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
                <div className="mt-auto flex flex-wrap gap-3 pt-6 border-t border-slate-200/60 dark:border-white/10">
                  <a
                    href={projects[active].repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary !py-2.5 !text-xs"
                  >
                    <Github size={15} /> View code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid of all projects */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActive(i)}
              className={`card group p-5 text-left transition-all hover:-translate-y-1 ${
                active === i
                  ? 'ring-2 ring-brand-600 bg-brand-500/5 dark:bg-white/[0.06] shadow-md border-brand-500'
                  : 'hover:border-slate-300 dark:hover:border-white/20'
              }`}
            >
              <div className={`mb-4 h-1.5 w-12 rounded-full bg-gradient-to-r ${p.accent}`} />
              <p className="font-display text-sm font-bold text-slate-900 dark:text-white">{p.title}</p>
              <p className="mt-1 text-xs text-slate-600 dark:text-ink-400">{p.tagline}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-600 dark:text-brand-300">
                View case study <ArrowUpRight size={12} />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

