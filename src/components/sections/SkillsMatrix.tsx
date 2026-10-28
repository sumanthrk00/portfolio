export function SkillsMatrix() {
  const groups = [
    {
      title: 'Languages',
      metricsCount: 4,
      blurb: 'Core programming languages for backend, scripting, and front-end work.',
      skills: [
        { name: 'Java', level: 95 },
        { name: 'Python', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'SQL', level: 88 },
      ],
    },
    {
      title: 'Frontend',
      metricsCount: 3,
      blurb: 'Building responsive, accessible interfaces for web and mobile.',
      skills: [
        { name: 'React', level: 92 },
        { name: 'React Native', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
      ],
    },
    {
      title: 'AWS Cloud',
      metricsCount: 5,
      blurb: 'Designing secure, scalable, and highly available cloud infrastructure.',
      skills: [
        { name: 'EC2', level: 90 },
        { name: 'S3', level: 92 },
        { name: 'VPC', level: 88 },
        { name: 'API Gateway', level: 85 },
        { name: 'Load Balancer', level: 86 },
      ],
    },
    {
      title: 'Data & Tooling',
      metricsCount: 6,
      blurb: 'Relational data stores and version control for team-scale delivery.',
      skills: [
        { name: 'MySQL', level: 88 },
        { name: 'Git', level: 94 },
        { name: 'GitHub', level: 92 },
        { name: 'Docker', level: 80 },
        { name: 'Kubernetes', level: 85 },
        { name: 'VS Code', level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="sec-ivory">
      <div className="in">
        <div>
          <div className="mb-[22px] flex items-center gap-[14px]">
            <span className="iv-label iv-signal">06</span>
            <span className="h-px w-[44px] bg-vermilion" />
            <span className="iv-label iv-muted">Skill matrix</span>
          </div>
          <h2 className="max-w-[760px] text-[2rem] font-normal leading-[1.1] tracking-[-0.02em] text-graphite sm:text-[2.875rem]">
            A full-stack, cloud-native toolkit.
          </h2>
          <p className="mt-4 max-w-[600px] text-[18px] leading-[1.6] text-bodyink">
            From backend services to mobile apps to AWS infrastructure — I work across the stack to
            ship complete systems.
          </p>
        </div>

        <div className="mt-10 grid gap-x-14 gap-y-10 md:grid-cols-2">
          {groups.map((group) => (
            <div key={group.title}>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="flex-1 border-b border-graphite pb-2.5 text-[24px] font-normal leading-[1.2] text-graphite">
                  {group.title}
                </h3>
                <span className="iv-label iv-muted">{group.metricsCount} metrics</span>
              </div>
              <p className="mb-3 mt-2.5 text-[15px] leading-[1.5] text-muteink">{group.blurb}</p>
              <div>
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-baseline gap-2 py-[5px] text-[17px] text-graphite"
                  >
                    <span>{skill.name}</span>
                    <span className="flex-1 -translate-y-1 border-b border-dotted border-ruleline" />
                    <em className="iv-num">{skill.level}%</em>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
