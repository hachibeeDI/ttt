import {tint, shade, opacify} from 'polished';
import baseStyled, {createGlobalStyle, ThemedStyledInterface} from 'styled-components';

const colorPrimary = '#bf0000';
const colorSecondary = '#7b7a7d';

// reference CSS variable i.e. --text-${Size}
export type Size = 'xxs' | 'xs' | 'sm' | 'unit' | 'md' | 'lg' | 'xl' | 'xxl';

export const defaultTheme = {
  spaceUnit: '16px',

  primary: colorPrimary,
  primaryDark: shade(0.01, colorPrimary),
  primaryLight: tint(0.15, colorPrimary),
  primarySuperLight: tint(0.45, colorPrimary),

  secondary: colorSecondary,
  secondaryDark: shade(0.15, colorSecondary),
  secondaryLight: tint(0.15, colorSecondary),

  color: {
    textBase: '#65656b',
    textAside: '#d1d0d2',
    bgColor: '#FFF',
  },
};

export type Theme = typeof defaultTheme;
