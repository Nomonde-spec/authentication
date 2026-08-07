import * as React from 'react';
import { cn } from './cn';

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Separator({ className, ...props }: SeparatorProps) {
  return <div className={cn('h-px w-full bg-white/10', className)} {...props} />;
}
