'use client';

import { ChevronRight, Lock, ShieldCheck } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';

const actions = [
  { id: 'password', label: 'Change Password', icon: Lock },
  { id: '2fa', label: 'Enable 2FA', icon: ShieldCheck }
];

export function QuickActions() {
  return (
    <Card className="rounded-[28px] border border-white/10 bg-[#182235]/95 p-6 shadow-[0_35px_90px_-50px_rgba(0,0,0,0.65)]">
      <div>
        <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Quick Actions</p>
        <h3 className="mt-3 text-2xl font-semibold text-white">Quick Actions</h3>
      </div>

      <div className="mt-6 space-y-4">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <button key={action.id} className="flex w-full items-center justify-between gap-4 rounded-[24px] border border-white/10 bg-[#111827]/90 px-5 py-4 text-left transition duration-300 hover:border-slate-600/40 hover:bg-[#111827]">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-3xl bg-[#111827] text-slate-200 shadow-sm">
                  <Icon size={20} />
                </span>
                <div>
                  <p className="text-base font-semibold text-white">{action.label}</p>
                </div>
              </div>
              <ChevronRight size={18} className="text-slate-400" />
            </button>
          );
        })}
      </div>
    </Card>
  );
}
