// -> ReactJS
import { ReactNode } from 'react';

// -> Utils
import { cn } from '../../app/utils/cn';

// -> Types
interface BodyListProps {
  children: ReactNode;
  className?: string
}

export function BodyList({ children, className }: BodyListProps) {
  return (
    <div
      className={cn(
        'w-full h-full flex-1 overflow-y-auto',
        className
      )}
    >
      {children}
    </div>
  );
}
