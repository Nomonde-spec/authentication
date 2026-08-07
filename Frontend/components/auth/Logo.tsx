'use client';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative h-12 w-12 rounded-2xl bg-gradient-to-tr from-[#4F7BFF] to-[#8B5CF6] p-1 shadow-lg shadow-[#4f7bff]/20">
        <div className="h-full w-full rounded-xl bg-[#0B1120] flex items-center justify-center text-lg font-bold text-white">A</div>
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-base font-semibold text-white">Auth Engine</span>
        <span className="text-xs uppercase tracking-[0.24em] text-slate-500">Secure Access</span>
      </div>
    </div>
  );
}
