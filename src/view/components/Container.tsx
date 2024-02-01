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
        'flex flex-col w-full h-full flex-1',
        className
      )}
    >
      {children}
    </div>
  );
}
