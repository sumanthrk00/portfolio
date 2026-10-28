import { ArrowUpRight } from 'lucide-react';

export function SelectedWork() {
  const secondaryProjects = [
    {
      num: '02',
      tag: 'Real-Time',
      title: 'Event Ingestion Pipeline',
      desc: 'Open-source software project with clean architecture and modern developer tooling.',
      lang: 'Python',
      url: 'https://github.com/sumanthrk00/event-ingestion-pipeline-123',
    },
    {
      num: '03',
      tag: 'Cross-Platform',
      title: 'Offline Sync App',
      desc: 'Open-source software project with clean architecture and modern developer tooling.',
      lang: 'TypeScript',
      url: 'https://github.com/sumanthrk00/offline-sync-app',
    },
    {
      num: '04',
      tag: 'Assistant',
      title: 'Aria Assistant',
      desc: 'Open-source software project with clean architecture and modern developer tooling.',
      lang: 'TypeScript',
      url: 'https://github.com/sumanthrk00/Aria-assistant',
    },
  ];

  return (
    <section id="work" className="sec-ivory">
      <div className="in">
        <div>
          <div className="mb-[22px] flex items-center gap-[14px]">
            <span className="iv-label iv-signal">07</span>
            <span className="h-px w-[44px] bg-vermilion" />
            <span className="iv-label iv-muted">Selected work</span>
            <span className="iv-label iv-muted ml-auto hidden sm:block">01 / 04</span>
          </div>
          <h2 className="max-w-[760px] text-[2rem] font-normal leading-[1.1] tracking-[-0.02em] text-graphite sm:text-[2.875rem]">
            Systems designed and shipped end to end.
          </h2>
          <p className="mt-4 max-w-[600px] text-[18px] leading-[1.6] text-bodyink">
            A few builds I&#x27;ve taken from cloud architecture to production — starting with the
            flagship platform.
          </p>
        </div>

        {/* Flagship Big Card */}
        <div className="relative mt-10 grid border border-graphite bg-parchment shadow-[0_18px_36px_rgba(22,19,15,0.15)] lg:grid-cols-2">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-px bg-ruleline lg:block"
          />

          {/* Left Side */}
          <div className="px-6 pb-8 pt-7 sm:px-9">
            <div className="flex flex-wrap gap-2">
              <span className="tag-ivory">Multi-Tenant</span>
              <span className="tag-ivory">Real-Time</span>
              <span className="tag-ivory">Cloud</span>
              <span className="tag-ivory">Infrastructure</span>
            </div>

            <h3 className="mt-4 text-[1.75rem] font-normal leading-[1.1] tracking-[-0.02em] sm:text-[36px]">
              <a
                href="https://github.com/sumanthrk00/multi-tenant-platform"
                target="_blank"
                rel="noreferrer"
                className="lnk inline-flex items-start gap-2"
              >
                Multi-Tenant Cloud Platform
                <ArrowUpRight className="mt-2 h-5 w-5 shrink-0 text-vermilion" />
              </a>
            </h3>

            <p className="mt-6 border-l-2 border-vermilion pl-[18px] text-[26px] italic leading-[1.3] text-vermilion sm:text-[30px]">
              A scalable SaaS backbone on AWS
            </p>

            <div className="my-6 flex gap-10">
              <div>
                <span className="block text-[38px] font-normal leading-none tracking-[-0.02em] sm:text-[44px]">
                  2M+
                </span>
                <span className="iv-label iv-muted">Daily requests</span>
              </div>
              <div>
                <span className="block text-[38px] font-normal leading-none tracking-[-0.02em] sm:text-[44px]">
                  99.98%
                </span>
                <span className="iv-label iv-muted">Uptime</span>
              </div>
            </div>

            <p className="text-[17px] leading-[1.7] text-bodyink">
              Designed and shipped a multi-tenant platform serving 2M+ daily requests. Provisioned
              isolated VPCs, an Application Load Balancer fronting EC2 autoscaling groups, and API
              Gateway with per-tenant throttling and usage plans.
            </p>
          </div>

          {/* Right Side */}
          <div className="px-6 pb-8 pt-7 sm:px-9">
            <div className="plate-ivory">
              <span className="inline-block relative aspect-[16/9] w-full object-cover">
                <img
                  src="/project-plate.jpg"
                  alt="Multi-Tenant Cloud Platform"
                  className="h-full w-full object-cover"
                />
              </span>
              <p className="cap-ivory">Plate 07 — Multi-Tenant Cloud Platform</p>
            </div>

            <ul className="mt-6 space-y-3">
              <li className="flex gap-3 text-[16px] leading-[1.6] text-bodyink">
                <span className="mt-[9px] h-[5px] w-[5px] shrink-0 bg-vermilion" />
                Autoscaling EC2 fleet behind an ALB with zero-downtime deploys
              </li>
              <li className="flex gap-3 text-[16px] leading-[1.6] text-bodyink">
                <span className="mt-[9px] h-[5px] w-[5px] shrink-0 bg-vermilion" />
                Per-tenant throttling and API keys via API Gateway usage plans
              </li>
              <li className="flex gap-3 text-[16px] leading-[1.6] text-bodyink">
                <span className="mt-[9px] h-[5px] w-[5px] shrink-0 bg-vermilion" />
                Private subnets + NAT gateways with least-privilege IAM roles
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                'Java',
                'Spring Boot',
                'AWS',
                'EC2',
                'VPC',
                'API Gateway',
                'Load Balancer',
                'MySQL',
              ].map((tech) => (
                <span key={tech} className="chip-ivory">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-7">
              <a
                href="https://github.com/sumanthrk00/multi-tenant-platform"
                target="_blank"
                rel="noreferrer"
                className="btn-ivory"
              >
                View on GitHub
                <ArrowUpRight className="h-[13px] w-[13px]" />
              </a>
            </div>
          </div>
        </div>

        {/* Secondary 3 Projects Grid */}
        <div className="mt-10 grid border-l border-t border-ruleline lg:grid-cols-3">
          {secondaryProjects.map((p) => (
            <div
              key={p.num}
              className="wash-row flex h-full flex-col border-b border-r border-ruleline px-6 py-7"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="tag-ivory">{p.tag}</span>
                <span className="iv-label iv-muted">{p.num}</span>
              </div>
              <h3 className="mt-5 text-[21px] font-normal leading-[1.25] text-graphite">
                {p.title}
              </h3>
              <p className="mt-2.5 flex-1 text-[16px] leading-[1.6] text-bodyink">{p.desc}</p>
              <div className="mt-5 flex items-center justify-between border-t border-ruleline pt-4">
                <span className="iv-label iv-muted">{p.lang}</span>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="iv-label iv-signal lnk inline-flex items-center gap-2"
                >
                  Repository
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
