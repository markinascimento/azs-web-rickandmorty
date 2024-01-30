// -> Routing lib
import { Link, useLocation } from 'react-router-dom';

// -> Utils
import { cn } from '../../../../app/utils/cn';

// -> Types
interface SidebarItemProps {
  label: string;
  path: string;
}

export function SidebarItem({ label, path }: SidebarItemProps) {
  const { pathname }  = useLocation();

  const isActive = pathname === path;

  return (
    <Link
      to={path}
      className={cn(
        'flex w-full min-h-[52px] items-center px-4 rounded-md text-lg font-bold tracking-[-0.5px] hover:text-base transition-all',
        isActive && 'bg-zinc-200 dark:bg-zinc-800'
      )}
    >
      <span> {label} </span>
    </Link>
  );
}
