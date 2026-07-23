import { motion } from 'framer-motion';
import {
  Code2,
  Cpu,
  ShieldCheck,
  Cloud,
  BookOpen,
  Users,
  GraduationCap,
  MapPin,
  Briefcase,
  Rocket,
  Zap,
  Sparkles,
  Database,
  Layers,
  Server,
  Container,
  Terminal,
  Workflow,
  Key,
  Activity,
  CheckCircle2,
} from 'lucide-react';

// Framer Motion Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

// Section 3: Engineering Principles Data
const engineeringPrinciples = [
  {
    icon: Layers,
    title: 'Clean Architecture',
    description:
      'Modular, maintainable codebases structured for long-term scalability, strict type safety, and clear separation of concerns.',
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'group-hover:border-blue-500/50',
    iconColor: 'text-blue-600 dark:text-blue-400',
  },
  {
    icon: Cpu,
    title: 'Performance First',
    description:
      'Optimizing rendering cycles, bundling strategies, asset delivery, and database queries for lightning-fast sub-second UX.',
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'group-hover:border-purple-500/50',
    iconColor: 'text-purple-600 dark:text-purple-400',
  },
  {
    icon: ShieldCheck,
    title: 'Security by Design',
    description:
      'Robust authentication workflows, authorization boundaries, input sanitization, and least-privilege IAM configurations.',
    color: 'from-cyan-500/20 to-teal-500/20',
    borderColor: 'group-hover:border-cyan-500/50',
    iconColor: 'text-cyan-600 dark:text-cyan-400',
  },
  {
    icon: Cloud,
    title: 'Cloud Native',
    description:
      'Designing containerized microservices and resilient cloud topologies on AWS with high availability and automated failovers.',
    color: 'from-indigo-500/20 to-blue-500/20',
    borderColor: 'group-hover:border-indigo-500/50',
    iconColor: 'text-indigo-600 dark:text-indigo-400',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description:
      'Constantly exploring state-of-the-art web standards, performance primitives, and modern DevOps tooling.',
    color: 'from-emerald-500/20 to-cyan-500/20',
    borderColor: 'group-hover:border-emerald-500/50',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description:
      'Writing clear documentation, mentoring peers, driving code reviews, and embracing trunk-based delivery pipelines.',
    color: 'from-violet-500/20 to-purple-500/20',
    borderColor: 'group-hover:border-violet-500/50',
    iconColor: 'text-violet-600 dark:text-violet-400',
  },
];

// Section 4: Skill Categories & Badges Data
const skillCategories = [
  {
    category: 'Frontend',
    icon: Code2,
    badgeColor: 'border-blue-500/30 bg-blue-500/10 text-blue-700 dark:text-blue-300 hover:border-blue-400/60 hover:shadow-blue-500/20',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML5 & CSS3', 'Framer Motion'],
  },
  {
    category: 'Backend',
    icon: Server,
    badgeColor: 'border-purple-500/30 bg-purple-500/10 text-purple-700 dark:text-purple-300 hover:border-purple-400/60 hover:shadow-purple-500/20',
    skills: ['Node.js', 'NestJS', 'Express.js', 'REST APIs', 'Auth & Authorization', 'GraphQL'],
  },
  {
    category: 'Database',
    icon: Database,
    badgeColor: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 hover:border-cyan-400/60 hover:shadow-cyan-500/20',
    skills: ['PostgreSQL', 'MySQL', 'Prisma ORM', 'Redis', 'Database Indexing'],
  },
  {
    category: 'Cloud',
    icon: Cloud,
    badgeColor: 'border-indigo-500/30 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 hover:border-indigo-400/60 hover:shadow-indigo-500/20',
    skills: ['AWS (EC2, S3, VPC)', 'API Gateway', 'CloudFront', 'Route 53', 'IAM Roles'],
  },
  {
    category: 'DevOps',
    icon: Container,
    badgeColor: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 hover:border-emerald-400/60 hover:shadow-emerald-500/20',
    skills: ['Docker', 'Terraform', 'Git & GitHub', 'CI/CD Pipelines'],
  },
  {
    category: 'Tools',
    icon: Terminal,
    badgeColor: 'border-violet-500/30 bg-violet-500/10 text-violet-700 dark:text-violet-300 hover:border-violet-400/60 hover:shadow-violet-500/20',
    skills: ['Vite', 'Postman', 'ESLint & Prettier', 'Linux CLI', 'Webpack'],
  },
];

