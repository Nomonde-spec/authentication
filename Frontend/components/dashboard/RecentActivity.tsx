'use client';

import { ChevronRight } from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';

const items = [
  {
    title: 'Login successful',
    time: 'Today, 10:42 AM',
    device: 'Windows · Chrome',
    badge: 'This device',
    color: 'bg-emerald-500'
  },
  {
    title: 'Password changed',
    time: 'May 18, 2025 · 09:15 PM',
    device: 'Windows · Chrome',
    badge: 'This device',
    color: 'bg-amber-400'
  }
];

export function RecentActivity() {
  return (
    <Card className="rounded-[28px] border border-white/10 bg-[#182235]/95 p-6 shadow-[0_35px_90px_-50px_rgba(0,0,0,0.65)]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Recent Activity</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">Recent Activity</h3>
        </div>
        <Badge className="rounded-full bg-slate-900/80 text-slate-300">Live</Badge>
      </div>

      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <div key={item.title} className="rounded-[24px] border border-white/10 bg-[#111827]/80 p-4 transition duration-300 hover:border-slate-600/40 hover:bg-[#111827]">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className={`mt-1 inline-flex h-3 w-3 shrink-0 rounded-full ${item.color}`} />
                <div>
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.time}</p>
                </div>
              </div>
              <ChevronRight size={18} className="text-slate-400" />
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-sm text-slate-500">
              <span>{item.device}</span>
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">{item.badge}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
