import 'styled-components';
import type { CSSProp } from 'styled-components';
import defaultTheme from './src/theme/default';

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}