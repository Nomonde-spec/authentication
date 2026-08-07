'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { fetchProfile, logoutUser } from '../../services/authService';
import { useAuthStore } from '../../store/authStore';
import { Spinner } from '../../components/ui/spinner';
import { DashboardLayout } from '../../components/dashboard';
import { Welcome } from '../../components/dashboard/Welcome';
import { SummaryCards } from '../../components/dashboard/SummaryCards';
import { SecurityPanel } from '../../components/dashboard/SecurityPanel';
import { RecentActivity } from '../../components/dashboard/RecentActivity';
import { QuickActions } from '../../components/dashboard/QuickActions';

export default function DashboardPage() {
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);
  const user = useAuthStore((state) => state.user);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('overview');

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const response = await fetchProfile();
        setUser(response.data);
      } catch (fetchError: any) {
        setError(fetchError?.response?.data?.message || 'Unable to load profile');
        router.replace('/login');
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [router, setUser]);

  const handleLogout = async () => {
    await logoutUser();
    setUser(null);
    router.push('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <DashboardLayout activeSection={activeSection} onSectionChange={setActiveSection}>
      {error ? (
        <div className="rounded-[28px] border border-white/10 bg-[#182235]/95 p-6 text-rose-400 shadow-[0_35px_90px_-50px_rgba(0,0,0,0.65)]">{error}</div>
      ) : (
        <>
          <Welcome />
          <SummaryCards />
          <SecurityPanel />
          <div className="grid gap-6 xl:grid-cols-[1.5fr_0.85fr]">
            <RecentActivity />
            <QuickActions />
          </div>
        </>
      )}
    </DashboardLayout>
  );
}
