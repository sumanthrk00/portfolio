export function OpenSource() {
  const repos = [
    {
      num: '01',
      title: 'Portfolio',
      desc: 'Full-stack responsive developer portfolio application built with React, TypeScript, and Tailwind CSS.',
      url: 'https://github.com/sumanthrk00/portfolio',
    },
    {
      num: '02',
      title: 'Multi Tenant Platform',
      desc: 'Open-source software project with clean architecture and modern developer tooling.',
      url: 'https://github.com/sumanthrk00/multi-tenant-platform',
    },
    {
      num: '03',
      title: 'Aria Assistant',
      desc: 'Open-source software project with clean architecture and modern developer tooling.',
      url: 'https://github.com/sumanthrk00/Aria-assistant',
    },
    {
      num: '04',
      title: 'Offline Sync App',
      desc: 'Open-source software project with clean architecture and modern developer tooling.',
      url: 'https://github.com/sumanthrk00/offline-sync-app',
    },
    {
      num: '05',
      title: 'Event Ingestion Pipeline 123',
      desc: 'Open-source software project with clean architecture and modern developer tooling.',
      url: 'https://github.com/sumanthrk00/event-ingestion-pipeline-123',
    },
  ];

  return (
    <section id="opensource" className="sec-ivory">
      <div className="in">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <div className="mb-[22px] flex items-center gap-[14px]">
              <span className="iv-label iv-signal">08</span>
              <span className="h-px w-[44px] bg-vermilion" />
              <span className="iv-label iv-muted">Open source</span>
            </div>
            <h2 className="max-w-[760px] text-[2rem] font-normal leading-[1.1] tracking-[-0.02em] text-graphite sm:text-[2.875rem]">
              Code in the open.
            </h2>
            <p className="mt-4 max-w-[600px] text-[18px] leading-[1.6] text-bodyink">
              Side projects and experiments, all public on GitHub.
            </p>
          </div>
          <a
            href="https://github.com/sumanthrk00"
            target="_blank"
            rel="noreferrer"
            className="btn-ivory"
          >
            @sumanthrk00
          </a>
        </div>

        <div className="mt-10 border-t border-graphite">
          {repos.map((repo) => (
            <a
              key={repo.num}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              className="wash-row group grid gap-x-5 gap-y-2 border-b border-ruleline py-5 sm:grid-cols-[50px_260px_1fr_24px] sm:items-baseline"
            >
              <span className="iv-label iv-muted">{repo.num}</span>
              <h3 className="text-[21px] font-normal leading-[1.25] text-graphite transition-colors group-hover:text-vermilion">
                {repo.title}
              </h3>
              <p className="text-[16px] leading-[1.55] text-bodyink">{repo.desc}</p>
              <span className="iv-label iv-signal justify-self-end">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
