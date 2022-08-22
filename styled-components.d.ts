import { Theme } from './src/components/_settings/ThemeProvider/defaults';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
