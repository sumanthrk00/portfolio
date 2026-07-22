import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail, Code2, Server, Cloud, Cpu, Send, Sparkles } from 'lucide-react';
import { profile } from '@/data/portfolio';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

// Orbit Technologies
const orbitTechs = [
  { name: 'React', color: 'from-cyan-400 to-blue-500' },
  { name: 'AWS', color: 'from-amber-400 to-orange-500' },
  { name: 'MySQL', color: 'from-blue-500 to-cyan-600' },
  { name: 'React Native', color: 'from-sky-400 to-blue-600' },
  { name: 'Java', color: 'from-red-500 to-amber-600' },
  { name: 'Python', color: 'from-blue-400 to-yellow-500' },
  { name: 'TypeScript', color: 'from-blue-500 to-indigo-600' },
  { name: 'Docker', color: 'from-teal-400 to-cyan-500' },
];

const specializationCards = [
  {
    title: 'Frontend Engineering',
    description: 'Building fast, responsive, and modern web applications.',
    icon: Code2,
    accent: 'border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400',
  },
  {
    title: 'Backend Engineering',
    description: 'Designing scalable APIs and secure business logic.',
    icon: Server,
    accent: 'border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-400',
  },
  {
    title: 'Cloud & DevOps',
    description: 'Deploying reliable applications using AWS, Docker, and Terraform.',
    icon: Cloud,
    accent: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
  },
  {
    title: 'Software Architecture',
    description: 'Structuring clean, modular, and maintainable software systems.',
    icon: Cpu,
    accent: 'border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400',
  },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-50 text-slate-900 dark:bg-[#090E18] dark:text-slate-100 pt-28 pb-20 sm:pt-32 lg:pt-36 transition-colors duration-300">
      {/* Background Ambient Glow & Grid Overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[150px] dark:bg-blue-600/15" />
        <div className="absolute right-[10%] top-1/3 h-80 w-80 rounded-full bg-purple-600/10 blur-[130px] dark:bg-purple-600/15" />
        <div className="absolute left-[5%] bottom-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-30 dark:opacity-35" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* ========================================================================= */}
          {/* LEFT SIDE: PROFILE HERO HEADER & ACTIONS                                 */}
          {/* ========================================================================= */}
          <motion.div variants={container} initial="hidden" animate="show" className="lg:col-span-7">
            {/* Availability Badge */}
            {profile.available && (
              <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span>Available for new opportunities</span>
              </motion.div>
            )}

            {/* Main Headline */}
            <motion.h1 variants={fadeUp} className="font-display text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.08]">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
                Sumanth R K
              </span>
              <br />
              <span className="text-slate-700 dark:text-slate-300 font-bold text-3xl sm:text-4xl lg:text-5xl">
                Full Stack Software Engineer
              </span>
            </motion.h1>

            {/* Summary */}
            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
              {profile.summary}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-500/20 transition-all hover:scale-[1.02] hover:shadow-blue-500/35 active:scale-95"
              >
                <span>View Projects</span>
                <ArrowDown size={16} />
              </a>

              <a
                href="/Sumanth_RK_CV.pdf"
                download="Sumanth_RK_CV.pdf"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/80 text-slate-800 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 px-5 py-3.5 text-sm font-semibold backdrop-blur-md transition-all hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-white active:scale-95"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/10 px-5 py-3.5 text-sm font-semibold text-blue-600 dark:text-blue-300 backdrop-blur-md transition-all hover:border-blue-500/60 hover:bg-blue-500/20 dark:hover:text-white active:scale-95"
              >
                <Send size={15} />
                <span>Contact Me</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeUp} className="mt-8 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mr-1">Connect:</span>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300 transition-all dark:hover:border-slate-700 dark:hover:bg-slate-800 dark:hover:text-white hover:shadow-lg hover:shadow-blue-500/10"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300 transition-all dark:hover:border-slate-700 dark:hover:bg-slate-800 dark:hover:text-white hover:shadow-lg hover:shadow-blue-500/10"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                onClick={(e) => {
                  e.preventDefault();
                  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`, '_blank');
                }}
                target="_blank"
                rel="noreferrer"
                aria-label="Email"
                className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300 transition-all dark:hover:border-slate-700 dark:hover:bg-slate-800 dark:hover:text-white hover:shadow-lg hover:shadow-blue-500/10"
              >
                <Mail size={18} />
              </a>
            </motion.div>
          </motion.div>


          {/* ========================================================================= */}
          {/* RIGHT SIDE: ROTATING TECHNOLOGY ORBIT WITH PROFILE PHOTO IN CENTER        */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none"
          >
            <div className="relative aspect-square w-full max-w-[440px] mx-auto grid place-items-center">
              
              {/* Orbit Concentric Rings */}
              <div className="absolute inset-0 rounded-full border border-slate-200/90 dark:border-slate-800/90 shadow-2xl" />
              <div className="absolute inset-[12%] rounded-full border border-slate-200/70 dark:border-slate-800/70" />
              <div className="absolute inset-[26%] rounded-full border border-slate-200/50 dark:border-slate-800/50" />

              {/* Center Node: Sumanth's Profile Photo & Monogram Frame */}
              <div className="relative z-20 group grid h-36 w-36 place-items-center rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-400 p-1 shadow-2xl shadow-blue-500/40 transition-transform duration-500 hover:scale-105">
                <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-950">
                  <img
                    src="/sumanth-profile.jpg"
                    alt="Sumanth R K"
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-1 inset-x-0 text-center">
                    <span className="rounded-full bg-blue-600/90 px-2 py-0.5 font-display text-[10px] font-bold text-white shadow-md">
                      SK
                    </span>
                  </div>
                </div>
              </div>

              {/* Orbiting Rotating Technology Badges */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 38, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 z-10"
              >
                {orbitTechs.map((tech, i) => {
                  const angle = (i / orbitTechs.length) * Math.PI * 2;
                  const radius = 45; // percentage radius from center
                  const x = 50 + Math.cos(angle) * radius;
                  const y = 50 + Math.sin(angle) * radius;
                  return (
                    <div
                      key={tech.name}
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                      style={{ left: `${x}%`, top: `${y}%` }}
                    >
                      {/* Counter-rotate label so text remains upright while orbiting */}
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 38, repeat: Infinity, ease: 'linear' }}
                        whileHover={{ scale: 1.15 }}
                        className="group relative cursor-default rounded-full border border-slate-200 bg-white/90 dark:border-slate-800 dark:bg-[#111827]/90 px-3.5 py-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-blue-500/60 dark:hover:text-white hover:shadow-blue-500/20"
                      >
                        <div className={`absolute -inset-0.5 rounded-full bg-gradient-to-r ${tech.color} opacity-0 blur-sm transition-opacity group-hover:opacity-70`} />
                        <span className="relative z-10">{tech.name}</span>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>

              {/* Floating Sparkles Accent Icons */}
              <motion.div
                animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute right-4 top-8 text-blue-500 dark:text-blue-400"
              >
                <Sparkles size={20} />
              </motion.div>
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute left-6 bottom-12 text-cyan-500 dark:text-cyan-400"
              >
                <Sparkles size={16} />
              </motion.div>
            </div>
          </motion.div>
        </div>


        {/* ========================================================================= */}
        {/* FOUR PROFESSIONAL SPECIALIZATION CARDS                                    */}
        {/* ========================================================================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {specializationCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 dark:border-slate-800 dark:bg-[#111827]/80 p-6 backdrop-blur-xl transition-all duration-300 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <span className={`grid h-10 w-10 place-items-center rounded-xl border ${card.accent}`}>
                    <Icon size={20} />
                  </span>
                  <h3 className="font-display text-base font-semibold text-slate-900 dark:text-white">
                    {card.title}
                  </h3>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-400 sm:text-sm">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
