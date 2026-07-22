import { motion } from 'framer-motion';
import { Cloud, Code2, Database, Layout } from 'lucide-react';
import { skillCategories } from '@/data/portfolio';
import { SectionHeading } from '@/components/SectionHeading';

const iconMap: Record<string, typeof Code2> = {
  Code2,
  Layout,
  Cloud,
  Database,
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const card = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-brand-500/10 blur-[120px]" />
      </div>
      <div className="container-px">
        <SectionHeading
          eyebrow="Skills"
          title="A full-stack, cloud-native toolkit"
          description="From backend services to mobile apps to AWS infrastructure — I work across the stack to ship complete systems."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-14 grid gap-6 sm:grid-cols-2"
        >
          {skillCategories.map((cat) => {
            const Icon = iconMap[cat.icon] ?? Code2;
            return (
              <motion.div
                key={cat.id}
                variants={card}
                whileHover={{ y: -4 }}
                className="card group relative overflow-hidden p-6 sm:p-7"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-500/5 transition-transform duration-500 group-hover:scale-150" />
                <div className="relative flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-500/15 to-accent-500/15 text-brand-600 ring-1 ring-brand-500/20 dark:text-brand-300">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold">{cat.title}</h3>
                    <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">{cat.blurb}</p>
                  </div>
                </div>

                <div className="relative mt-6 space-y-3.5">
                  {cat.skills.map((s, i) => (
                    <div key={s.name}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">{s.name}</span>
                        <span className="font-mono text-xs text-ink-400 dark:text-ink-500">{s.level}%</span>
                      </div>
                      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-ink-200/70 dark:bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true, margin: '-40px' }}
                          transition={{ duration: 1, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                          className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
