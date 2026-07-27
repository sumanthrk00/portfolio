// This code was written for the GitHubSection component
import { useEffect, useState } from 'react';
import { GitFork, Github, Loader2, Star, AlertCircle, ExternalLink } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { SectionHeading } from '@/components/SectionHeading';

type Repo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
  topics?: string[];
};

function timeAgo(date: string): string {
  const diff = Date.now() - new Date(date).getTime();
  const days = Math.floor(diff / 86400000);
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}

export function GitHubSection() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${profile.github}/repos?sort=updated&per_page=6&type=owner`,
        );
        if (!res.ok) throw new Error(`GitHub API responded ${res.status}`);
        const data: Repo[] = await res.json();
        const formatted = data.map((repo) => {
          let cleanName = repo.name
            .replace(/[-_]/g, ' ')
            .replace(/\b(main\d*|master|v\d+)\b/gi, '')
            .trim();
          cleanName = cleanName ? cleanName.replace(/\b\w/g, (c) => c.toUpperCase()) : repo.name;
          
          const defaultDesc = repo.name.toLowerCase().includes('portfolio')
            ? 'Full-stack responsive developer portfolio application built with React, TypeScript, and Tailwind CSS.'
            : 'Open-source software project with clean architecture and modern developer tooling.';
            
          return {
            ...repo,
            name: cleanName,
            description: repo.description || defaultDesc,
          };
        });

        const sorted = [...formatted]
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6);
        if (!cancelled) {
          setRepos(sorted);
          setError(null);
        }
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : 'Failed to load repositories');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="github" className="section-pad relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-1/4 top-1/3 h-72 w-72 rounded-full bg-accent-500/10 blur-[120px]" />
      </div>
      <div className="container-px">
        <SectionHeading
          eyebrow="GitHub"
          title="Open source & side projects"
          description="Live data from my GitHub profile — top repositories by stars."
        />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/60 px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-ink-200 dark:hover:bg-white/10"
          >
            <Github size={16} /> @{profile.github}
            <ExternalLink size={13} className="text-ink-400" />
          </a>
        </div>

        <div className="mt-10">
          {loading && (
            <div className="flex items-center justify-center gap-3 py-16 text-ink-500 dark:text-ink-400">
              <Loader2 className="animate-spin" size={20} />
              <span className="text-sm">Loading repositories…</span>
            </div>
          )}

          {error && !loading && (
            <div className="mx-auto max-w-md rounded-2xl border border-amber-300/40 bg-amber-50 p-6 text-center dark:border-amber-500/20 dark:bg-amber-500/10">
              <AlertCircle className="mx-auto text-amber-600 dark:text-amber-400" size={24} />
              <p className="mt-3 text-sm text-amber-700 dark:text-amber-300">
                Could not load live GitHub data right now. The GitHub API rate limit may have been reached.
              </p>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost mt-4 !py-2 !text-xs"
              >
                <Github size={14} /> Visit GitHub profile
              </a>
            </div>
          )}

          {repos && !loading && !error && (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="card group flex flex-col p-5 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink-100 text-ink-700 transition-colors group-hover:bg-brand-500/10 group-hover:text-brand-600 dark:bg-white/5 dark:text-ink-200 dark:group-hover:bg-brand-500/15 dark:group-hover:text-brand-300">
                      <Github size={18} />
                    </span>
                    <span className="font-mono text-xs text-ink-400 dark:text-ink-500">
                      {timeAgo(repo.updated_at)}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold link-underline">
                    {repo.name}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-sm text-ink-500 dark:text-ink-400">
                    {repo.description || 'No description provided.'}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-4">
                    <div className="flex items-center gap-3 text-xs text-ink-500 dark:text-ink-400">
                      {repo.language && (
                        <span className="flex items-center gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-brand-500" />
                          {repo.language}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Star size={13} /> {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork size={13} /> {repo.forks_count}
                      </span>
                    </div>
                    <ExternalLink size={14} className="text-ink-400 transition-colors group-hover:text-brand-500" />
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

