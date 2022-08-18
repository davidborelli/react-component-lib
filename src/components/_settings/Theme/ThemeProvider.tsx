import React from 'react';
import { ThemeProvider } from 'styled-components';

import { themes, Direction, ThemeOptionInitial } from './defaults';

type ThemeProviderProps = {
  children: React.ReactChildren;
  theme: ThemeOptionInitial;
  direction?: Direction;
};

const ThemeProviderComponent = ({ children, theme = 'mcs', direction = 'ltr' }: ThemeProviderProps) => {
  const fullTheme = { ...(themes[theme] || themes.mcs), direction };
  return <ThemeProvider theme={fullTheme}>{children}</ThemeProvider>;
};

export default ThemeProviderComponent;
