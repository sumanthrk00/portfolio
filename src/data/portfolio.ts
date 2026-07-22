export type SkillCategory = {
  id: string;
  title: string;
  icon: string;
  blurb: string;
  skills: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    icon: 'Code2',
    blurb: 'Core programming languages for backend, scripting, and front-end work.',
    skills: [
      { name: 'Java', level: 95 },
      { name: 'Python', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'SQL', level: 88 },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'Layout',
    blurb: 'Building responsive, accessible interfaces for web and mobile.',
    skills: [
      { name: 'React', level: 92 },
      { name: 'React Native', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Framer Motion', level: 80 },
    ],
  },
  {
    id: 'aws',
    title: 'AWS Cloud',
    icon: 'Cloud',
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
    id: 'data',
    title: 'Data & Tooling',
    icon: 'Database',
    blurb: 'Relational data stores and version control for team-scale delivery.',
    skills: [
      { name: 'MySQL', level: 88 },
      { name: 'Git', level: 94 },
      { name: 'GitHub', level: 92 },
      { name: 'Docker', level: 80 },
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  highlights: string[];
  repo: string;
  demo?: string;
  accent: string;
  metric?: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    id: 'cloud-platform',
    title: 'Multi-Tenant Cloud Platform',
    tagline: 'A scalable SaaS backbone on AWS',
    description:
      'Designed and shipped a multi-tenant platform serving 2M+ daily requests. Provisioned isolated VPCs, an Application Load Balancer fronting EC2 autoscaling groups, and API Gateway with per-tenant throttling and usage plans.',
    tags: ['Java', 'Spring Boot', 'AWS', 'EC2', 'VPC', 'API Gateway', 'Load Balancer', 'MySQL'],
    highlights: [
      'Autoscaling EC2 fleet behind an ALB with zero-downtime deploys',
      'Per-tenant throttling and API keys via API Gateway usage plans',
      'Private subnets + NAT gateways with least-privilege IAM roles',
    ],
    repo: 'https://github.com/sumanthrk00/cloud-platform',
    demo: 'https://demo.sumanthrk.dev',
    accent: 'from-brand-500 to-brand-700',
    metric: [
      { label: 'Daily requests', value: '2M+' },
      { label: 'Uptime', value: '99.98%' },
    ],
  },
  {
    id: 'data-pipeline',
    title: 'Real-Time Analytics Pipeline',
    tagline: 'Streaming ingestion at scale',
    description:
      'Built a Python-based ingestion pipeline processing 500K events/min. Events land in S3 raw buckets, are transformed with batch jobs, and surfaced through a React dashboard with sub-second queries.',
    tags: ['Python', 'AWS', 'S3', 'React', 'MySQL'],
    highlights: [
      'Idempotent S3 ingestion with partitioned prefixes',
      'Backpressure-aware workers with exponential retry',
      'React dashboard with cached aggregations',
    ],
    repo: 'https://github.com/sumanthrk00/analytics-pipeline',
    accent: 'from-accent-500 to-accent-700',
    metric: [
      { label: 'Throughput', value: '500K/min' },
      { label: 'Latency', value: '< 1s' },
    ],
  },
  {
    id: 'mobile-app',
    title: 'Cross-Platform Mobile App',
    tagline: 'React Native + AWS backend',
    description:
      'A React Native app with offline-first sync, backed by API Gateway and a MySQL datastore. Push notifications, biometric auth, and a shared component library across iOS and Android.',
    tags: ['React Native', 'API Gateway', 'AWS', 'MySQL', 'TypeScript'],
    highlights: [
      'Offline-first queue with conflict resolution',
      'Biometric authentication and secure token storage',
      'Shared design system across iOS & Android',
    ],
    repo: 'https://github.com/sumanthrk00/mobile-app',
    accent: 'from-brand-400 to-accent-500',
    metric: [
      { label: 'Stores', value: 'iOS + Android' },
      { label: 'Rating', value: '4.8★' },
    ],
  },
  {
    id: 'devops-toolkit',
    title: 'Infrastructure as Code Toolkit',
    tagline: 'Reproducible AWS environments',
    description:
      'A modular toolkit that spins up identical dev/staging/prod environments: VPC topology, multi-AZ RDS, S3 buckets with lifecycle policies, and ALB routing — all versioned in Git and reviewed via GitHub.',
    tags: ['AWS', 'VPC', 'S3', 'EC2', 'Load Balancer', 'Git', 'GitHub'],
    highlights: [
      'One-command environment provisioning',
      'Drift detection and automated remediation',
      'Pull-request-based infra reviews on GitHub',
    ],
    repo: 'https://github.com/sumanthrk00/iac-toolkit',
    accent: 'from-ink-600 to-ink-800',
    metric: [
      { label: 'Environments', value: '3' },
      { label: 'Provision time', value: '~9 min' },
    ],
  },
];

export const profile = {
  name: 'Sumanth R K',
  role: 'Full Stack Software Engineer',
  location: 'Bengaluru, India',
  email: 'sumanthrk512@gmail.com',
  phone: '+91 7975672123',
  github: 'sumanthrk00',
  githubUrl: 'https://github.com/sumanthrk00',
  linkedinUrl: 'http://linkedin.com/in/sumanth-r-k',
  available: true,
  summary:
    'I am a Full Stack Software Engineer who enjoys building secure, scalable, and high-performance software. My work spans modern frontend development, backend engineering, cloud infrastructure, and DevOps automation.',
  specializations: [
    {
      title: 'Frontend Engineering',
      description: 'Building fast, responsive, and modern web applications.',
    },
    {
      title: 'Backend Engineering',
      description: 'Designing scalable APIs and secure business logic.',
    },
    {
      title: 'Cloud & DevOps',
      description: 'Deploying reliable applications using AWS, Docker, and Terraform.',
    },
    {
      title: 'Software Architecture',
      description: 'Structuring clean, modular, and maintainable software systems.',
    },
  ],
  experience: [
    {
      role: 'Senior Software Engineer',
      company: 'Cloud Systems Inc.',
      period: '2022 — Present',
      points: [
        'Led the migration of a monolith to a multi-tenant AWS architecture serving 2M+ daily requests.',
        'Owned the API Gateway layer and per-tenant throttling strategy.',
        'Mentored 4 engineers and introduced trunk-based development with GitHub Actions.',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Datawave Labs',
      period: '2019 — 2022',
      points: [
        'Built a Python streaming pipeline processing 500K events/min into S3.',
        'Designed the React dashboard for real-time analytics.',
        'Cut p95 query latency by 60% through caching and indexing.',
      ],
    },
    {
      role: 'Junior Developer',
      company: 'Nimbus Tech',
      period: '2017 — 2019',
      points: [
        'Developed REST APIs in Java/Spring Boot backed by MySQL.',
        'Shipped a React Native app used by 10K+ users.',
      ],
    },
  ],
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
];
