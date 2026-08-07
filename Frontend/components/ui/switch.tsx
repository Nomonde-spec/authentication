import * as React from 'react';
import { cn } from './cn';

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Switch({ className, ...props }: SwitchProps) {
  return (
    <label className={cn('relative inline-flex h-7 w-14 cursor-pointer items-center rounded-full bg-slate-700/80 transition duration-300', className)}>
      <input type="checkbox" className="sr-only peer" {...props} />
      <span className="absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow-sm transition duration-300 peer-checked:translate-x-7" />
      <span className="absolute inset-0 rounded-full bg-slate-700/80 peer-checked:bg-slate-500" />
    </label>
  );
}
