// -> ReactJS
import { ReactNode } from 'react';

// -> Utils
import { cn } from '../../app/utils/cn';

// -> Types
interface ContainerProps {
  children: ReactNode;
  className?: string
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        'w-full h-full flex-1 p-6 lg:p-8',
        className
      )}
    >
      {children}
    </div>
  );
}
