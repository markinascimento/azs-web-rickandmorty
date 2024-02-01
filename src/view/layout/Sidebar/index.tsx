// -> ReactJS
import { useCallback, useState } from 'react';

// -> Utils
import { cn } from '../../../app/utils/cn';
import { SidebarItem } from './components/SidebarItem';
import { Outlet } from 'react-router-dom';
import { AlignJustify, Home, MonitorPlay, Star, X } from 'lucide-react';

import logoImg from '../../assets/logo.svg';

export function Sidebar() {
  const [open, setOpen] = useState(false);

  const toggleChangeOpen = useCallback(() => {
    setOpen(prevState => !prevState);
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
          <SidebarItem label='Episodios' path='/'  Icon={Home}/>

          <SidebarItem label='Favoritos' path='/favorite' Icon={Star}/>

          <SidebarItem label='Continuar assistindo' path='/continue_watching' Icon={MonitorPlay}/>
        </div>
      </div>

      <div className='w-full h-full flex flex-col flex-1 md:ml-8 overflow-y-hidden'>
        <Outlet />
      </div>
    </div>
  );
}
