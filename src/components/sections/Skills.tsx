import { Layout, Server, Database, Cloud, Wrench, Code2 } from 'lucide-react';
import { skillCategories } from '@/data/portfolio';
import { SectionHeading } from '@/components/SectionHeading';

const iconMap: Record<string, typeof Layout> = {
  Layout,
  Server,
  Database,
  Cloud,
  Wrench,
};

export function Skills() {
  return (
    <section id="skills" className="section-pad relative border-t border-white/[0.06]">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-1/4 top-1/3 h-80 w-80 rounded-full bg-blue-600/[0.04] blur-[150px]" />
      </div>

      <div className="container-px">
        {/* Section Heading */}
        <SectionHeading
          number="03"
          eyebrow="TECHNICAL EXPERTISE"
          title="Core technologies, frameworks, and infrastructure tools."
          description="A curated toolkit organized by discipline. Maintained centrally without arbitrary proficiency percentages."
        />

        {/* Grouped Skills Matrix */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = iconMap[category.iconName] || Code2;
            return (
              <div
                key={category.id}
                className="group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0c101a] p-6 sm:p-7 transition-all duration-300 hover:border-cyan-500/40 hover:bg-[#101524] hover:shadow-xl hover:shadow-cyan-500/5"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-cyan-400">
                      {category.number}
                    </span>
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-300 transition-colors group-hover:border-cyan-500/40 group-hover:bg-cyan-500/10 group-hover:text-cyan-400">
                      <Icon size={18} />
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">
                    {category.description}
                  </p>
                </div>

                {/* Skills Chips */}
                <div className="mt-6 pt-5 border-t border-white/[0.08]">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-slate-200 transition-all hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-300"
                      >
                        <span>{skill.name}</span>
                        {skill.tag && (
                          <span className="text-[10px] text-slate-500">
                            • {skill.tag}
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Small Note */}
        <div className="mt-10 flex items-center justify-between rounded-xl border border-white/[0.06] bg-[#090d16] px-5 py-3 font-mono text-xs text-slate-400">
          <span>* Centralized in src/data/portfolio.ts</span>
          <span className="text-cyan-400">Type-Safe • Verified Skills</span>
        </div>
      </div>
    </section>
  );
}
