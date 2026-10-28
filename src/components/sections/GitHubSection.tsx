import { useEffect, useState } from 'react';
import { GitFork, Github, Loader2, Star, AlertCircle, ExternalLink, ArrowUpRight } from 'lucide-react';
import { profile, fallbackRepos } from '@/data/portfolio';
import { GitHubRepo } from '@/types/portfolio';
import { SectionHeading } from '@/components/SectionHeading';

function formatTimeAgo(dateString: string): string {
  try {
    const diff = Date.now() - new Date(dateString).getTime();
    const days = Math.floor(diff / 86400000);
    if (days < 1) return 'today';
    if (days < 30) return `${days}d ago`;
    const months = Math.floor(days / 30);
    if (months < 12) return `${months}mo ago`;
    return `${Math.floor(months / 12)}y ago`;
  } catch {
    return 'recent';
  }
}

const languageColors: Record<string, string> = {
  Java: 'bg-amber-400',
  Python: 'bg-blue-400',
  TypeScript: 'bg-sky-400',
  JavaScript: 'bg-yellow-400',
  'HCL / Terraform': 'bg-purple-400',
  HTML: 'bg-orange-500',
  CSS: 'bg-blue-500',
};

export function GitHubSection() {
  const [repos, setRepos] = useState<GitHubRepo[]>(fallbackRepos);
  const [loading, setLoading] = useState<boolean>(true);
  const [isLive, setIsLive] = useState<boolean>(false);

  useEffect(() => {
    let cancelled = false;

    async function fetchRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${profile.github}/repos?sort=updated&per_page=6&type=owner`,
          {
            headers: {
              Accept: 'application/vnd.github.v3+json',
            },
          }
        );

        if (!res.ok) {
          // Graceful fallback to verified repositories
          if (!cancelled) {
            setRepos(fallbackRepos);
            setLoading(false);
          }
          return;
        }

        const data: GitHubRepo[] = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          if (!cancelled) {
            setRepos(data.slice(0, 6));
            setIsLive(true);
          }
        } else {
          if (!cancelled) setRepos(fallbackRepos);
        }
      } catch {
        if (!cancelled) {
          setRepos(fallbackRepos);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchRepos();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="github" className="section-pad relative border-t border-white/[0.06]">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-1/3 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-cyan-500/[0.04] blur-[150px]" />
      </div>

      <div className="container-px">
        {/* Section Heading */}
        <SectionHeading
          number="07"
          eyebrow="OPEN SOURCE"
          title="Code, collaboration, and continuous learning."
          description="Public repositories, open-source architectures, and developer experiments published on GitHub."
        />

        {/* Profile Link Header Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-white/[0.08] bg-[#0c101a] p-4 sm:p-5">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
              <Github size={20} />
            </span>
            <div>
              <p className="font-display text-sm font-semibold text-white">
                GitHub Profile
              </p>
              <p className="font-mono text-xs text-slate-400">
                @{profile.github} • Verified Developer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-slate-400">
              <span className={`h-2 w-2 rounded-full ${isLive ? 'bg-emerald-400' : 'bg-cyan-400'}`} />
              <span>{isLive ? 'Live API Feed' : 'Verified Repositories'}</span>
            </span>

            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !px-3.5 !py-1.5 !text-xs font-mono"
            >
              <span>Visit Profile</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        {/* Repository Grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#0c101a] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-[#101524] hover:shadow-xl hover:shadow-cyan-500/5"
            >
              <div>
                {/* Repo Top: Icon & Updated time */}
                <div className="flex items-start justify-between">
                  <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-slate-300 transition-colors group-hover:border-cyan-500/40 group-hover:text-cyan-400">
                    <Github size={16} />
                  </span>
                  <span className="font-mono text-[11px] text-slate-500">
                    {formatTimeAgo(repo.updated_at)}
                  </span>
                </div>

                <h3 className="mt-4 font-mono text-base font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  <span className="line-clamp-1">{repo.name}</span>
                  <ArrowUpRight size={14} className="shrink-0 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-slate-400 line-clamp-3">
                  {repo.description || 'Open-source software project with clean architecture and modern developer tooling.'}
                </p>
              </div>

              {/* Repo Footer: Language & Statistics */}
              <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                {repo.language ? (
                  <span className="flex items-center gap-1.5">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        languageColors[repo.language] || 'bg-cyan-400'
                      }`}
                    />
                    <span className="text-slate-300">{repo.language}</span>
                  </span>
                ) : (
                  <span className="text-slate-500">Code</span>
                )}

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 hover:text-white transition-colors">
                    <Star size={13} className="text-slate-400" />
                    <span>{repo.stargazers_count}</span>
                  </span>
                  <span className="flex items-center gap-1 hover:text-white transition-colors">
                    <GitFork size={13} className="text-slate-400" />
                    <span>{repo.forks_count}</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
