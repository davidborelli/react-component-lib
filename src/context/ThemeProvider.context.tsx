import React, { useContext, useState, useEffect, createContext } from 'react';

import HandleLocalStorage from '../lib/HandleLocalStorage';
import { ThemeOptionInitial, Direction } from '../components/_settings/ThemeProvider/defaults';
import StyleProvider from '../components/_settings/ThemeProvider/ThemeProvider';

type ThemeProviderContextProps = {
  children: React.ReactElement | React.ReactElement[];
  value: ThemeProviderContextPropsData;
};

type ColorMode = 'light' | 'dark';

type ThemeProviderContextPropsData = {
  theme: ThemeOptionInitial;
  locale: string;
  cdnPath: string;
  userLogged: boolean;
  domains: string[];
  publicUrl: string;
  absolutUrl: string;
  colorMode: ColorMode;
  changeThemeMode: () => void;
  direction: Direction;
};

const DEFAULT_THEME = {
  theme: 'lmem',
  locale: 'es',
  cdnPath: 'https://cdn.atomik.vip/',
  userLogged: false,
  domains: [],
  publicUrl: '',
  absolutUrl: '',
  colorMode: 'light',
  direction: 'ltr',
  changeThemeMode: () => null,
} as ThemeProviderContextPropsData;

const ThemeProvider = createContext<ThemeProviderContextPropsData>({} as ThemeProviderContextPropsData);

export function ThemeProviderContext({ children, value = DEFAULT_THEME }: ThemeProviderContextProps) {
  const LOCAL_STORAGE_NAME = 'themeColorMode';

  const [theme, setTheme] = useState<ThemeProviderContextPropsData>(value);

  const HandleTheme = new HandleLocalStorage<ColorMode>(LOCAL_STORAGE_NAME);

  useEffect(() => {
    const currentTheme = HandleTheme.getItem();

    if (currentTheme) {
      setTheme((oldValues) => ({ ...oldValues, colorMode: currentTheme }));
      return;
    }

    HandleTheme.setItem(DEFAULT_THEME.colorMode);
  }, []);

  const changeThemeMode = () => {
    const currentThemeMode = HandleTheme.getItem();

    if (!currentThemeMode) return;

    const changedCurrentThemeMode: ColorMode = currentThemeMode === 'dark' ? 'light' : 'dark';

    setTheme((oldValues) => ({ ...oldValues, colorMode: changedCurrentThemeMode }));
    HandleTheme.setItem(changedCurrentThemeMode);
  };

  return (
    <ThemeProvider.Provider
      value={{
        ...theme,
        changeThemeMode,
      }}
    >
      <StyleProvider direction={theme.direction} theme={theme.theme}>
        {children}
      </StyleProvider>
    </ThemeProvider.Provider>
  );
}

const useTheme = () => {
  const context = useContext(ThemeProvider);
  return context;
};

export { useTheme };