// Section 5: Professional Journey Timeline Data
const journeyTimeline = [
  {
    title: 'Scalable Frontend Architecture',
    description:
      'Designed and engineered responsive, accessible React and Next.js interfaces with reusable design tokens, strict TypeScript contracts, and fluid Framer Motion animations.',
    icon: Code2,
    tag: 'Frontend',
  },
  {
    title: 'High-Performance REST & Microservice APIs',
    description:
      'Architected resilient backend RESTful services using NestJS and Express.js, featuring request throttling, comprehensive error handling, and robust schema validation.',
    icon: Server,
    tag: 'Backend',
  },
  {
    title: 'Database Design & Prisma Integration',
    description:
      'Modeled relational schemas and integrated PostgreSQL and MySQL using Prisma ORM, optimizing query execution plans, indexing strategies, and automated migrations.',
    icon: Database,
    tag: 'Database',
  },
  {
    title: 'Authentication & Security Infrastructures',
    description:
      'Implemented secure authentication and authorization systems utilizing JWTs, OAuth 2.0 protocols, and granular Role-Based Access Controls (RBAC).',
    icon: Key,
    tag: 'Security',
  },
  {
    title: 'Containerization with Docker',
    description:
      'Containerized full stack applications with multi-stage Docker builds to guarantee local development consistency and seamless production deployments.',
    icon: Container,
    tag: 'DevOps',
  },
  {
    title: 'AWS Cloud Infrastructure Operations',
    description:
      'Configured and maintained AWS cloud architectures, deploying compute instances (EC2), Object Storage (S3), isolated virtual networks (VPC), and API Gateways.',
    icon: Cloud,
    tag: 'Cloud',
  },
  {
    title: 'Infrastructure as Code Automation',
    description:
      'Automated environment provisioning and multi-tier cloud infrastructure deployments using Terraform configurations and GitOps pull-request workflows.',
    icon: Workflow,
    tag: 'IaC',
  },
  {
    title: 'System Performance Optimization',
    description:
      'Diagnosed and eliminated performance bottlenecks across application layers, improving database query latencies, caching efficiency, and Core Web Vitals.',
    icon: Activity,
    tag: 'Performance',
  },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-slate-50 text-slate-900 dark:bg-[#0B0F19] dark:text-slate-100 py-24 sm:py-32 transition-colors duration-300">
      {/* Background Ambient Glow & Mesh Elements */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute right-0 top-1/2 h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-[160px]" />
        <div className="absolute bottom-10 left-1/3 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* SECTION 1: HEADER & INTRO BADGE                                           */}
        {/* ========================================================================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Small Badge */}
          <motion.div variants={fadeUp} className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 backdrop-blur-md">
            <Sparkles size={14} className="animate-pulse text-blue-500 dark:text-blue-400" />
            <span>ABOUT ME</span>
          </motion.div>

          {/* Large Heading */}
          <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Building reliable software that scales from{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
              frontend experiences
            </span>{' '}
            to cloud infrastructure.
          </motion.h2>

          {/* Engaging Professional Introduction */}
          <motion.p variants={fadeUp} className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
            I am a passionate Full Stack Software Engineer dedicated to crafting robust, high-performance web applications. My expertise bridges intuitive frontend development with resilient backend architectures, automated cloud deployments, and IaC infrastructure. Driven by clean code and problem solving, I transform complex engineering requirements into seamless digital experiences that scale effortlessly under real-world demand.
          </motion.p>
        </motion.div>


        {/* ========================================================================= */}
        {/* SECTION 2: RESPONSIVE TWO COLUMN LAYOUT (Summary & Education)              */}
        {/* ========================================================================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-16 grid gap-8 lg:grid-cols-12"
        >
          {/* LEFT CARD: Professional Summary & Chips */}
          <motion.div
            variants={fadeUp}
            className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 dark:border-slate-800 dark:bg-[#111827]/80 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-2xl hover:shadow-blue-500/5 lg:col-span-7"
          >
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl transition-opacity group-hover:opacity-100" />

            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border-2 border-blue-500/50 bg-slate-100 dark:bg-slate-900 shadow-lg shadow-blue-500/20">
                <img
                  src="/sumanth-profile.jpg"
                  alt="Sumanth R K"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">Sumanth R K</h3>
                <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">Full Stack Software Engineer</p>
              </div>
            </div>

            <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
              <p>
                As a Full Stack Engineer, I approach software creation with a holistic mindset. From designing intuitive interfaces in React and TypeScript to structuring backend microservices in NestJS and PostgreSQL, I ensure every tier of the application stack is engineered for speed, safety, and maintainability.
              </p>
              <p>
                I thrive on containerizing services with Docker, automating infrastructure via Terraform on AWS, and delivering software that solves real-world engineering challenges.
              </p>
            </div>

            {/* Information Chips */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900/90 px-3.5 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 transition-colors hover:border-blue-500/40 hover:text-slate-900 dark:hover:text-white">
                <MapPin size={14} className="text-blue-500 dark:text-blue-400" /> Bengaluru, India
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900/90 px-3.5 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 transition-colors hover:border-purple-500/40 hover:text-slate-900 dark:hover:text-white">
                <Briefcase size={14} className="text-purple-500 dark:text-purple-400" /> Full Stack Engineer
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900/90 px-3.5 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 transition-colors hover:border-cyan-500/40 hover:text-slate-900 dark:hover:text-white">
                <Cloud size={14} className="text-cyan-500 dark:text-cyan-400" /> Cloud & DevOps
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900/90 px-3.5 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 transition-colors hover:border-emerald-500/40 hover:text-slate-900 dark:hover:text-white">
                <Rocket size={14} className="text-emerald-500 dark:text-emerald-400" /> Open to Opportunities
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900/90 px-3.5 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 transition-colors hover:border-pink-500/40 hover:text-slate-900 dark:hover:text-white">
                <Zap size={14} className="text-pink-500 dark:text-pink-400" /> Problem Solver
              </span>
            </div>
          </motion.div>

          {/* RIGHT CARD: Education Timeline */}
          <motion.div
            variants={fadeUp}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 dark:border-slate-800 dark:bg-[#111827]/80 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-2xl hover:shadow-purple-500/5 lg:col-span-5"
          >
            <div className="absolute -right-16 -bottom-16 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl transition-opacity group-hover:opacity-100" />

            <div>
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <GraduationCap size={22} />
                </span>
                <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">Education</h3>
              </div>

              {/* Timeline Style Education Item */}
              <div className="relative mt-8 pl-6 border-l-2 border-slate-200 dark:border-slate-800">
                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-purple-500 bg-white dark:bg-[#111827]" />
                
                <h4 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                  Bachelor of Engineering
                </h4>
                <p className="mt-1 text-sm font-medium text-purple-600 dark:text-purple-300">
                  Computer Science & Engineering
                </p>
                <p className="mt-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                  Visvesvaraya Technological University (VTU)
                </p>
                
                <div className="mt-4 flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                  <CheckCircle2 size={14} className="text-emerald-500 dark:text-emerald-400" />
                  <span>Computer Science Core & Software Foundations</span>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-slate-100/60 dark:bg-slate-900/60 p-4">
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Focused on Data Structures, Algorithms, Operating Systems, Database Management Systems, and Object-Oriented Software Architecture.
              </p>
            </div>
          </motion.div>
        </motion.div>


        {/* ========================================================================= */}
        {/* SECTION 3: ENGINEERING PRINCIPLES (6 Cards Grid)                           */}
        {/* ========================================================================= */}
        <div className="mt-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="text-center"
          >
            <motion.h3 variants={fadeUp} className="font-display text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
              Engineering Principles
            </motion.h3>
            <motion.p variants={fadeUp} className="mt-2 text-sm text-slate-600 dark:text-slate-400 sm:text-base">
              The foundational values guiding my software design decisions and development workflow.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {engineeringPrinciples.map((principle) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={principle.title}
                  variants={scaleIn}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className={`group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 dark:border-slate-800 dark:bg-[#111827]/80 p-6 backdrop-blur-xl transition-all duration-300 ${principle.borderColor} hover:shadow-xl`}
                >
                  <div className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${principle.color} blur-2xl transition-opacity group-hover:opacity-100`} />
                  
                  <div className="relative z-10">
                    <span className={`inline-grid h-12 w-12 place-items-center rounded-xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900 ${principle.iconColor} transition-transform group-hover:scale-110`}>
                      <Icon size={22} />
                    </span>
                    <h4 className="mt-5 font-display text-lg font-semibold text-slate-900 dark:text-white">
                      {principle.title}
                    </h4>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {principle.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>


        {/* ========================================================================= */}
        {/* SECTION 4: TECHNICAL EXPERTISE (Categorized Skill Badges)                 */}
        {/* ========================================================================= */}
        <div className="mt-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="text-center"
          >
            <motion.h3 variants={fadeUp} className="font-display text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
              Technical Expertise
            </motion.h3>
            <motion.p variants={fadeUp} className="mt-2 text-sm text-slate-600 dark:text-slate-400 sm:text-base">
              Core technologies, languages, frameworks, and infrastructure tools I use daily.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="mt-12 space-y-6"
          >
            {skillCategories.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.category}
                  variants={fadeUp}
                  className="rounded-2xl border border-slate-200/80 bg-white/80 dark:border-slate-800/80 dark:bg-[#111827]/60 p-5 sm:p-6 backdrop-blur-md transition-colors hover:border-slate-300 dark:hover:border-slate-700"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="flex w-36 shrink-0 items-center gap-2.5">
                      <Icon size={18} className="text-blue-600 dark:text-blue-400" />
                      <span className="font-display text-sm font-semibold text-slate-900 dark:text-white">{item.category}</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <motion.span
                          key={skill}
                          whileHover={{ scale: 1.05 }}
                          className={`cursor-default rounded-xl border px-3.5 py-1.5 text-xs font-medium backdrop-blur-md transition-all duration-300 hover:shadow-lg ${item.badgeColor}`}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>


        {/* ========================================================================= */}
        {/* SECTION 5: PROFESSIONAL JOURNEY TIMELINE                                 */}
        {/* ========================================================================= */}
        <div className="mt-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="text-center"
          >
            <motion.h3 variants={fadeUp} className="font-display text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
              Professional Journey
            </motion.h3>
            <motion.p variants={fadeUp} className="mt-2 text-sm text-slate-600 dark:text-slate-400 sm:text-base">
              Core engineering responsibilities, deliverables, and technical execution milestones.
            </motion.p>
          </motion.div>

          <div className="relative mt-14 max-w-4xl mx-auto">
            {/* Center Vertical Timeline Line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 opacity-30" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="space-y-8"
            >
              {journeyTimeline.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    className={`relative flex flex-col sm:flex-row items-start ${
                      isEven ? 'sm:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Timeline Dot Icon */}
                    <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-1.5 z-10 grid h-9 w-9 place-items-center rounded-full border-2 border-blue-500/60 bg-white dark:bg-[#0B0F19] text-blue-600 dark:text-blue-400 shadow-md shadow-blue-500/20">
                      <Icon size={16} />
                    </div>

                    {/* Timeline Content Card */}
                    <div className={`ml-12 sm:ml-0 sm:w-1/2 ${isEven ? 'sm:pr-10' : 'sm:pl-10'}`}>
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="group rounded-2xl border border-slate-200/80 bg-white/80 dark:border-slate-800 dark:bg-[#111827]/80 p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xl hover:shadow-blue-500/5"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="font-display text-base font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                            {item.title}
                          </h4>
                          <span className="shrink-0 rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-blue-600 dark:text-blue-400">
                            {item.tag}
                          </span>
                        </div>
                        <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                          {item.description}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
