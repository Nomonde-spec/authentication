import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080b17] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(79,123,255,0.16),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.12),_transparent_20%)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-[0_60px_120px_-40px_rgba(0,0,0,0.7)] backdrop-blur-2xl lg:grid-cols-[1.4fr_1fr]">
          <section className="space-y-8">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-300/70">Enterprise auth</p>
            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Login faster with a polished auth experience.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-300/90">
              Modern authentication with registration, login, password protection, and responsive UI built for seamless onboarding.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#4F7BFF] to-[#8B5CF6] px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-[#4f7bff]/20 transition duration-200 hover:brightness-110"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-white/10"
              >
                Sign up
              </Link>
            </div>
          </section>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-2xl shadow-slate-950/30">
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/20">
              <h2 className="text-2xl font-semibold text-white">Secure sign in</h2>
              <div className="mt-8 space-y-6">
                <div className="rounded-3xl bg-slate-900/90 p-4 text-slate-300">
                  <label className="text-xs uppercase tracking-[0.3em] text-slate-500">Email</label>
                  <div className="mt-3 flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-slate-200">
                    <span className="text-slate-500">@</span>
                    <span className="text-sm text-slate-400">Enter your email</span>
                  </div>
                </div>
                <div className="rounded-3xl bg-slate-900/90 p-4 text-slate-300">
                  <label className="text-xs uppercase tracking-[0.3em] text-slate-500">Password</label>
                  <div className="mt-3 flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-slate-200">
                    <span className="text-slate-500">*</span>
                    <span className="text-sm text-slate-400">Enter your password</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span />
                  <button type="button" className="font-medium text-slate-200 transition hover:text-white">
                    Forgot password?
                  </button>
                </div>
                <button className="w-full rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-xl shadow-violet-500/20 transition hover:brightness-110">
                  Login
                </button>
              </div>
              <div className="mt-8 text-center text-sm text-slate-400">
                <p>Or sign up using</p>
                <div className="mt-4 flex items-center justify-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-slate-200">F</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-slate-200">T</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-slate-200">G</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
