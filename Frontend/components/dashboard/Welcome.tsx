'use client';

export function Welcome() {
  return (
    <section className="rounded-[32px] border border-white/10 bg-[#182235]/90 p-8 shadow-[0_30px_90px_-60px_rgba(0,0,0,0.75)] backdrop-blur-xl">
      <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Welcome back</p>
      <h1 className="mt-4 text-4xl font-bold text-white">Welcome back, Nomonde! 👋</h1>
      <p className="mt-3 max-w-2xl text-base text-slate-300">Manage your account and settings from here.</p>
    </section>
  );
}
