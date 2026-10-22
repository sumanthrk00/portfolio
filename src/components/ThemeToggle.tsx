import { Moon, Sun } from 'lucide-react';

type ThemeToggleProps = {
  theme: 'light' | 'dark';
  toggle: () => void;
};

export function ThemeToggle({ theme, toggle }: ThemeToggleProps) {
  const isDark = theme === 'dark';
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 bg-white/70 text-ink-700 transition-colors hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-ink-200 dark:hover:bg-white/10"
    >
      <span className="flex transition-transform duration-300">
        {isDark ? <Moon className="h-4.5 w-4.5" size={18} /> : <Sun className="h-4.5 w-4.5" size={18} />}
      </span>
    </button>
  );
}

