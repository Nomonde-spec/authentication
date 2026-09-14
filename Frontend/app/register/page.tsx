'use client';

import { motion } from 'framer-motion';
import { Logo } from '../../components/auth/Logo';
import { BackgroundEffects } from '../../components/auth/BackgroundEffects';
import { ThemeToggle } from '../../components/ui/theme-toggle';
import Link from 'next/link';
import { useState } from 'react';
import { registerUser } from '../../services/authService';
import { useRouter } from 'next/navigation';
import { Spinner } from '../../components/ui/spinner';

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' });

  const valid = form.email.includes('@') && form.password.length >= 6 && form.password === form.confirmPassword;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid) return;
    setLoading(true);
    setError(null);
    try {
      await registerUser(form);
      router.push('/dashboard');
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Unable to register');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <BackgroundEffects />
      <div className="absolute top-6 right-6 z-10">
        <ThemeToggle />
      </div>
      <div className="mx-auto flex min-h-screen w-full max-w-[1400px] items-center justify-center px-6 py-20">
        <div className="w-full max-w-[540px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-[540px] glass-card p-10"
          >
            <div className="flex items-center justify-between">
              <Logo />
              <span className="text-xs uppercase tracking-[0.35em] text-slate-500">Register</span>
            </div>
            <div className="mt-6">
              <h2 className="text-3xl font-bold">Create your secure account</h2>
              <p className="mt-3 text-slate-400">Access the dashboard, analytics, and team tools.</p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  value={form.firstName}
                  onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                  placeholder="First name"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:border-[#4F7BFF] focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#4F7BFF]/40"
                />
                <input
                  value={form.lastName}
                  onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                  placeholder="Last name"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:border-[#4F7BFF] focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#4F7BFF]/40"
                />
              </div>
              <input
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                type="email"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:border-[#4F7BFF] focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#4F7BFF]/40"
              />
              <input
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="Password"
                type="password"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:border-[#4F7BFF] focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#4F7BFF]/40"
              />
              <input
                value={form.confirmPassword}
                onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                placeholder="Confirm password"
                type="password"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:border-[#4F7BFF] focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#4F7BFF]/40"
              />

              {error && <div className="rounded-2xl border border-rose-400/20 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">{error}</div>}

              <button
                disabled={!valid || loading}
                type="submit"
                className="mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#4F7BFF] to-[#8B5CF6] text-white shadow-xl shadow-[#4F7BFF]/20 transition duration-200 hover:-translate-y-0.5 disabled:opacity-50"
              >
                {loading ? <Spinner /> : 'Create account'}
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-slate-400">
              Already have an account?{' '}
              <Link href="/login" className="text-white underline-offset-4 hover:underline">
                Sign in
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
