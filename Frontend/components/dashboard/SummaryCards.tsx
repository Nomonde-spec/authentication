'use client';

import { ArrowRight, Shield, Settings, TrendingUp, User } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const cards = [
  {
    id: 'security',
    title: 'Security',
    description: 'Protect your account with two-factor authentication and security settings.',
    icon: Shield,
    button: 'Manage Security',
    variant: 'from-[#4F7BFF] via-[#6366F1] to-[#8B5CF6]'
  },
  {
    id: 'profile',
    title: 'Profile',
    description: 'View and update your personal information and preferences.',
    icon: User,
    button: 'View Profile',
    variant: 'from-[#8B5CF6] via-[#A78BFA] to-[#4F7BFF]'
  },
  {
    id: 'settings',
    title: 'Settings',
    description: 'Customize your experience and update your preferences.',
    icon: Settings,
    button: 'Open Settings',
    variant: 'from-[#06B6D4] via-[#22D3EE] to-[#60A5FA]'
  },
  {
    id: 'activity',
    title: 'Activity',
    description: 'See your recent account activity and security logs.',
    icon: TrendingUp,
    button: 'View Activity',
    variant: 'from-[#4F7BFF] via-[#60A5FA] to-[#38BDF8]'
  }
];

export function SummaryCards() {
  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <Card key={card.id} className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#182235]/95 p-6 shadow-[0_35px_90px_-50px_rgba(0,0,0,0.65)] transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:bg-[#1f2b44]/95">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">{card.title}</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{card.title}</h3>
              </div>
              <div className="grid h-12 w-12 place-items-center rounded-3xl bg-[#111827] text-slate-200 shadow-sm">
                <Icon size={20} />
              </div>
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-400">{card.description}</p>
            <Button className={`mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${card.variant} px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/40 transition duration-300 hover:brightness-110`}>
              {card.button}
              <ArrowRight size={16} />
            </Button>
          </Card>
        );
      })}
    </section>
  );
}
