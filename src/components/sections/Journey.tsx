export function Journey() {
  const journey = [
    {
      num: '01',
      tag: 'Frontend',
      title: 'Scalable Frontend Architecture',
      desc: 'Designed and engineered responsive, accessible React interfaces with reusable design tokens, strict TypeScript contracts, and fluid UI animations.',
    },
    {
      num: '02',
      tag: 'Backend',
      title: 'High-Performance REST & Microservice APIs',
      desc: 'Architected resilient backend RESTful services using NestJS, featuring request throttling, comprehensive error handling, and robust schema validation.',
    },
    {
      num: '03',
      tag: 'Database',
      title: 'Database Design & Prisma Integration',
      desc: 'Modeled relational schemas and integrated PostgreSQL and MySQL using Prisma ORM, optimizing query execution plans and automated migrations.',
    },
    {
      num: '04',
      tag: 'Security',
      title: 'Authentication & Security Infrastructures',
      desc: 'Implemented secure authentication and authorization systems utilizing JWTs, OAuth 2.0 protocols, and granular Role-Based Access Controls (RBAC).',
    },
    {
      num: '05',
      tag: 'DevOps',
      title: 'Containerization with Docker & Kubernetes',
      desc: 'Containerized full stack applications with multi-stage Docker builds and Kubernetes orchestrations to guarantee local development consistency and seamless production deployments.',
    },
    {
      num: '06',
      tag: 'Cloud',
      title: 'AWS Cloud Infrastructure Operations',
      desc: 'Configured and maintained AWS cloud architectures, deploying compute instances (EC2), Object Storage (S3), isolated virtual networks (VPC), and API Gateways.',
    },
    {
      num: '07',
      tag: 'IaC',
      title: 'Infrastructure as Code Automation',
      desc: 'Automated environment provisioning and multi-tier cloud infrastructure deployments using Terraform configurations and GitOps pull-request workflows.',
    },
    {
      num: '08',
      tag: 'Performance',
      title: 'System Performance Optimization',
      desc: 'Diagnosed and eliminated performance bottlenecks across application layers, improving query latencies, caching efficiency, and Core Web Vitals.',
    },
  ];

  return (
    <section id="journey" className="sec-ivory">
      <div className="in">
        <div>
          <div className="mb-[22px] flex items-center gap-[14px]">
            <span className="iv-label iv-signal">05</span>
            <span className="h-px w-[44px] bg-vermilion" />
            <span className="iv-label iv-muted">Professional journey</span>
          </div>
          <h2 className="max-w-[760px] text-[2rem] font-normal leading-[1.1] tracking-[-0.02em] text-graphite sm:text-[2.875rem]">
            Engineering responsibilities, deliverables and milestones.
          </h2>
          <p className="mt-4 max-w-[600px] text-[18px] leading-[1.6] text-bodyink">
            The core work I execute across the stack — from interface architecture to cloud
            operations.
          </p>
        </div>

        <div className="mt-10 border-t border-graphite">
          {journey.map((item) => (
            <div
              key={item.num}
              className="wash-row grid gap-x-5 gap-y-2 border-b border-ruleline py-6 lg:grid-cols-[130px_70px_1fr_1.3fr] lg:items-baseline"
            >
              <span className="iv-label iv-muted">{item.num}</span>
              <span className="tag-ivory justify-self-start">{item.tag}</span>
              <h3 className="text-[22px] font-normal leading-[1.25] text-graphite">
                {item.title}
              </h3>
              <p className="text-[16px] leading-[1.6] text-bodyink">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
