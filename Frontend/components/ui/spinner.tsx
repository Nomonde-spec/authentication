import * as React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from './cn';

type SpinnerProps = {
  size?: number;
  className?: string;
  label?: string;
};

export function Spinner({ size = 18, className, label = 'Loading' }: SpinnerProps) {
  return (
    <span role="status" aria-live="polite" className={cn('inline-flex items-center gap-2', className)}>
      <Loader2
        className="animate-spin"
        style={{ width: size, height: size }}
        aria-hidden
      />
      <span className="sr-only">{label}</span>
    </span>
  );
}