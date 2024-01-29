// -> ReactJS
import { useCallback, useState } from 'react';

// -> Config
import { localStorageKeys } from '../config/localStorageKeys';

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const storegedTheme = localStorage.getItem(localStorageKeys.APP_THEME);
    return storegedTheme ?? 'dark';
  });

  const toggleTheme = useCallback(() => {
    const storegedTheme = localStorage.getItem(localStorageKeys.APP_THEME);
    const currentTheme = storegedTheme === 'dark' ? 'light' : 'dark';
    setTheme(currentTheme);
    localStorage.setItem(localStorageKeys.APP_THEME, currentTheme);
  }, [theme]);

  return {
    theme,
    toggleTheme
  };
}
