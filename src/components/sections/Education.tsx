import { GraduationCap, Award, Calendar, BookOpen, CheckCircle2 } from 'lucide-react';
import { educationList } from '@/data/portfolio';
import { SectionHeading } from '@/components/SectionHeading';

export function Education() {
  return (
    <section id="education" className="section-pad relative border-t border-white/[0.06]">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/3 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-cyan-500/[0.04] blur-[150px]" />
      </div>

      <div className="container-px">
        {/* Section Heading */}
        <SectionHeading
          number="04"
          eyebrow="EDUCATION"
          title="Academic foundation and qualifications."
          description="Formal academic qualifications in computer science engineering and analytical sciences."
        />

        {/* Vertical Timeline Layout */}
        <div className="relative mx-auto max-w-4xl mt-12 sm:mt-16">
          {/* Subtle Vertical Timeline Track Line */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-4 sm:left-8 top-4 bottom-4 w-px bg-white/[0.12]"
          />

          <div className="space-y-10 sm:space-y-12">
            {educationList.map((item, index) => (
              <div key={item.id} className="relative flex items-start gap-6 sm:gap-10">
                
                {/* Timeline Icon Node */}
                <div className="relative z-10 grid h-8 w-8 sm:h-12 sm:w-12 shrink-0 place-items-center rounded-xl border border-cyan-500/40 bg-[#090d16] text-cyan-400 shadow-md shadow-cyan-500/10">
                  <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>

                {/* Timeline Content Card */}
                <div className="flex-1 rounded-2xl border border-white/[0.08] bg-[#0c101a] p-6 sm:p-8 transition-all duration-300 hover:border-cyan-500/30 hover:bg-[#101524]">
                  {/* Top Header: Degree, Grade Badge, and Period */}
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-semibold text-cyan-400">
                          0{index + 1}
                        </span>
                        <span className="text-slate-600">•</span>
                        <span className="font-mono text-xs text-slate-400">
                          {item.startYear ? `${item.startYear} — ${item.endYear}` : item.endYear}
                        </span>
                      </div>
                      <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold text-white">
                        {item.degree}
                      </h3>
                      <p className="mt-1 font-mono text-xs sm:text-sm font-semibold text-cyan-300">
                        {item.field}
                      </p>
                    </div>

                    {item.grade && (
                      <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 font-mono text-xs font-bold text-cyan-300 shadow-sm">
                        <Award size={13} className="text-cyan-400" />
                        <span>{item.grade}</span>
                      </div>
                    )}
                  </div>

                  {/* Institution Name */}
                  <p className="mt-3 text-sm font-medium text-slate-300">
                    {item.institution}
                  </p>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>

                  {/* Key Highlights */}
                  {item.highlights && item.highlights.length > 0 && (
                    <div className="mt-5 pt-4 border-t border-white/[0.06]">
                      <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500 mb-2">
                        Academic Highlights
                      </p>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {item.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
