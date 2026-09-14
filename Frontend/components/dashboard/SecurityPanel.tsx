'use client';

import { ArrowRight, Shield } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

export function SecurityPanel() {
  return (
    <Card className="grid gap-6 overflow-hidden rounded-[28px] border border-white/10 bg-[#182235]/95 p-6 md:p-8 shadow-[0_35px_90px_-50px_rgba(0,0,0,0.65)] md:grid-cols-[1.4fr_1fr]">
      <div className="flex flex-col justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">
            <Shield size={16} />
            Security
          </div>
          <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-white">Protect your account</h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
            Two-factor authentication, session monitoring, and password updates are managed from this section.
          </p>
        </div>
        <Button className="mt-auto inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#4F7BFF] via-[#6366F1] to-[#8B5CF6] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/40 transition duration-300 hover:brightness-110 w-full md:w-auto justify-center md:justify-start">
          Go to Security
          <ArrowRight size={16} />
        </Button>
      </div>

      <div className="relative flex items-center justify-center overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0b1120] via-[#111827] to-[#182235] p-6">
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#4F7BFF]/10 blur-3xl" />
        <div className="absolute left-10 top-24 h-20 w-20 rounded-full bg-[#06B6D4]/10 blur-3xl" />
        <div className="absolute right-10 bottom-10 h-24 w-24 rounded-full bg-[#8B5CF6]/20 blur-3xl" />
        <div className="relative flex h-48 w-48 items-center justify-center rounded-[32px] bg-gradient-to-br from-[#111827] to-[#182235] p-6 shadow-[0_35px_90px_-50px_rgba(0,0,0,0.8)]">
          <div className="grid h-28 w-28 place-items-center rounded-[28px] bg-[#111827]/80 text-slate-200 shadow-lg shadow-black/50">
            <Shield size={36} />
          </div>
          <div className="absolute bottom-4 right-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#4F7BFF]/15 text-[#4F7BFF] shadow-[0_20px_60px_-40px_rgba(79,123,255,0.65)]">
            <Shield size={20} />
          </div>
        </div>
      </div>
    </Card>
  );
}
