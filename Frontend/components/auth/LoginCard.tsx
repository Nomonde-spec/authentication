'use client';

import { motion } from 'framer-motion';
import { Logo } from './Logo';
import { LoginForm } from './LoginForm';
import { SocialLogin } from './SocialLogin';
import Link from 'next/link';

export function LoginCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass-card w-full max-w-[440px] p-10"
    >
      <div className="flex items-center justify-between">
        <Logo />
        <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.35em] text-slate-400">Login</span>
      </div>

      <div className="mt-6">
        <h2 className="text-3xl font-semibold text-white">Welcome back.</h2>
        <p className="mt-2 text-sm text-slate-400">Sign in to continue to your dashboard.</p>
      </div>

      <LoginForm />

      <div className="mt-6 flex items-center gap-2">
        <div className="h-px flex-1 bg-[rgba(255,255,255,0.04)]" />
        <div className="text-xs text-slate-400">OR CONTINUE WITH</div>
        <div className="h-px flex-1 bg-[rgba(255,255,255,0.04)]" />
      </div>

      <SocialLogin />

      <div className="mt-6 text-center text-sm text-slate-400">
        Don't have an account?{' '}
        <Link href="/register" className="text-white underline-offset-4 hover:underline">
          Create account
        </Link>
      </div>
    </motion.div>
  );
}
