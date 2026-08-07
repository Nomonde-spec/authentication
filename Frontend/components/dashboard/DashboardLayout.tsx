'use client';

import { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';

type DashboardLayoutProps = {
  children: ReactNode;
  activeSection: string;
  onSectionChange: (section: string) => void;
};

export function DashboardLayout({ children, activeSection, onSectionChange }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B1120] text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[1600px] flex-col gap-6 px-4 py-6 lg:flex-row lg:px-8 lg:py-8">
        <AnimatePresence>
          {sidebarOpen ? (
            <motion.div
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
            />
          ) : null}
        </AnimatePresence>

        <Sidebar
          mobile
          activeSection={activeSection}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          onSectionChange={(section) => {
            setSidebarOpen(false);
            onSectionChange(section);
          }}
        />
        <Sidebar
          activeSection={activeSection}
          isOpen
          onClose={() => undefined}
          onSectionChange={onSectionChange}
        />

        <div className="flex min-h-screen w-full flex-1 flex-col gap-6">
          <Topbar onToggleSidebar={() => setSidebarOpen((prev) => !prev)} />
          <main className="flex flex-1 flex-col gap-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
