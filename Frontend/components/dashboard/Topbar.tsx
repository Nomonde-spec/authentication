'use client';

import { Menu, Settings2 } from 'lucide-react';
import { ThemeToggle } from '../ui/theme-toggle';

type TopbarProps = {
  onToggleSidebar: () => void;
};

export function Topbar({ onToggleSidebar }: TopbarProps) {
  return (
    <header className="flex h-[72px] items-center justify-end gap-3 rounded-[28px] border border-white/10 bg-white/5 px-6 shadow-[0_30px_90px_-70px_rgba(0,0,0,0.75)] backdrop-blur-xl">
      <button
        onClick={onToggleSidebar}
        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#111827]/70 text-slate-200 transition duration-300 hover:bg-white/10 lg:hidden"
      >
        <Menu size={18} />
      </button>
      <ThemeToggle />
      <button className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#111827]/70 text-slate-200 transition duration-300 hover:bg-white/10">
        <Settings2 size={18} />
      </button>
    </header>
  );
}
