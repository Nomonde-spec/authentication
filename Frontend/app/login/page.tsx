'use client';

import { LoginCard } from '../../components/auth/LoginCard';
import { BackgroundEffects } from '../../components/auth/BackgroundEffects';

export default function LoginPage() {
  return (
    <div className="relative min-h-screen bg-[#0B1120] text-white overflow-hidden">
      <BackgroundEffects />
      <div className="mx-auto flex min-h-screen w-full max-w-[1400px] items-center justify-center px-6 py-20">
        <div className="w-full max-w-[540px]">
          <LoginCard />
        </div>
      </div>
    </div>
  );
}
