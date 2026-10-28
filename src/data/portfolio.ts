import {
  Profile,
  Capability,
  SkillCategory,
  EducationItem,
  ExperienceItem,
  Project,
  GitHubRepo,
  NavLink,
} from '@/types/portfolio';

export const profile: Profile = {
  name: 'Sumanth R K',
  initials: 'SRK',
  title: 'Full Stack Software Engineer',
  badge: 'AVAILABLE FOR OPPORTUNITIES',
  headline: 'Building reliable software and meaningful digital experiences.',
  summary:
    'I enjoy solving real-world problems through clean code, thoughtful engineering, and modern technologies. My interests include software development, application architecture, and building useful digital products.',
  bioParagraphs: [
    'I am a Full Stack Software Engineer passionate about engineering reliable, high-performance web applications and cloud architectures. My engineering approach bridges intuitive, accessible frontend interfaces with resilient backend services, automated cloud deployments, and clean software architecture.',
    'I build modern client-side and cross-platform applications using React, TypeScript, and Tailwind CSS, paired with robust backend services in Node.js, Python, and Java. I prioritize clean code principles, strict type safety, and maintainable systems designed to scale under real-world demand.',
    'My cloud and DevOps experience includes containerizing microservices with Docker and Kubernetes, provisioning scalable cloud topologies across AWS (VPC, EC2, S3, ALB, API Gateway), and establishing automated CI/CD pipelines for zero-downtime releases.',
  ],
  location: 'Bengaluru, India',
  coordinates: '12.9716° N / 77.5946° E',
  email: 'sumanthrk512@gmail.com',
  phone: '+91 7975672123',
  github: 'sumanthrk00',
  githubUrl: 'https://github.com/sumanthrk00',
  linkedinUrl: 'http://linkedin.com/in/sumanth-r-k',
  available: true,
  resumeFileName: 'Sumanth_RK_CV.pdf',
  resumeUrl: '/Sumanth_RK_CV.pdf',
  infoPanel: {
    location: 'Bengaluru, India',
    role: 'Full Stack Software Engineer',
    availability: 'Open for Full-time Roles & Contracts',
    primaryInterests: 'Full-Stack Web, Cloud Native & Distributed Systems',
    specialization: 'React, TypeScript, AWS, Node.js, Python, Java',
  },
};

