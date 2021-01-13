import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const colors = {
  bg: {
    main: '#272727',
    light: '#4f4f4f',
  },
  text: {
    main: '#ffffff',
    light: '#D7D7D7',
    inactive: '#BFBFBF',
    dark: '#000000',
  },

  primary: {
    main: '#3DBAD6',
    dark: '#15A1C0',
  },
  secondary: {
    main: '#2bad6f',
    light: '#38DC8D',
  },
};

const fonts = {
  body: 'Nunito',
};

const breakpoints = createBreakpoints({
  sm: '370px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  xxl: '1400px',
});

export const theme = extendTheme({
  colors,
  fonts,
  breakpoints,
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'bg.main',
      },
    },
  },
});
