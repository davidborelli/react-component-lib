import React from 'react';
import { ThemeProvider } from 'styled-components';

import { themes, Direction, ThemeOptionInitial } from './defaults';

type ThemeProviderProps = {
  children: React.ReactElement | React.ReactElement[];
  appTheme: ThemeOptionInitial;
  direction?: Direction;
};

const ThemeProviderComponent = ({ children, appTheme = 'mcs', direction = 'ltr' }: ThemeProviderProps) => {
  const theme = {
    current: {
      ...themes.webs[appTheme],
      direction,
    },
    common: themes.commonTheme,
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProviderComponent;