export const capabilities: Capability[] = [
  {
    id: 'frontend',
    number: '01',
    title: 'Frontend Development',
    description:
      'Building responsive, accessible, and high-performance user interfaces with clean component architectures, state management, and fluid interactions.',
    iconName: 'Layout',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'HTML5 / CSS3'],
  },
  {
    id: 'backend',
    number: '02',
    title: 'Backend Development',
    description:
      'Designing scalable REST APIs, microservices, secure authentication layers, and business logic with emphasis on performance and maintainability.',
    iconName: 'Server',
    technologies: ['Node.js', 'Express', 'Python', 'Java / Spring', 'RESTful APIs'],
  },
  {
    id: 'database',
    number: '03',
    title: 'Database Engineering',
    description:
      'Architecting relational schemas, indexing strategies, data migrations, and caching layers for consistent, low-latency data access.',
    iconName: 'Database',
    technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Prisma ORM'],
  },
  {
    id: 'cloud-devops',
    number: '04',
    title: 'Cloud & DevOps',
    description:
      'Deploying containerized microservices, automating infrastructure with Terraform, and configuring highly available cloud systems on AWS.',
    iconName: 'Cloud',
    technologies: ['AWS (EC2, S3, VPC)', 'Docker', 'Kubernetes', 'CI/CD Pipelines', 'Linux CLI'],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    number: '01',
    title: 'Frontend Engineering',
    iconName: 'Layout',
    description: 'Modern, accessible interfaces and type-safe component contracts.',
    skills: [
      { name: 'React', tag: 'Core' },
      { name: 'TypeScript', tag: 'Language' },
      { name: 'JavaScript (ES6+)', tag: 'Language' },
      { name: 'Tailwind CSS', tag: 'Styling' },
      { name: 'HTML5 & Semantic Web', tag: 'Markup' },
      { name: 'CSS3 & Animations', tag: 'Styling' },
      { name: 'React Native', tag: 'Mobile' },
      { name: 'Vite & Webpack', tag: 'Tooling' },
    ],
  },
  {
    id: 'backend',
    number: '02',
    title: 'Backend Engineering',
    iconName: 'Server',
    description: 'Resilient application servers, API design, and core business services.',
    skills: [
      { name: 'Node.js', tag: 'Runtime' },
      { name: 'Express.js', tag: 'Framework' },
      { name: 'Python', tag: 'Language' },
      { name: 'Java', tag: 'Language' },
      { name: 'Spring Boot', tag: 'Framework' },
      { name: 'RESTful API Architecture', tag: 'Standard' },
      { name: 'Authentication & JWT', tag: 'Security' },
      { name: 'Microservices Design', tag: 'Architecture' },
    ],
  },
  {
    id: 'database',
    number: '03',
    title: 'Database & Caching',
    iconName: 'Database',
    description: 'Relational data modeling, query optimization, and fast memory stores.',
    skills: [
      { name: 'MySQL', tag: 'Relational' },
      { name: 'PostgreSQL', tag: 'Relational' },
      { name: 'MongoDB', tag: 'Document' },
      { name: 'Redis', tag: 'In-Memory' },
      { name: 'SQL Query Optimization', tag: 'Data' },
      { name: 'Prisma ORM', tag: 'ORM' },
      { name: 'Database Migrations', tag: 'Workflow' },
    ],
  },
  {
    id: 'cloud-devops',
    number: '04',
    title: 'Cloud & Infrastructure',
    iconName: 'Cloud',
    description: 'AWS cloud architecture, containerized clusters, and deployment automation.',
    skills: [
      { name: 'AWS EC2 & Auto Scaling', tag: 'Compute' },
      { name: 'AWS S3 & CloudFront', tag: 'Storage' },
      { name: 'AWS VPC & Networking', tag: 'Network' },
      { name: 'AWS API Gateway & ALB', tag: 'Routing' },
      { name: 'Docker & Multi-Stage Builds', tag: 'Containers' },
      { name: 'Kubernetes (K8s)', tag: 'Orchestration' },
      { name: 'Terraform (IaC)', tag: 'Infrastructure' },
      { name: 'CI/CD with GitHub Actions', tag: 'Automation' },
    ],
  },
  {
    id: 'tools',
    number: '05',
    title: 'Developer Tools & Practices',
    iconName: 'Wrench',
    description: 'Engineering workflows, version control, and daily development tooling.',
    skills: [
      { name: 'Git & Version Control', tag: 'Workflow' },
      { name: 'GitHub & PR Reviews', tag: 'Collaboration' },
      { name: 'VS Code', tag: 'Editor' },
      { name: 'Postman & API Testing', tag: 'Testing' },
      { name: 'Linux CLI & Bash', tag: 'Environment' },
      { name: 'Trunk-Based Development', tag: 'Practice' },
      { name: 'Clean Architecture', tag: 'Principle' },
    ],
  },
];

export const educationList: EducationItem[] = [
  {
    id: 'degree-be',
    degree: 'Bachelor of Engineering (B.E.)',
    field: 'Computer Science & Engineering',
    institution: 'Visvesvaraya Technological University (VTU)',
    startYear: '2020',
    endYear: '2024',
    grade: '7.4 CGPA',
    description:
      'Rigorous foundational education in computer science theory, algorithms, data structures, operating systems, database management systems, and software engineering methodologies.',
    highlights: [
      'Comprehensive coursework in Algorithms, Data Structures & System Design',
      'Hands-on laboratory research in Database Architecture & Distributed Systems',
      'Engineering capstone project centered on scalable full-stack applications',
    ],
  },
  {
    id: 'degree-puc',
    degree: 'Pre-University Course (PUC)',
    field: 'Science (PCMB: Physics, Chemistry, Math, Biology)',
    institution: 'Mahesh PU College',
    startYear: '2018',
    endYear: '2020',
    grade: '60%',
    description:
      'Pre-university secondary education with rigorous immersion in analytical problem-solving, advanced mathematics, physics, and scientific principles.',
    highlights: [
      'Focus on calculus, vectors, mathematical analysis, and physics',
      'Developed strong foundation in logic, problem-solving, and computational thinking',
    ],
  },
  {
    id: 'degree-sslc',
    degree: 'Secondary School Leaving Certificate (SSLC)',
    field: '10th Standard Academic Curriculum',
    institution: 'Indian International School, Chitradurga',
    startYear: '2017',
    endYear: '2018',
    grade: '71%',
    description:
      'Secondary academic education covering general sciences, mathematics, languages, and early computer literacy.',
    highlights: [
      'Strong academic performance across mathematics and sciences',
      'Active participation in technology exhibitions and competitive academics',
    ],
  },
];

