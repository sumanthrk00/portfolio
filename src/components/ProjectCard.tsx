import { Github, ExternalLink, ArrowUpRight, CheckCircle2, Star, Layers } from 'lucide-react';
import { Project } from '@/types/portfolio';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const hasRepo = Boolean(project.repoUrl && project.repoUrl.trim().length > 0);
  const hasLive = Boolean(project.liveUrl && project.liveUrl.trim().length > 0);

  if (featured) {
    return (
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.12] bg-[#0c101a] shadow-2xl transition-all duration-300 hover:border-cyan-500/40">
        {/* Subtle Ambient Backlight */}
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

        <div className="grid lg:grid-cols-12">
          {/* Main Content Column (7 cols) */}
          <div className="p-6 sm:p-9 lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="rounded-md border border-cyan-500/40 bg-cyan-950/40 px-2.5 py-1 font-mono text-[11px] font-semibold tracking-wider text-cyan-300">
                  FLAGSHIP BUILD
                </span>
                <span className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-slate-400">
                  {project.category}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {project.title}
              </h3>

              <p className="mt-2 text-base font-medium text-cyan-300 font-mono">
                {project.tagline}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="mt-6 space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics & Action Buttons */}
            <div className="mt-8 pt-6 border-t border-white/[0.08]">
              {project.metrics && project.metrics.length > 0 && (
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-2.5 text-center"
                    >
                      <span className="block font-display text-base font-bold text-white">
                        {metric.value}
                      </span>
                      <span className="block font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                {hasRepo && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary !px-4 !py-2 !text-xs font-mono"
                  >
                    <Github size={14} />
                    <span>Source Code</span>
                    <ArrowUpRight size={13} />
                  </a>
                )}
                {hasLive && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary !px-4 !py-2 !text-xs font-mono"
                  >
                    <ExternalLink size={14} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Architecture Visual Column (5 cols) */}
          <div className="relative border-t lg:border-t-0 lg:border-l border-white/[0.08] bg-[#090d15] p-6 sm:p-9 lg:col-span-5 flex flex-col justify-between">
            <div className="absolute inset-0 bg-grid-editorial opacity-30 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
                  Architecture Blueprint
                </span>
                <span className="font-mono text-xs text-cyan-400">Cloud VPC</span>
              </div>

              {/* Architectural Topology Visual Mockup */}
              <div className="mt-6 rounded-xl border border-white/[0.08] bg-[#0d121c] p-4 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between rounded border border-cyan-500/30 bg-cyan-950/20 px-3 py-2 text-cyan-300">
                  <span>Client Ingress</span>
                  <span>AWS Route53 + ALB</span>
                </div>
                <div className="flex justify-center text-slate-500 text-xs">↓</div>
                <div className="flex items-center justify-between rounded border border-blue-500/30 bg-blue-950/20 px-3 py-2 text-blue-300">
                  <span>Service Fleet</span>
                  <span>EC2 Auto-Scaling Group</span>
                </div>
                <div className="flex justify-center text-slate-500 text-xs">↓</div>
                <div className="flex items-center justify-between rounded border border-emerald-500/30 bg-emerald-950/20 px-3 py-2 text-emerald-300">
                  <span>Data Layer</span>
                  <span>Multi-AZ MySQL RDS</span>
                </div>
              </div>

              <div className="mt-6 rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
                <p className="font-mono text-[11px] uppercase tracking-wider text-slate-400 mb-1">
                  Resilience Guarantee
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Fault-tolerant across Availability Zones with automated health checks, ALB traffic shedding, and least-privilege IAM service roles.
                </p>
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-4 border-t border-white/[0.08] flex items-center justify-between font-mono text-[11px] text-slate-400">
              <span>Verified Implementation</span>
              <span className="text-cyan-400">sumanthrk00</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Standard Project Card
  return (
    <div className="group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0c101a] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-[#101524] hover:shadow-xl hover:shadow-cyan-500/5">
      <div>
        {/* Category Header */}
        <div className="flex items-center justify-between">
          <span className="rounded border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-slate-400">
            {project.category}
          </span>
          <span className="font-mono text-xs text-cyan-400 group-hover:translate-x-0.5 transition-transform">
            <ArrowUpRight size={16} />
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="mt-4 font-display text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>

        <p className="mt-1 font-mono text-xs text-cyan-400 font-medium">
          {project.tagline}
        </p>

        <p className="mt-3 text-sm leading-relaxed text-slate-400 line-clamp-3">
          {project.description}
        </p>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className="mt-4 space-y-1.5 text-xs text-slate-300">
            {project.highlights.slice(0, 2).map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                <span className="line-clamp-1">{highlight}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Card Footer: Tags & Valid Action Buttons */}
      <div className="mt-6 pt-5 border-t border-white/[0.08]">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-slate-300"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="font-mono text-[10px] text-slate-500 px-1 py-0.5">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 pt-2 border-t border-white/[0.04]">
          {hasRepo && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-cyan-400 transition-colors hover:text-cyan-300"
            >
              <Github size={13} />
              <span>Source Code</span>
              <ArrowUpRight size={11} />
            </a>
          )}
          {hasRepo && hasLive && <span className="text-slate-600">•</span>}
          {hasLive && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-300 transition-colors hover:text-white"
            >
              <ExternalLink size={13} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
