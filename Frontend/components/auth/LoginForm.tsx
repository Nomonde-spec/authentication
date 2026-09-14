'use client';

import { useState } from 'react';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { Spinner } from '../ui/spinner';
import { loginUser } from '../../services/authService';
import { useAuthStore } from '../../store/authStore';
import { useRouter } from 'next/navigation';

type LoginFormProps = {
  onLoginStart?: () => void;
};

export function LoginForm({ onLoginStart }: LoginFormProps) {
  const router = useRouter();
  const setUser = useAuthStore((s) => s.setUser);
  const setAccessToken = useAuthStore((s) => s.setAccessToken);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const formValid = emailValid && password.length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formValid) return;
    setLoading(true);
    setError(null);
    onLoginStart?.();
    try {
      const res = await loginUser({ email, password });

      // Handle different possible shapes of the response
      const data = res?.data ?? res;
      const token = data?.accessToken ?? data?.access_token ?? data?.token ?? data?.data?.accessToken ?? null;
      const user = data?.user ?? data?.data?.user ?? null;

      if (token) {
        setAccessToken(token);
        if (remember) {
          try {
            localStorage.setItem('accessToken', token);
          } catch (e) {
            // ignore
          }
        }
      }

      if (user) setUser(user);

      router.replace('/dashboard');
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
      <label className="flex w-full flex-col">
        <span className="mb-2 text-sm text-muted-foreground">Email address</span>
        <div className="relative">
          <span className="absolute left-3 top-3 text-muted-foreground"><Mail size={16} /></span>
          <input
            aria-label="Email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-2xl border border-border bg-secondary px-12 py-3 text-foreground placeholder:text-muted-foreground transition duration-200 focus:border-[#4F7BFF] focus:outline-none focus:ring-2 focus:ring-[#4F7BFF]/40"
          />
        </div>
        {!emailValid && email.length > 0 && <span className="mt-2 text-xs text-rose-500">Enter a valid email.</span>}
      </label>

      <label className="flex w-full flex-col">
        <div className="flex items-center justify-between">
          <span className="mb-2 text-sm text-muted-foreground">Password</span>
          <a className="text-sm text-muted-foreground hover:underline" href="/forgot">Forgot?</a>
        </div>
        <div className="relative">
          <span className="absolute left-3 top-3 text-muted-foreground"><Lock size={16} /></span>
          <input
            aria-label="Password"
            type={show ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full rounded-2xl border border-border bg-secondary px-12 py-3 text-foreground placeholder:text-muted-foreground transition duration-200 focus:border-[#4F7BFF] focus:outline-none focus:ring-2 focus:ring-[#4F7BFF]/40"
          />
          <button
            type="button"
            aria-label={show ? 'Hide password' : 'Show password'}
            onClick={() => setShow((s) => !s)}
            className="absolute right-3 top-3 inline-flex items-center justify-center text-muted-foreground"
          >
            {show ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </label>

      <div className="flex items-center justify-between">
        <label className="inline-flex items-center gap-2 text-sm text-muted-foreground">
          <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} className="h-4 w-4 rounded border-border bg-secondary text-foreground" />
          Remember me
        </label>
      </div>

      {error && <div className="rounded-2xl border border-rose-400/20 bg-rose-500/10 px-4 py-3 text-sm text-rose-600 dark:text-rose-200">{error}</div>}

      <button
        disabled={!formValid || loading}
        type="submit"
        className="mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#4F7BFF] to-[#8B5CF6] text-white shadow-xl shadow-[#4F7BFF]/20 transition duration-200 hover:-translate-y-0.5 disabled:opacity-50"
      >
        {loading ? <Spinner /> : 'Sign In'}
      </button>
    </form>
  );
}