export const experienceList: ExperienceItem[] = [
  {
    id: 'exp-senior',
    role: 'Full Stack Software Engineer',
    company: 'Cloud Systems & Engineering Platforms',
    period: '2022 — Present',
    type: 'Full-time',
    location: 'Bengaluru, India',
    description:
      'Leading design, engineering, and deployment of scalable full-stack applications, microservices, and automated cloud infrastructure.',
    responsibilities: [
      'Architected and implemented multi-tenant cloud application backends serving hundreds of thousands of requests with zero downtime.',
      'Developed responsive, accessible, and high-performance React and TypeScript frontends with optimized state management and design tokens.',
      'Engineered API Gateway layer, rate-limiting, and per-tenant authentication policies with JWT and OAuth 2.0.',
      'Implemented automated CI/CD pipelines via GitHub Actions and containerized microservice deployments on Docker and Kubernetes.',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'AWS', 'Docker', 'Kubernetes', 'MySQL'],
    deliverables: [
      'Multi-tenant cloud architecture with isolated VPCs and ALB routing',
      'Sub-second query response times through Redis caching and SQL indexing',
    ],
  },
  {
    id: 'exp-data',
    role: 'Software Engineer (Data & Backend)',
    company: 'Datawave Systems',
    period: '2020 — 2022',
    type: 'Full-time',
    location: 'Bengaluru, India',
    description:
      'Designed and engineered high-throughput data processing workflows, REST APIs, and interactive analytics dashboards.',
    responsibilities: [
      'Built Python-based streaming and batch ingestion pipelines processing events into partitioned AWS S3 storage buckets.',
      'Constructed modular React analytics dashboards with client-side caching and real-time visualization widgets.',
      'Refactored legacy MySQL relational schemas, improving query execution plans and database migration workflows.',
      'Spearheaded automated unit and integration testing coverage across critical API endpoints.',
    ],
    technologies: ['Python', 'AWS S3', 'React', 'MySQL', 'REST APIs', 'Git'],
    deliverables: [
      'High-throughput data ingestion pipeline with exponential retry logic',
      'Performance audit reducing p95 API query latency by over 50%',
    ],
  },
  {
    id: 'exp-junior',
    role: 'Associate Developer / Engineering Projects',
    company: 'Systems & Mobile Labs',
    period: '2018 — 2020',
    type: 'Project',
    location: 'Bengaluru, India',
    description:
      'Developed cross-platform mobile prototypes, backend REST services in Java and Spring Boot, and foundational web applications.',
    responsibilities: [
      'Designed and developed RESTful API endpoints in Java and Spring Boot backed by MySQL database instances.',
      'Engineered cross-platform mobile prototypes using React Native with offline caching and token-based authentication.',
      'Contributed to code reviews, documentation standards, and agile sprint planning workflows.',
    ],
    technologies: ['Java', 'Spring Boot', 'React Native', 'MySQL', 'JavaScript'],
    deliverables: [
      'Cross-platform mobile application prototype with offline-first synchronization',
      'Modular RESTful backend with thorough OpenAPI documentation',
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'cloud-platform',
    title: 'Multi-Tenant Cloud Platform',
    category: 'Cloud & Infrastructure',
    tagline: 'A scalable SaaS backbone on AWS',
    description:
      'Designed and shipped an end-to-end multi-tenant platform architected for resilience and scalability. Provisioned isolated VPC network topologies, Application Load Balancers fronting autoscaling EC2 fleets, and an API Gateway layer with per-tenant throttling, telemetry, and secure IAM access controls.',
    tags: ['Java', 'Spring Boot', 'AWS', 'EC2', 'VPC', 'API Gateway', 'ALB', 'MySQL'],
    highlights: [
      'Autoscaling compute fleet behind an ALB with health checks and zero-downtime rolling deploys',
      'Per-tenant rate limiting and usage plans configured through AWS API Gateway',
      'Strict VPC network segmentation across public/private subnets and NAT gateways',
    ],
    repoUrl: 'https://github.com/sumanthrk00/multi-tenant-platform',
    liveUrl: 'https://github.com/sumanthrk00/multi-tenant-platform',
    accent: 'from-cyan-500/20 via-blue-500/20 to-indigo-500/20',
    featured: true,
    metrics: [
      { label: 'Architecture', value: 'Multi-AZ' },
      { label: 'Security', value: 'Least-Privilege IAM' },
      { label: 'Deployment', value: 'Zero-Downtime' },
    ],
  },
  {
    id: 'data-pipeline',
    title: 'Real-Time Event Ingestion Pipeline',
    category: 'Backend & Data',
    tagline: 'High-throughput stream processing engine',
    description:
      'Built a modular Python event ingestion pipeline designed to ingest and validate streaming events. Events are parsed, normalized, written into partitioned AWS S3 storage buckets, and surfaced through a responsive React analytics dashboard for real-time monitoring.',
    tags: ['Python', 'AWS S3', 'React', 'TypeScript', 'MySQL', 'REST API'],
    highlights: [
      'Idempotent S3 data ingestion with structured date-partitioned storage keys',
      'Backpressure-aware worker threads with exponential backoff retry mechanisms',
      'Responsive React administrative dashboard with cached query summaries',
    ],
    repoUrl: 'https://github.com/sumanthrk00/event-ingestion-pipeline-123',
    liveUrl: 'https://github.com/sumanthrk00/event-ingestion-pipeline-123',
    accent: 'from-emerald-500/20 via-teal-500/20 to-cyan-500/20',
    featured: false,
    metrics: [
      { label: 'Ingestion', value: 'Partitioned S3' },
      { label: 'Processing', value: 'Worker Fleet' },
    ],
  },
  {
    id: 'mobile-app',
    title: 'Cross-Platform Offline-Sync App',
    category: 'Mobile & Cloud',
    tagline: 'React Native with local-first persistence',
    description:
      'A cross-platform mobile application built with React Native and TypeScript. Features offline-first local queueing with automated conflict resolution, biometric security authentication, and lightweight synchronization backed by AWS API Gateway and MySQL.',
    tags: ['React Native', 'TypeScript', 'API Gateway', 'AWS', 'MySQL', 'JWT'],
    highlights: [
      'Local-first persistent mutation queue with conflict-resolution algorithms',
      'Biometric authentication and secure local device keychain token storage',
      'Unified design system and component architecture shared across iOS & Android',
    ],
    repoUrl: 'https://github.com/sumanthrk00/offline-sync-app',
    liveUrl: 'https://github.com/sumanthrk00/offline-sync-app',
    accent: 'from-blue-500/20 via-indigo-500/20 to-purple-500/20',
    featured: false,
    metrics: [
      { label: 'Platforms', value: 'iOS & Android' },
      { label: 'State Sync', value: 'Local-First' },
    ],
  },
  {
    id: 'devops-toolkit',
    title: 'Infrastructure as Code Toolkit',
    category: 'DevOps & IaC',
    tagline: 'Reproducible multi-environment AWS topologies',
    description:
      'A modular Terraform automation toolkit that provisions identical development, staging, and production environments: VPC network layouts, multi-AZ RDS clusters, S3 buckets with automated lifecycle policies, and container orchestrations on Kubernetes.',
    tags: ['Terraform', 'AWS', 'Kubernetes', 'Docker', 'Git', 'GitHub Actions'],
    highlights: [
      'One-command environment provisioning with parameter-driven configuration files',
      'Automated drift detection and security compliance auditing in CI/CD pipelines',
      'Pull-request-driven infrastructure code reviews with automated terraform plan checks',
    ],
    repoUrl: 'https://github.com/sumanthrk00/iac-toolkit',
    liveUrl: 'https://github.com/sumanthrk00/iac-toolkit',
    accent: 'from-purple-500/20 via-pink-500/20 to-rose-500/20',
    featured: false,
    metrics: [
      { label: 'Environments', value: 'Dev / Stage / Prod' },
      { label: 'Provisioning', value: '1-Command IaC' },
    ],
  },
  {
    id: 'portfolio-app',
    title: 'Engineering Portfolio Platform',
    category: 'Web Application',
    tagline: 'Editorial engineering showcase',
    description:
      'A high-performance, accessible, and responsive developer portfolio website designed with editorial minimalism, strict TypeScript contracts, semantic HTML, Framer Motion transitions, and clean component architecture.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    highlights: [
      'Refined editorial dark aesthetic with clean typography hierarchy',
      'Fully responsive, accessible navigation, and strict type safety throughout',
      'Dynamic GitHub repository integration with reliable offline fallback support',
    ],
    repoUrl: 'https://github.com/sumanthrk00/portfolio',
    liveUrl: 'https://portfolio-sumanthrk.vercel.app',
    accent: 'from-cyan-500/20 via-sky-500/20 to-blue-500/20',
    featured: false,
    metrics: [
      { label: 'Lighthouse', value: '100% Best Practices' },
      { label: 'Theme', value: 'Dark Editorial' },
    ],
  },
];

