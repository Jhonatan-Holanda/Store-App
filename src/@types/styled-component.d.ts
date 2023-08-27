import 'styled-components';
import type { CSSProp } from "styled-components";
import defaultTheme from '../theme/default';

declare module 'styled-components' {
  type ThemeType = typeof defaultTheme;

  export interface DefaultTheme extends ThemeType {}
}