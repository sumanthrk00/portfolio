export function About() {
  const chips = [
    'Bengaluru, India',
    'Full Stack Engineer',
    'Cloud & DevOps',
    'Open to Opportunities',
    'Problem Solver',
  ];

  const education = [
    {
      num: '01',
      score: '7.4 CGPA',
      degree: 'Bachelor of Engineering (B.E.)',
      field: 'Computer Science & Engineering',
      institution: 'Visvesvaraya Technological University (VTU)',
    },
    {
      num: '02',
      score: '60%',
      degree: 'Pre-University Course (PUC)',
      field: 'Science (PCMB)',
      institution: 'Mahesh PU College',
    },
    {
      num: '03',
      score: '71%',
      degree: 'Secondary School Leaving Certificate (SSLC)',
      field: '10th Standard',
      institution: 'Indian International School, Chitradurga',
    },
  ];

  return (
    <section id="about" className="sec-ivory">
      <div className="in">
        <div>
          <div className="mb-[22px] flex items-center gap-[14px]">
            <span className="iv-label iv-signal">02</span>
            <span className="h-px w-[44px] bg-vermilion" />
            <span className="iv-label iv-muted">About me</span>
          </div>
          <h2 className="max-w-[760px] text-[2rem] font-normal leading-[1.1] tracking-[-0.02em] text-graphite sm:text-[2.875rem]">
            Building reliable software that scales from frontend experiences to cloud infrastructure.
          </h2>
        </div>

        <div className="mt-9 grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
          <div>
            <p className="mb-[18px] text-[18px] leading-[1.75] text-inkdeep dropcap">
              I am a passionate Full Stack Software Engineer dedicated to crafting robust,
              high-performance web applications. My expertise bridges intuitive frontend development
              with resilient backend architectures, automated cloud deployments, and IaC
              infrastructure. Driven by clean code and problem solving, I transform complex
              engineering requirements into seamless digital experiences that scale effortlessly
              under real-world demand.
            </p>
            <p className="mb-[18px] text-[18px] leading-[1.75] text-inkdeep">
              As a Full Stack Engineer, I approach software creation with a holistic mindset. From
              designing intuitive interfaces in React and TypeScript to structuring backend
              microservices in NestJS and PostgreSQL, I ensure every tier of the application stack
              is engineered for speed, safety, and maintainability.
            </p>
            <p className="mb-[18px] text-[18px] leading-[1.75] text-inkdeep">
              I thrive on containerizing services with Docker and Kubernetes, automating
              infrastructure via Terraform on AWS, and delivering software that solves real-world
              engineering challenges.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {chips.map((chip) => (
                <span key={chip} className="chip-ivory">
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="plate-ivory">
            <span className="inline-block relative aspect-[4/3] w-full object-cover">
              <img
                src="/about-plate.jpg"
                alt="Systems in detail"
                className="h-full w-full object-cover"
              />
            </span>
            <p className="cap-ivory">Fig. 02 — Systems, in detail</p>
          </div>
        </div>

        {/* Education Subsection */}
        <div className="mt-16 border-t border-graphite pt-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="iv-label iv-signal">Education</span>
            <span className="h-px w-10 bg-vermilion" />
            <span className="iv-label iv-muted">Academic record</span>
          </div>

          <div className="mt-8 grid border-l border-t border-ruleline lg:grid-cols-3">
            {education.map((item) => (
              <div
                key={item.num}
                className="wash-row border-b border-r border-ruleline px-6 py-7"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="iv-label iv-muted">{item.num}</span>
                  <span className="text-[22px] leading-none text-vermilion">{item.score}</span>
                </div>
                <h3 className="mt-5 text-[19px] leading-[1.25] text-graphite">{item.degree}</h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-bodyink">{item.field}</p>
                <p className="iv-label iv-muted mt-4 leading-[1.7]">{item.institution}</p>
              </div>
            ))}
          </div>

          <p className="iv-label iv-muted mt-6 leading-[1.9]">
            Academic journey from Indian International School, Chitradurga and Mahesh PU College to
            Computer Science Engineering.
          </p>
        </div>
      </div>
    </section>
  );
}