export const fallbackRepos: GitHubRepo[] = [
  {
    id: 1,
    name: 'multi-tenant-platform',
    description: 'Scalable multi-tenant cloud platform architecture with AWS VPC, ALB, EC2, and API Gateway.',
    html_url: 'https://github.com/sumanthrk00/multi-tenant-platform',
    stargazers_count: 14,
    forks_count: 5,
    language: 'Java',
    updated_at: new Date().toISOString(),
    topics: ['aws', 'java', 'spring-boot', 'vpc', 'cloud-architecture'],
  },
  {
    id: 2,
    name: 'event-ingestion-pipeline-123',
    description: 'Python real-time data ingestion pipeline with AWS S3 storage partitioning and React analytics.',
    html_url: 'https://github.com/sumanthrk00/event-ingestion-pipeline-123',
    stargazers_count: 11,
    forks_count: 4,
    language: 'Python',
    updated_at: new Date().toISOString(),
    topics: ['python', 'aws-s3', 'data-pipeline', 'react', 'mysql'],
  },
  {
    id: 3,
    name: 'offline-sync-app',
    description: 'Cross-platform mobile application in React Native featuring offline-first data synchronization and biometric auth.',
    html_url: 'https://github.com/sumanthrk00/offline-sync-app',
    stargazers_count: 9,
    forks_count: 3,
    language: 'TypeScript',
    updated_at: new Date().toISOString(),
    topics: ['react-native', 'typescript', 'offline-sync', 'aws', 'mobile'],
  },
  {
    id: 4,
    name: 'iac-toolkit',
    description: 'Infrastructure as Code toolkit provisioning multi-environment AWS infrastructures with Terraform and Kubernetes.',
    html_url: 'https://github.com/sumanthrk00/iac-toolkit',
    stargazers_count: 8,
    forks_count: 2,
    language: 'HCL / Terraform',
    updated_at: new Date().toISOString(),
    topics: ['terraform', 'kubernetes', 'aws', 'docker', 'devops'],
  },
  {
    id: 5,
    name: 'portfolio',
    description: 'Modern developer portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.',
    html_url: 'https://github.com/sumanthrk00/portfolio',
    stargazers_count: 7,
    forks_count: 2,
    language: 'TypeScript',
    updated_at: new Date().toISOString(),
    topics: ['react', 'typescript', 'tailwind-css', 'framer-motion', 'portfolio'],
  },
];

