'use client';

import { Clock, LogIn, LogOut, Shield, Edit2, Trash2 } from 'lucide-react';
import { Card } from '../../ui/card';

const activities = [
  {
    id: 1,
    type: 'login',
    title: 'Logged in',
    description: 'Windows - Chrome',
    timestamp: '2 minutes ago',
    icon: LogIn,
    color: 'text-green-400'
  },
  {
    id: 2,
    type: 'security',
    title: 'Password changed',
    description: 'Account security update',
    timestamp: '2 days ago',
    icon: Shield,
    color: 'text-blue-400'
  },
  {
    id: 3,
    type: 'profile',
    title: 'Profile updated',
    description: 'Changed profile information',
    timestamp: '5 days ago',
    icon: Edit2,
    color: 'text-purple-400'
  },
  {
    id: 4,
    type: 'logout',
    title: 'Logged out',
    description: 'MacBook - Safari',
    timestamp: '1 week ago',
    icon: LogOut,
    color: 'text-slate-400'
  }
];

export function ActivitySection() {
  return (
    <div className="space-y-6">
      <section className="rounded-[32px] border border-white/10 bg-[#182235]/90 p-6 md:p-8 shadow-[0_30px_90px_-60px_rgba(0,0,0,0.75)] backdrop-blur-xl">
        <p className="text-sm uppercase tracking-[0.35em] text-slate-500">History</p>
        <h1 className="mt-4 text-3xl md:text-4xl font-bold text-white">Activity Log</h1>
        <p className="mt-3 max-w-2xl text-base text-slate-300">View your account activity and login history.</p>
      </section>

      <Card className="rounded-[28px] border border-white/10 bg-[#182235]/95 p-6 md:p-8 shadow-[0_35px_90px_-50px_rgba(0,0,0,0.65)]">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-white">Recent Activity</h2>
          <p className="mt-1 text-slate-400">Last 30 days</p>
        </div>

        <div className="space-y-4">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div key={activity.id} className="rounded-[20px] border border-white/10 bg-[#111827]/90 p-5 md:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#111827] text-slate-200 shadow-sm">
                      <Icon size={20} className={activity.color} />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-white">{activity.title}</h3>
                    <p className="text-sm text-slate-400">{activity.description}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 flex-shrink-0">
                    <div className="flex items-center gap-1 text-xs text-slate-500">
                      <Clock size={14} />
                      <span>{activity.timestamp}</span>
                    </div>
                  </div>
                </div>

                {index === 0 && (
                  <div className="mt-4 inline-block px-3 py-1 rounded-full text-xs font-semibold bg-green-500/20 text-green-300">
                    Current Session
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Card>

      <Card className="rounded-[28px] border border-white/10 bg-[#182235]/95 p-6 md:p-8 shadow-[0_35px_90px_-50px_rgba(0,0,0,0.65)]">
        <h2 className="text-2xl font-semibold text-white mb-6">Login Locations</h2>

        <div className="space-y-4">
          <div className="rounded-[20px] border border-white/10 bg-[#111827]/90 p-5 md:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold text-white">New York, USA</h3>
                <p className="text-sm text-slate-400">Windows - Chrome - 10.0.0.1</p>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-500/20 text-green-300 w-fit">
                Active
              </span>
            </div>
          </div>

          <div className="rounded-[20px] border border-white/10 bg-[#111827]/90 p-5 md:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold text-white">London, UK</h3>
                <p className="text-sm text-slate-400">MacBook - Safari - 10.0.0.2</p>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-500/20 text-slate-300 w-fit">
                Inactive
              </span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
