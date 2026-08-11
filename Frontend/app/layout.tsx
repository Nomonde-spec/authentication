import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Auth System',
  description: 'Enterprise-grade authentication system with login, registration, and dashboard',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
