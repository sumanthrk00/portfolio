import { Blocks, Gauge, ShieldCheck, Cloud, Sparkles, Users } from 'lucide-react';

export function Principles() {
  const principles = [
    {
      num: '01',
      icon: Blocks,
      title: 'Clean Architecture',
      desc: 'Modular, maintainable codebases structured for long-term scalability, strict type safety, and clear separation of concerns.',
    },
    {
      num: '02',
      icon: Gauge,
      title: 'Performance First',
      desc: 'Optimizing rendering cycles, bundling strategies, asset delivery, and database queries for lightning-fast sub-second UX.',
    },
    {
      num: '03',
      icon: ShieldCheck,
      title: 'Security by Design',
      desc: 'Robust authentication workflows, authorization boundaries, input sanitization, and least-privilege IAM configurations.',
    },
    {
      num: '04',
      icon: Cloud,
      title: 'Cloud Native',
      desc: 'Designing containerized microservices and resilient cloud topologies on AWS with high availability and automated failovers.',
    },
    {
      num: '05',
      icon: Sparkles,
      title: 'Continuous Learning',
      desc: 'Constantly exploring state-of-the-art web standards, performance primitives, and modern DevOps tooling.',
    },
    {
      num: '06',
      icon: Users,
      title: 'Team Collaboration',
      desc: 'Writing clear documentation, mentoring peers, driving code reviews, and embracing trunk-based delivery pipelines.',
    },
  ];

  return (
    <section id="principles" className="sec-ivory">
      <div className="in">
        <div>
          <div className="mb-[22px] flex items-center gap-[14px]">
            <span className="iv-label iv-signal">03</span>
            <span className="h-px w-[44px] bg-vermilion" />
            <span className="iv-label iv-muted">Engineering principles</span>
          </div>
          <h2 className="max-w-[760px] text-[2rem] font-normal leading-[1.1] tracking-[-0.02em] text-graphite sm:text-[2.875rem]">
            The values guiding every design decision.
          </h2>
          <p className="mt-4 max-w-[600px] text-[18px] leading-[1.6] text-bodyink">
            The foundational standards behind my software design decisions and development workflow.
          </p>
        </div>

        <div className="mt-10 grid border-l border-t border-ruleline sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="wash-row border-b border-r border-ruleline px-6 py-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <Icon className="h-[22px] w-[22px] text-vermilion" strokeWidth={1.5} />
                  <span className="iv-label iv-muted">{item.num}</span>
                </div>
                <h3 className="mt-4 text-[23px] leading-[1.2] tracking-[-0.01em] text-graphite">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[16px] leading-[1.6] text-bodyink">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
