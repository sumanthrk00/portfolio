export function Expertise() {
  const categories = [
    {
      num: '01',
      title: 'Frontend',
      desc: 'Interfaces, design systems and type-safe component contracts.',
      chips: ['React', 'TypeScript', 'Tailwind CSS', 'HTML5 & CSS3'],
    },
    {
      num: '02',
      title: 'Backend',
      desc: 'Service layers, APIs and secure business logic.',
      chips: ['NestJS', 'REST APIs', 'Auth & Authorization'],
    },
    {
      num: '03',
      title: 'Database',
      desc: 'Relational modelling, migrations and caching.',
      chips: ['PostgreSQL', 'MySQL', 'Prisma ORM', 'Redis'],
    },
    {
      num: '04',
      title: 'Cloud',
      desc: 'AWS infrastructure designed for availability.',
      chips: ['AWS (EC2, S3, VPC)', 'API Gateway', 'CloudFront', 'Route 53', 'IAM Roles'],
    },
    {
      num: '05',
      title: 'DevOps',
      desc: 'Delivery pipelines, containers and infrastructure as code.',
      chips: ['Docker', 'Kubernetes', 'Terraform', 'Git & GitHub'],
    },
    {
      num: '06',
      title: 'Tools',
      desc: 'The daily working environment.',
      chips: ['VS Code', 'Vite', 'Postman', 'Linux CLI'],
    },
  ];

  return (
    <section id="expertise" className="sec-ivory">
      <div className="in">
        <div>
          <div className="mb-[22px] flex items-center gap-[14px]">
            <span className="iv-label iv-signal">04</span>
            <span className="h-px w-[44px] bg-vermilion" />
            <span className="iv-label iv-muted">Technical expertise</span>
          </div>
          <h2 className="max-w-[760px] text-[2rem] font-normal leading-[1.1] tracking-[-0.02em] text-graphite sm:text-[2.875rem]">
            Core technologies, languages, frameworks, and infrastructure tools.
          </h2>
          <p className="mt-4 max-w-[600px] text-[18px] leading-[1.6] text-bodyink">
            The toolkit I use daily, grouped the way I work with it.
          </p>
        </div>

        <div className="mt-10 grid border-l border-t border-ruleline sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.num}
              className="wash-row border-b border-r border-ruleline px-6 py-7"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="iv-group">{cat.title}</h3>
                <span className="iv-label iv-muted">{cat.num}</span>
              </div>
              <p className="mt-3 text-[16px] leading-[1.6] text-bodyink">{cat.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {cat.chips.map((chip) => (
                  <span key={chip} className="chip-ivory">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
