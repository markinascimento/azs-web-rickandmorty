// -> ReactJS
import { useCallback, useState } from 'react';

// -> Utils
import { cn } from '../../../app/utils/cn';
import { SidebarItem } from './components/SidebarItem';
import { Outlet } from 'react-router-dom';
import { AlignJustify, Moon, Sun, X } from 'lucide-react';
import { useTheme } from '../../../app/hooks/useTheme';

export function Sidebar() {
  const { theme, toggleTheme } = useTheme();

  const [open, setOpen] = useState(false);

  const toggleChangeOpen = useCallback(() => {
    setOpen(prevState => !prevState);
  }, []);

  return (
    <div className="flex flex-col flex-1 w-full h-full lg:flex-row overflow-hidden">
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
          'bg-zinc-50 shadow-lg dark:bg-zinc-900 fixed w-[75%] left-[-100%] h-full flex-1 duration-500 lg:max-w-[280px] z-10 lg:relative lg:left-0',
          open && 'left-0'
        )}
      >
        <header className='w-full pb-2 lg:hidden'>
          <button
            onClick={toggleChangeOpen}
            className={cn(
              'flex items-center justify-center min-w-12 min-h-12 lg:hidden'
            )}
          >
            <X className='w-8 h-8' />
          </button>
        </header>

        <div className='flex flex-col flex-1 w-full h-full mt-4 px-2 space-y-6 lg:mt-1'>
          <SidebarItem label='Episodios' path='/' />

          <SidebarItem label='Favoritos' path='/favorite'/>

          <div className='w-full flex-1 justify-start flex items-end py-8'>
            <div className='flex w-full items-center justify-center gap-4'>
              <Sun />

              {/* <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox"  className="sr-only peer" />
                <div className="w-10 h-6 bg-gray-200 peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:absolute after:top-[2px]  after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>

              </label> */}

              <button onClick={toggleTheme} className='relative w-14 rounded-full h-6 bg-zinc-800 dark:bg-zinc-100'>
                <div className={cn(
                  'w-4 h-4 rounded-full translate-x-2 transition-all bg-zinc-100 dark:bg-zinc-800',
                  theme === 'dark' && 'translate-x-[200%]'
                )}/>
              </button>

              <Moon />
            </div>
          </div>
        </div>
      </div>

      <div className='w-full h-full flex flex-col flex-1'>
        <Outlet />
      </div>
    </div>
  );
}
