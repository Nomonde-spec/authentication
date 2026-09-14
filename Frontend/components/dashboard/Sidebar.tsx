'use client';

import { Circle, History, Home, LogOut, Shield, Settings, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { logoutUser } from '../../services/authService';
import { useAuthStore } from '../../store/authStore';

const navItems = [
  { id: 'overview', label: 'Overview', icon: Home },
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'settings', label: 'Settings', icon: Settings }
];

const otherItems = [
  { id: 'help', label: 'Help Center', icon: Circle },
  { id: 'activity', label: 'Activity Log', icon: History }
];

type SidebarProps = {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isOpen: boolean;
  onClose: () => void;
  mobile?: boolean;
};

export function Sidebar({ activeSection, onSectionChange, isOpen, onClose, mobile = false }: SidebarProps) {
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);

  const handleLogout = async () => {
    try {
      await logoutUser();
      setUser(null);
      router.push('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const renderSidebarContent = () => (
    <>
      <div className="rounded-[24px] bg-[#111827] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
        <p className="text-sm font-semibold text-white">Auth System</p>
        <p className="text-xs text-slate-500">Premium access</p>
      </div>

      <nav className="mt-8 flex flex-col gap-2 flex-1">
        {navItems.map((item) => {
          const ItemIcon = item.icon;
          const active = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                onSectionChange(item.id);
                if (mobile) onClose();
              }}
              className={`flex w-full items-center gap-3 rounded-[20px] px-4 py-3 text-left text-sm font-medium transition duration-300 ${
                active
                  ? 'bg-gradient-to-r from-[#4F7BFF] to-[#8B5CF6] text-white shadow-[0_15px_30px_-20px_rgba(79,123,255,0.55)]'
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <ItemIcon size={18} />
              {item.label}
            </button>
          );
        })}

        <div className="mt-auto border-t border-white/10 pt-6">
          <p className="mb-3 text-[0.65rem] uppercase tracking-[0.35em] text-slate-500">Other</p>
          <div className="space-y-2">
            {otherItems.map((item) => {
              const ItemIcon = item.icon;
              const active = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSectionChange(item.id);
                    if (mobile) onClose();
                  }}
                  className={`flex w-full items-center gap-3 rounded-[20px] px-4 py-3 text-left text-sm font-medium transition duration-300 ${
                    active
                      ? 'bg-gradient-to-r from-[#4F7BFF] to-[#8B5CF6] text-white shadow-[0_15px_30px_-20px_rgba(79,123,255,0.55)]'
                      : 'text-slate-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <ItemIcon size={18} />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      <div className="rounded-[24px] border border-white/10 bg-[#111827]/80 p-4 shadow-[0_20px_60px_-35px_rgba(0,0,0,0.35)]">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-3xl bg-[#182235] text-slate-200 shadow-sm">
            <User size={18} />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white">Nomonde Mhlanga</p>
            <p className="truncate text-xs text-slate-500">nomonde@example.com</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="mt-4 flex w-full items-center justify-between rounded-[18px] border border-white/10 bg-[#111827] px-4 py-3 text-sm text-slate-200 transition duration-300 hover:bg-white/5 hover:text-red-400 hover:border-red-500/30"
        >
          <span>Logout</span>
          <LogOut size={18} />
        </button>
      </div>
    </>
  );

  if (mobile) {
    return (
      <motion.aside
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: { x: 0, opacity: 1 },
          closed: { x: '-100%', opacity: 0 }
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 26 }}
        className="fixed left-0 top-0 z-50 h-full w-4/5 max-w-[280px] overflow-y-auto rounded-r-[28px] border-r border-white/10 bg-[#111827]/95 p-6 shadow-[0_30px_120px_-80px_rgba(0,0,0,0.5)] backdrop-blur-xl lg:hidden flex flex-col"
      >
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-white">Menu</p>
            <p className="text-xs text-slate-500">Navigation</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10"
          >
            ×
          </button>
        </div>
        {renderSidebarContent()}
      </motion.aside>
    );
  }

  return (
    <aside className="hidden h-full w-full max-w-[280px] flex-col gap-6 overflow-y-auto rounded-r-[28px] border-r border-white/10 bg-[#111827]/95 p-6 shadow-[0_30px_120px_-80px_rgba(0,0,0,0.5)] backdrop-blur-xl lg:flex lg:h-[calc(100vh-64px)] lg:w-[280px] lg:rounded-[28px] lg:border lg:border-white/10">
      {renderSidebarContent()}
    </aside>
  );
}
