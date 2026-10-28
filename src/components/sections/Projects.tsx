import { useState } from 'react';
import { projects } from '@/data/portfolio';
import { ProjectCard } from '@/components/ProjectCard';
import { SectionHeading } from '@/components/SectionHeading';

export function Projects() {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Cloud & Infrastructure', 'Backend & Data', 'Mobile & Cloud', 'DevOps & IaC'];

  const featuredProject = projects.find((p) => p.featured) || projects[0];
  const otherProjects = projects.filter((p) => p.id !== featuredProject.id);

  const filteredProjects =
    filter === 'All'
      ? otherProjects
      : otherProjects.filter((p) => p.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="projects" className="section-pad relative border-t border-white/[0.06]">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-80 w-80 rounded-full bg-cyan-500/[0.04] blur-[150px]" />
      </div>

      <div className="container-px">
        {/* Section Heading */}
        <SectionHeading
          number="06"
          eyebrow="SELECTED PROJECTS"
          title="Projects built to solve meaningful problems."
          description="A curated portfolio of software builds taken from architectural concept to production deployment."
        />

        {/* Flagship Featured Build */}
        <div className="mt-12 sm:mt-16">
          <ProjectCard project={featuredProject} featured={true} />
        </div>

        {/* Category Filters */}
        <div className="mt-16 sm:mt-20 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-4">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`rounded-lg px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors ${
                  filter === cat
                    ? 'border border-cyan-500/40 bg-cyan-500/10 text-cyan-300 font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <span className="font-mono text-xs text-slate-500">
            Showing {filteredProjects.length + 1} engineering builds
          </span>
        </div>

        {/* Grid of Other Projects */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} featured={false} />
          ))}
        </div>
      </div>
    </section>
  );
}
