// -> ReactJS
import { ElementType } from 'react';

// -> Routing lib
import { useLocation } from 'react-router-dom';

// -> Utils
import { cn } from '../../../../app/utils/cn';

// -> Types
interface SidebarItemProps {
  label: string;
  path: string;
  Icon: ElementType;
  onNavigate(): void;
}

export function SidebarItem({ label, path, Icon, onNavigate }: SidebarItemProps) {
  const { pathname }  = useLocation();

  const isActive = pathname === path;

  return (
    <button
      type='button'
      onClick={onNavigate}
      className={cn(
        'flex w-full items-center gap-2 px-4 min-h-[52px] bg-transparent rounded-xl',
        isActive && 'bg-[#121E29]'
      )}
    >
      <Icon className="h-5 w-5" />
      <span className='font-medium mt-1'> {label} </span>
    </button>
  );
}
