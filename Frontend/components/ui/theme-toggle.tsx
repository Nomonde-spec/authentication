'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from './button';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const stored = window.localStorage.getItem('theme') as 'dark' | 'light' | null;
    const resolved = stored || 'dark';
    setTheme(resolved);
    document.documentElement.classList.toggle('light', resolved === 'light');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    window.localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('light', next === 'light');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className={theme === 'light'
        ? 'h-11 w-11 border border-sky-200 bg-white p-0 text-sky-600 shadow-sm hover:bg-sky-50'
        : 'h-11 w-11 border border-slate-700 bg-slate-900 p-0 text-slate-100 hover:bg-slate-800'}
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </Button>
  );
}
