'use client';

import { Welcome } from '../Welcome';
import { SummaryCards } from '../SummaryCards';
import { SecurityPanel } from '../SecurityPanel';
import { RecentActivity } from '../RecentActivity';
import { QuickActions } from '../QuickActions';

export function OverviewSection() {
  return (
    <div className="space-y-6">
      <Welcome />
      <SummaryCards />
      <SecurityPanel />
      <div className="grid gap-6 md:grid-cols-1 xl:grid-cols-[1.5fr_0.85fr]">
        <RecentActivity />
        <QuickActions />
      </div>
    </div>
  );
}
