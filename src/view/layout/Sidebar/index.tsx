// -> ReactJS
import { useCallback, useState } from 'react';

// -> Routing lib
import { Outlet, useNavigate } from 'react-router-dom';

// -> Icons lib
import { AlignJustify, X } from 'lucide-react';

// -> Utils
import { cn } from '../../../app/utils/cn';

// -> Components
import { SidebarItem } from './components/SidebarItem';

// -> Images
import logoImg from '../../assets/logo.svg';

// -> Data
import { dataRouter } from './dataRouter';

export function Sidebar() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const toggleChangeOpen = useCallback(() => {
    setOpen(prevState => !prevState);
  }, []);

  const handleNavigate = useCallback((path: string) => {
    navigate(path, { replace: true });
    setOpen(false);
  }, []);

  return (
    <div className="flex flex-col flex-1 w-full h-full lg:flex-row overflow-hidden md:p-8">
      <div>
        <button
          onClick={toggleChangeOpen}
          className={cn(
            'flex items-center justify-center min-w-12 min-h-12 lg:hidden'
          )}
        >
          <AlignJustify className='w-8 h-8' />
        </button>
      </div>

      <div
        className={cn(
          'bg-primary fixed w-[75%] left-[-100%] h-full flex-1 duration-500 lg:max-w-[280px] z-10 lg:relative lg:left-0 lg:rounded-2xl',
          open && 'left-0'
        )}
      >
        <header className='flex flex-col items-start w-full pb-2'>
          <button
            onClick={toggleChangeOpen}
            className={cn(
              'flex items-center justify-center min-w-12 min-h-12 lg:hidden'
            )}
          >
            <X className='w-8 h-8' />
          </button>

          <div className='flex items-center justify-center w-full bg-blue-500 md:mt-4'>
            <img src={logoImg} alt="" className='w-28' />
          </div>
        </header>

        <div className='flex flex-col flex-1 w-full h-full mt-8 px-4 space-y-6'>
          {dataRouter.map(route => (
            <SidebarItem
              key={route.id}
              label={route.label}
              path={route.path}
              Icon={route.Icon}
              onNavigate={() => handleNavigate(route.path)}
            />
          ))}
        </div>
      </div>

      <div className='w-full h-full flex flex-col flex-1 md:ml-8 overflow-y-hidden'>
        <Outlet />
      </div>
    </div>
  );
}
