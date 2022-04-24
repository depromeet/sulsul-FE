import { ColorTheme } from './types';

export const lightTheme: Readonly<ColorTheme> = {
  color: {
    white: '#ffffff',

    black100: '#000000',
    black80: '#323232',

    whiteOpacity80: 'rgba(255, 255, 255, 0.8)',
    whiteOpacity65: 'rgba(255, 255, 255, 0.65)',
    whiteOpacity50: 'rgba(255, 255, 255, 0.5)',
    whiteOpacity35: 'rgba(255, 255, 255, 0.35)',
    whiteOpacity20: 'rgba(255, 255, 255, 0.2)',
  },
  semanticColor: {
    background: '#000000',
    backgroundLow: '#323232',

    primary: '#3E3BE6',
    secondary: '#FFD953',
  },
};

export const darkTheme: Readonly<ColorTheme> = {
  color: {
    white: '#ffffff',

    black100: '#000000',
    black80: '#323232',

    whiteOpacity80: 'rgba(255, 255, 255, 0.8)',
    whiteOpacity65: 'rgba(255, 255, 255, 0.65)',
    whiteOpacity50: 'rgba(255, 255, 255, 0.5)',
    whiteOpacity35: 'rgba(255, 255, 255, 0.35)',
    whiteOpacity20: 'rgba(255, 255, 255, 0.2)',
  },
  semanticColor: {
    background: '#000000',
    backgroundLow: '#323232',

    primary: '#3E3BE6',
    secondary: '#FFD953',
  },
};

export type EmotionTheme = typeof lightTheme;

export { default as GlobalStyle } from './GlobalStyle';
