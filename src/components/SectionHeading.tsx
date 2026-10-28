import type { ReactNode } from 'react';

type SectionHeadingProps = {
  number?: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  badge?: string;
  children?: ReactNode;
};

export function SectionHeading({
  number,
  eyebrow,
  title,
  description,
  align = 'left',
  badge,
  children,
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 sm:mb-16 ${isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}`}>
      {/* Label line inspired by reference editorial layout */}
      <div className={`mb-4 flex items-center gap-3.5 ${isCenter ? 'justify-center' : ''}`}>
        {number && <span className="mono-label text-cyan-400">{number}</span>}
        {number && <span className="h-px w-8 bg-cyan-500/40" />}
        <span className="mono-muted text-slate-400">{eyebrow}</span>
        {badge && (
          <span className="ml-auto hidden rounded border border-white/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-slate-400 sm:inline-block">
            {badge}
          </span>
        )}
      </div>

      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.65rem] leading-[1.12]">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-400">
          {description}
        </p>
      )}

      {children}
    </div>
  );
}
