import { ColorTheme, FontTheme } from './types';
import { parseColorTheme } from './utils';
import { fonts } from './fonts';

export const theme: Readonly<ColorTheme & FontTheme> = {
  ...parseColorTheme({
    color: {
      white: '#ffffff',
      red: '#ff3939', // TODO: 추후 에러 색상 확정되면 변경
      blue: '#3E3BE6',
      darkblue: '#25238A',
      blueOpacity25: 'rgba(62, 59, 230, 0.25)',
      yellow: '#FFD953',
      yellowOpacity20: 'rgba(255, 217, 83, 0.25)',

      black100: '#000000',
      black80: '#323232',

      grey0: '#f5f5f5',
      grey1: '#dddddd',
      grey2: '#c7c7c7',
      grey3: '#b9b9b9',
      grey4: '#989898',
      grey5: '#222222',

      whiteOpacity90: 'rgba(255, 255, 255, 0.9)',
      whiteOpacity80: 'rgba(255, 255, 255, 0.8)',
      whiteOpacity65: 'rgba(255, 255, 255, 0.65)',
      whiteOpacity50: 'rgba(255, 255, 255, 0.5)',
      whiteOpacity35: 'rgba(255, 255, 255, 0.35)',
      whiteOpacity20: 'rgba(255, 255, 255, 0.2)',
      whiteOpacity10: 'rgba(255, 255, 255, 0.1)',
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
