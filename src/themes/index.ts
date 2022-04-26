import { ColorTheme } from './types';
import { parseColorTheme } from './utils';

export const lightTheme: Readonly<ColorTheme> = parseColorTheme({
  color: {
    white: '#ffffff',
    blue: '#3E3BE6',
    yellow: '#FFD953',

    black100: '#000000',
    black80: '#323232',

    whiteOpacity80: 'rgba(255, 255, 255, 0.8)',
    whiteOpacity65: 'rgba(255, 255, 255, 0.65)',
    whiteOpacity50: 'rgba(255, 255, 255, 0.5)',
    whiteOpacity35: 'rgba(255, 255, 255, 0.35)',
    whiteOpacity20: 'rgba(255, 255, 255, 0.2)',
  },
  semanticColor: {
    background: 'black100',
    backgroundLow: 'black80',

    primary: 'blue',
    secondary: 'yellow',
  },
});

export const darkTheme: Readonly<ColorTheme> = parseColorTheme({
  color: {
    white: '#ffffff',
    blue: '#3E3BE6',
    yellow: '#FFD953',

    black100: '#000000',
    black80: '#323232',

    whiteOpacity80: 'rgba(255, 255, 255, 0.8)',
    whiteOpacity65: 'rgba(255, 255, 255, 0.65)',
    whiteOpacity50: 'rgba(255, 255, 255, 0.5)',
    whiteOpacity35: 'rgba(255, 255, 255, 0.35)',
    whiteOpacity20: 'rgba(255, 255, 255, 0.2)',
  },
  semanticColor: {
    background: 'black100',
    backgroundLow: 'black80',

    primary: 'blue',
    secondary: 'yellow',
  },
});

export type EmotionTheme = typeof lightTheme;

export { default as GlobalStyle } from './GlobalStyle';
