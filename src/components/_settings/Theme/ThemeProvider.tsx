import React from 'react';
import { ThemeProvider } from 'styled-components';

import { themes, Direction, ThemeOptionInitial } from './defaults';

type ThemeProviderProps = {
  children: React.ReactElement | React.ReactElement[];
  theme: ThemeOptionInitial;
  direction?: Direction;
};

const ThemeProviderComponent = ({ children, theme = 'mcs', direction = 'ltr' }: ThemeProviderProps) => {
  const fullTheme = { ...(themes[theme] || themes.mcs), direction };
  console.log('*** FULL THEME => ', fullTheme);
  return <ThemeProvider theme={fullTheme}>{children}</ThemeProvider>;
};

export default ThemeProviderComponent;
