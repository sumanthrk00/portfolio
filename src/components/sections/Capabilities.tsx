export function Capabilities() {
  const capabilities = [
    {
      num: '01',
      title: 'Frontend Engineering',
      desc: 'Building fast, responsive, and modern web applications.',
    },
    {
      num: '02',
      title: 'Backend Engineering',
      desc: 'Designing scalable APIs and secure business logic.',
    },
    {
      num: '03',
      title: 'Cloud & DevOps',
      desc: 'Deploying reliable applications using AWS, Docker, Kubernetes, and Terraform.',
    },
    {
      num: '04',
      title: 'Software Architecture',
      desc: 'Structuring clean, modular, and maintainable software systems.',
    },
  ];

  return (
    <section id="capabilities" className="sec-ivory">
      <div className="in">
        <div>
          <div className="mb-[22px] flex items-center gap-[14px]">
            <span className="iv-label iv-signal">01</span>
            <span className="h-px w-[44px] bg-vermilion" />
            <span className="iv-label iv-muted">Capabilities</span>
            <span className="iv-label iv-muted ml-auto hidden sm:block">IST +05:30</span>
          </div>
          <h2 className="max-w-[760px] text-[2rem] font-normal leading-[1.1] tracking-[-0.02em] text-graphite sm:text-[2.875rem]">
            Four tiers of the stack, engineered as one system.
          </h2>
          <p className="mt-4 max-w-[600px] text-[18px] leading-[1.6] text-bodyink">
            From interface to infrastructure — the disciplines I work across every day.
          </p>
        </div>

        <div className="mt-10 border-t border-graphite">
          {capabilities.map((item) => (
            <div
              key={item.num}
              className="wash-row grid gap-x-6 gap-y-2 border-b border-ruleline py-6 sm:grid-cols-[70px_1fr_1.4fr] sm:items-baseline"
            >
              <span className="iv-label iv-signal">{item.num}</span>
              <h3 className="text-[26px] font-normal leading-[1.15] tracking-[-0.01em] sm:text-[28px]">
                {item.title}
              </h3>
              <p className="text-[17px] leading-[1.6] text-bodyink">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