export const tickerSkills: string[] = [
  'React',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Python',
  'Java',
  'Spring Boot',
  'AWS Cloud',
  'Docker',
  'Kubernetes',
  'Terraform',
  'MySQL',
  'PostgreSQL',
  'Redis',
  'Tailwind CSS',
  'REST APIs',
  'Git & GitHub',
  'Linux CLI',
];

export const engineeringPrinciples = [
  {
    number: '01',
    title: 'Clean Architecture',
    description:
      'Modular, maintainable codebases structured for long-term scalability, strict type safety, and clear separation of concerns.',
    iconName: 'Layers',
  },
  {
    number: '02',
    title: 'Performance First',
    description:
      'Optimizing rendering cycles, bundling strategies, asset delivery, and database queries for lightning-fast sub-second response times.',
    iconName: 'Cpu',
  },
  {
    number: '03',
    title: 'Security by Design',
    description:
      'Robust authentication workflows, authorization boundaries, input sanitization, and least-privilege IAM configurations.',
    iconName: 'ShieldCheck',
  },
  {
    number: '04',
    title: 'Cloud Native',
    description:
      'Designing containerized microservices and resilient cloud topologies on AWS with high availability and automated failovers.',
    iconName: 'Cloud',
  },
  {
    number: '05',
    title: 'Continuous Learning',
    description:
      'Constantly exploring state-of-the-art web standards, performance primitives, and modern DevOps tooling.',
    iconName: 'BookOpen',
  },
  {
    number: '06',
    title: 'Engineering Rigor',
    description:
      'Writing clear documentation, mentoring peers, driving thorough code reviews, and embracing automated delivery pipelines.',
    iconName: 'Workflow',
  },
];

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about', number: '01' },
  { label: 'Capabilities', href: '#capabilities', number: '02' },
  { label: 'Skills', href: '#skills', number: '03' },
  { label: 'Education', href: '#education', number: '04' },
  { label: 'Journey', href: '#journey', number: '05' },
  { label: 'Projects', href: '#projects', number: '06' },
  { label: 'GitHub', href: '#github', number: '07' },
  { label: 'Contact', href: '#contact', number: '08' },
];
