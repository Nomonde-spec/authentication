'use client';

import Link from 'next/link';
import { LogOut, UserCircle2, type LucideIcon } from 'lucide-react';
import { ThemeToggle } from '../ui/theme-toggle';
import { Button } from '../ui/button';

export function DashboardShell({
  user,
  onLogout,
  children,
  activeSection,
  onSectionChange,
  navItems
}: {
  user: { firstName: string; lastName: string; email: string; role: string };
  onLogout: () => void;
  children: React.ReactNode;
  activeSection: string | null;
  onSectionChange: (section: string) => void;
  navItems: Array<{ id: string; label: string; icon: LucideIcon }>;
}) {
  return (
    <div className="dashboard-shell min-h-screen bg-[#081027] text-slate-100">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-[1400px] gap-6 px-4 py-5 lg:flex-row lg:px-6">
        <aside className="dashboard-sidebar flex h-[calc(100vh-2rem)] flex-col rounded-[2rem] bg-[#09152f]/95 p-6 text-slate-100 shadow-[0_30px_100px_-65px_rgba(2,8,20,0.95)] ring-1 ring-slate-800 lg:w-[280px]">
          <div className="flex items-center gap-3 rounded-3xl bg-[#09172f] px-4 py-4 shadow-[0_10px_30px_-20px_rgba(15,23,42,0.7)]">
            <div className="grid h-12 w-12 place-items-center rounded-3xl bg-slate-100 text-slate-950">
              <UserCircle2 size={24} />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Auth System</p>
              <p className="text-xs text-slate-500">Secure access panel</p>
            </div>
          </div>

          <div className="mt-10 space-y-4 text-slate-400">
            <div>
              <p className="mb-3 text-[0.65rem] uppercase tracking-[0.35em] text-slate-500">Account</p>
              {navItems.slice(0, 4).map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => onSectionChange(item.id)}
                    className={`flex w-full items-center gap-3 rounded-[1.75rem] px-4 py-3 text-left text-sm font-medium transition ${
                      isActive
                        ? 'bg-[#0f1a3b] text-white shadow-[0_15px_40px_-22px_rgba(15,23,42,0.8)]'
                        : 'text-slate-400 hover:bg-[#0f1a3b] hover:text-white'
                    }`}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            <div>
              <p className="mb-3 text-[0.65rem] uppercase tracking-[0.35em] text-slate-500">Other</p>
              <button className="flex w-full items-center gap-3 rounded-[1.75rem] px-4 py-3 text-left text-sm text-slate-400 transition hover:bg-[#0f1a3b] hover:text-white">
                <span>Help Center</span>
              </button>
              <button className="mt-2 flex w-full items-center gap-3 rounded-[1.75rem] px-4 py-3 text-left text-sm text-slate-400 transition hover:bg-[#0f1a3b] hover:text-white">
                <span>Activity Log</span>
              </button>
            </div>
          </div>

          <div className="mt-auto rounded-[2rem] border border-slate-800/70 bg-[#0d1632]/95 p-5 shadow-[0_25px_90px_-55px_rgba(15,23,42,0.75)]">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-3xl bg-[#0f1a3b] text-slate-200">
                <UserCircle2 size={20} />
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-white">{user.firstName} {user.lastName}</p>
                <p className="truncate text-xs text-slate-500">{user.email}</p>
              </div>
            </div>

            <Button variant="ghost" size="sm" onClick={onLogout} className="mt-4 w-full rounded-3xl border border-slate-800 bg-[#0b1225] text-slate-200 hover:bg-[#0f1a3b]">
              <LogOut size={16} /> Logout
            </Button>
          </div>
        </aside>

        <main className="dashboard-main flex min-1 flex-1 flex-col rounded-[2rem] bg-[#08162d]/90 p-6 shadow-[0_30px_80px_-35px_rgba(15,23,42,0.55)] ring-1 ring-slate-800 lg:p-8">
          <div className="flex flex-col gap-6 rounded-[2rem] border border-slate-800/70 bg-[#08162d]/80 p-6 shadow-[inset_0_1px_0_rgba(148,163,184,0.05)] sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Welcome back</p>
              <h1 className="mt-3 text-3xl font-semibold text-white">Welcome back, {user.firstName}!</h1>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-400">Manage your account and settings from here.</p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-slate-800 bg-[#0b172b]/90 px-4 py-2 text-slate-400">
              <span className="text-sm">Theme</span>
              <ThemeToggle />
            </div>
          </div>

          <div className="mt-6 flex-1">{children}</div>
        </main>
      </div>
    </div>
  );
}
