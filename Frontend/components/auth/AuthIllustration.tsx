'use client';

import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export function AuthIllustration() {
  return (
    <div className="hidden lg:flex lg:w-[55%] xl:w-2/3 items-center justify-center">
      <div className="relative mx-auto w-[80%] max-w-[720px]">
        <div className="rounded-3xl bg-white/5 p-12 shadow-2xl shadow-slate-950/20 backdrop-blur-2xl ring-1 ring-white/10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-4 rounded-3xl bg-gradient-to-r from-[#4F7BFF] to-[#8B5CF6] p-6 shadow-xl shadow-[#4f7bff]/20">
              <ShieldCheck size={36} className="text-white" />
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-white/70">Protected access</p>
                <h3 className="text-3xl font-bold text-white">Secure authentication</h3>
              </div>
            </div>
            <div className="space-y-3 rounded-[2rem] bg-slate-950/90 p-6 shadow-inner shadow-slate-950/20">
              <p className="text-slate-300">Enable biometrics, 2FA, and role-based access to keep every session safe.</p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/5 p-4 text-slate-200">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Fast onboarding</p>
                  <p className="mt-2 text-sm">Get started in seconds with secure flows.</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4 text-slate-200">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Enterprise grade</p>
                  <p className="mt-2 text-sm">Designed for teams and modern SaaS platforms.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="pointer-events-none absolute -right-24 -bottom-16 opacity-60">
          <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0" stopColor="#4F7BFF" stopOpacity="0.45" />
                <stop offset="1" stopColor="#8B5CF6" stopOpacity="0.45" />
              </linearGradient>
            </defs>
            <circle cx="120" cy="120" r="120" fill="url(#g1)" />
          </svg>
        </div>
      </div>
    </div>
  );
}
