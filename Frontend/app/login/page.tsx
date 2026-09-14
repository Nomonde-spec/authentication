'use client';

import { LoginCard } from '../../components/auth/LoginCard';
import { BackgroundEffects } from '../../components/auth/BackgroundEffects';
import { ThemeToggle } from '../../components/ui/theme-toggle';

export default function LoginPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <BackgroundEffects />
      <div className="absolute top-6 right-6 z-10">
        <ThemeToggle />
      </div>
      <div className="mx-auto flex min-h-screen w-full max-w-[1400px] items-center justify-center px-6 py-20">
        <div className="w-full max-w-[540px]">
          <LoginCard />
        </div>
      </div>
    </div>
  );
}
