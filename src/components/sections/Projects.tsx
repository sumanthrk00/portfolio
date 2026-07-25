import { useState } from 'react';
import { ArrowUpRight, ExternalLink, Github, Star } from 'lucide-react';
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
          description="A few systems I've designed and shipped end to end — from cloud architecture to streaming data pipelines."
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
              {p.title.startsWith('Real-Time') ? 'Real-Time' : p.title.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Showcase */}
        <div className="mt-10">
          <div className="card overflow-hidden shadow-lg border-slate-200/90 dark:border-white/10">
            <div className="grid lg:grid-cols-2">
              {/* Visual panel */}
              <div className={`relative min-h-[280px] overflow-hidden bg-gradient-to-br ${projects[active].accent} p-8 flex flex-col justify-between`}>
                <div className="absolute inset-0 bg-grid opacity-20" />
                <div className="relative flex items-center gap-2 text-white/80">
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur shadow-sm">
                    {String(active + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                  </span>
                </div>
                <div className="relative mt-6">
                  <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                    <a
                      href={projects[active].repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline inline-flex items-center gap-2"
                    >
                      {projects[active].title}
                      <ExternalLink size={20} className="inline-block opacity-80" />
                    </a>
                  </h3>
                  <p className="mt-1 text-sm font-medium text-white/90">{projects[active].tagline}</p>
                </div>
                {projects[active].metric && (
                  <div className="relative mt-6 flex gap-6">
                    {projects[active].metric.map((m) => (
                      <div key={m.label}>
                        <p className="font-display text-xl font-bold text-white">{m.value}</p>
                        <p className="text-xs text-white/80">{m.label}</p>
                      </div>
                    ))}
                  </div>
                )}
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
                    className="btn-primary !py-2.5 !text-xs inline-flex items-center gap-2"
                  >
                    <Github size={15} /> View on GitHub <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

