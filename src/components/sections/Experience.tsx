import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { experienceList } from '@/data/portfolio';
import { SectionHeading } from '@/components/SectionHeading';

export function Experience() {
  return (
    <section id="journey" className="section-pad relative border-t border-white/[0.06]">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-1/4 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-blue-600/[0.04] blur-[150px]" />
      </div>

      <div className="container-px">
        {/* Section Heading */}
        <SectionHeading
          number="05"
          eyebrow="PROFESSIONAL JOURNEY"
          title="Engineering milestones, deliverables, and architecture roles."
          description="A structured timeline of professional engineering development, core responsibilities, and delivered systems."
        />

        {/* Structured Timeline */}
        <div className="relative mx-auto max-w-4xl mt-12 sm:mt-16">
          {/* Timeline Vertical Guide Line */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-4 sm:left-8 top-4 bottom-4 w-px bg-white/[0.12]"
          />

          <div className="space-y-10 sm:space-y-14">
            {experienceList.map((exp, index) => (
              <div key={exp.id} className="relative flex items-start gap-6 sm:gap-10">
                
                {/* Node Milestone Icon */}
                <div className="relative z-10 grid h-8 w-8 sm:h-12 sm:w-12 shrink-0 place-items-center rounded-xl border border-cyan-500/40 bg-[#090d16] text-cyan-400 shadow-md shadow-cyan-500/10">
                  <Briefcase className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>

                {/* Content Card */}
                <div className="flex-1 rounded-2xl border border-white/[0.08] bg-[#0c101a] p-6 sm:p-8 transition-all duration-300 hover:border-cyan-500/30 hover:bg-[#101524]">
                  {/* Top Bar: Role, Company, Period, Type Badge */}
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-semibold text-cyan-400">
                          0{index + 1}
                        </span>
                        <span className="text-slate-600">•</span>
                        <span className="font-mono text-xs text-slate-400 flex items-center gap-1.5">
                          <Calendar size={12} /> {exp.period}
                        </span>
                      </div>
                      <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <p className="mt-1 font-mono text-xs sm:text-sm font-semibold text-cyan-300 flex items-center gap-2">
                        <span>{exp.company}</span>
                        {exp.location && (
                          <>
                            <span className="text-slate-600">•</span>
                            <span className="font-normal text-slate-400 flex items-center gap-1">
                              <MapPin size={12} /> {exp.location}
                            </span>
                          </>
                        )}
                      </p>
                    </div>

                    {exp.type && (
                      <span className="rounded-full border border-white/[0.10] bg-white/[0.04] px-3 py-1 font-mono text-xs text-slate-300">
                        {exp.type}
                      </span>
                    )}
                  </div>

                  {/* Summary Description */}
                  <p className="mt-4 text-sm leading-relaxed text-slate-300">
                    {exp.description}
                  </p>

                  {/* Key Responsibilities */}
                  <div className="mt-5 pt-4 border-t border-white/[0.06]">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500 mb-2.5">
                      Key Responsibilities & Deliverables
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Major Contributions / Deliverables */}
                  {exp.deliverables && exp.deliverables.length > 0 && (
                    <div className="mt-4 rounded-xl border border-cyan-500/20 bg-cyan-950/10 p-3.5">
                      <p className="font-mono text-[10px] uppercase tracking-wider text-cyan-400 mb-1.5 font-semibold">
                        Key Outcomes
                      </p>
                      <ul className="space-y-1 text-xs text-slate-300">
                        {exp.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-center gap-2">
                            <CheckCircle2 size={13} className="text-cyan-400 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies Used Strip */}
                  <div className="mt-5 pt-4 border-t border-white/[0.06]">
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
