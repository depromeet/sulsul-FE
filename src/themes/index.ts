import { ColorTheme, FontTheme } from './types';
import { parseColorTheme } from './utils';
import { fonts } from './fonts';

export const theme: Readonly<ColorTheme & FontTheme> = {
  ...parseColorTheme({
    color: {
      white: '#ffffff',
      blue: '#3E3BE6',
      yellow: '#FFD953',
      grey: '#989898',
      red: '#ff3939', // TODO: 추후 에러 색상 확정되면 변경

      black100: '#000000',
      black80: '#323232',

      whiteOpacity80: 'rgba(255, 255, 255, 0.8)',
      whiteOpacity65: 'rgba(255, 255, 255, 0.65)',
      whiteOpacity50: 'rgba(255, 255, 255, 0.5)',
      whiteOpacity35: 'rgba(255, 255, 255, 0.35)',
      whiteOpacity20: 'rgba(255, 255, 255, 0.2)',
      whiteOpacity0: 'rgba(255, 255, 255, 0)',
    },
    semanticColor: {
      background: 'black100',
      backgroundLow: 'black80',

      primary: 'blue',
      secondary: 'yellow',
    },
  }),
  fonts,
};

export type EmotionTheme = typeof theme;

export { default as GlobalStyle } from './GlobalStyle';
