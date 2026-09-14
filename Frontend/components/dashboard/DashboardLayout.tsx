'use client';

import { ReactNode, useEffect, useState } from 'react';
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="mx-auto flex min-h-screen w-full max-w-full flex-col lg:max-w-[1600px] lg:flex-row lg:gap-6">
        <AnimatePresence>
          {sidebarOpen && (
            <motion.div
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
            />
          )}
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

        <div className="flex w-full flex-1 flex-col gap-4 px-4 py-6 sm:gap-6 sm:px-6 lg:gap-6 lg:px-0 lg:py-8">
          <Topbar onToggleSidebar={() => setSidebarOpen((prev) => !prev)} />
          <main className="flex flex-1 flex-col gap-4 sm:gap-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
