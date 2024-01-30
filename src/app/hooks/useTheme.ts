// -> ReactJS
import { useCallback, useEffect, useState } from 'react';

// -> Configs
import { localStorageKeys } from '../config/localStorageKeys';

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const storagedTheme = localStorage.getItem(localStorageKeys.APP_THEME);
    return storagedTheme ?? 'dark';
  });

  useEffect(() => {
    if(theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const prevTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(prevTheme);
    localStorage.setItem(localStorageKeys.APP_THEME, prevTheme);
  }, [theme]);

  return {
    theme,
    toggleTheme
  };
}
