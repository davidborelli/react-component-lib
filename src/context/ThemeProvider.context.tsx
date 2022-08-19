import React, { useContext, useState, useEffect, createContext } from 'react';

import HandleLocalStorage from '../lib/HandleLocalStorage';
import { ThemeOptionInitial, Direction } from '../components/_settings/ThemeProvider/defaults';
import StyleProvider from '../components/_settings/ThemeProvider/ThemeProvider';

type ThemeProviderContextProps = {
  children: React.ReactElement | React.ReactElement[];
  value: ThemeProviderInitialValues;
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
  direction: Direction;
  changeThemeMode: () => void;
};

type ThemeProviderInitialValues = {
  theme: ThemeOptionInitial;
  locale: string;
  cdnPath: string;
  publicUrl: string;
  absolutUrl: string;
  domains: string[];
  direction: Direction;
};

const INITIAL_VALUE = {
  theme: 'lmem',
  locale: 'es',
  cdnPath: 'https://cdn.atomik.vip/',
  publicUrl: '',
  absolutUrl: '',
  domains: [],
  direction: 'ltr',
} as ThemeProviderInitialValues;

const ThemeProvider = createContext<ThemeProviderContextPropsData>({} as ThemeProviderContextPropsData);

export function ThemeProviderContext({ children, value = INITIAL_VALUE }: ThemeProviderContextProps) {
  const LOCAL_STORAGE_NAME = 'themeColorMode';
  const [theme, setTheme] = useState<ThemeProviderInitialValues>(value);
  const HandleTheme = new HandleLocalStorage<ColorMode>(LOCAL_STORAGE_NAME);
  const [colorMode, setColorMode] = useState<ColorMode>('light');

  useEffect(() => {
    const currentTheme = HandleTheme.getItem();

    if (currentTheme) {
      setColorMode(currentTheme);
      return;
    }

    HandleTheme.setItem('light');
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
        colorMode,
        userLogged: false,
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
