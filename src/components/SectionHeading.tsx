import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  children,
}: SectionHeadingProps) {
  const isCenter = align === 'center';
  return (
    <div className={isCenter ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-300"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mt-4 text-3xl font-bold sm:text-4xl lg:text-[2.75rem] leading-[1.1] text-balance"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-4 text-base sm:text-lg text-ink-500 dark:text-ink-300 leading-relaxed text-balance"
        >
          {description}
        </motion.p>
      )}
      {children}
    </div>
  );
}
