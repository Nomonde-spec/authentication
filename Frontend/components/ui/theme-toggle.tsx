'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = window.localStorage.getItem('theme') as 'dark' | 'light' | null;
    const resolved = stored || 'dark';
    setTheme(resolved);
    
    // Apply the theme
    if (resolved === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    window.localStorage.setItem('theme', next);
    
    // Apply the theme
    if (next === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  if (!mounted) {
    return (
      <button className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#111827]/70 text-slate-200 transition duration-300 hover:bg-white/10 cursor-wait" disabled>
        <Sun size={18} />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#111827]/70 text-slate-200 transition duration-300 hover:bg-white/10 dark:hover:bg-white/20"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun size={18} className="transition-transform duration-200" />
      ) : (
        <Moon size={18} className="transition-transform duration-200" />
      )}
    </button>
  );
}
