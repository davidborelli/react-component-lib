import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Direction, Theme } from './defaults';

type ThemeProviderProps = {
  children: React.ReactElement | React.ReactElement[];
  theme: Theme;
  direction?: Direction;
};

const ThemeProviderComponent = ({ children, theme }: ThemeProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProviderComponent;
