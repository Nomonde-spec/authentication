'use client';

import { Github, Globe, Monitor } from 'lucide-react';

type SocialLoginProps = {
  onSocialLogin?: (provider: string) => void;
};

export function SocialLogin({ onSocialLogin }: SocialLoginProps) {
  return (
    <div className="mt-4 grid gap-3">
      <button
        aria-label="Continue with Google"
        onClick={() => onSocialLogin?.('google')}
        className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition duration-200 hover:-translate-y-0.5 hover:bg-white/10 shadow-sm shadow-slate-950/20"
      >
        <Globe size={18} />
        <span>Continue with Google</span>
      </button>
      <button
        aria-label="Continue with GitHub"
        onClick={() => onSocialLogin?.('github')}
        className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition duration-200 hover:-translate-y-0.5 hover:bg-white/10 shadow-sm shadow-slate-950/20"
      >
        <Github size={18} />
        <span>Continue with GitHub</span>
      </button>
      <button
        aria-label="Continue with Microsoft"
        onClick={() => onSocialLogin?.('microsoft')}
        className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition duration-200 hover:-translate-y-0.5 hover:bg-white/10 shadow-sm shadow-slate-950/20"
      >
        <Monitor size={18} />
        <span>Continue with Microsoft</span>
      </button>
    </div>
  );
}
