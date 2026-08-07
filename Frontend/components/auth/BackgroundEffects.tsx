'use client';

import { motion } from 'framer-motion';

export function BackgroundEffects() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,123,255,0.16),_transparent_25%),radial-gradient(circle_at_right,_rgba(139,92,246,0.14),_transparent_18%)]" />
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute left-[-10%] top-0 h-[360px] w-[360px] rounded-full bg-[#4F7BFF]/20 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
        className="absolute right-[-8%] top-1/4 h-[280px] w-[280px] rounded-full bg-[#8B5CF6]/15 blur-3xl"
      />
      <div className="pointer-events-none absolute left-[10%] top-[12%] h-24 w-24 rounded-full border border-white/10 bg-white/5 blur-xl" />
      <div className="pointer-events-none absolute right-[14%] top-[68%] h-16 w-16 rounded-full border border-white/10 bg-cyan-500/10 blur-xl" />
    </div>
  );
}
