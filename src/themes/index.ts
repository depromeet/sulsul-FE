export const lightTheme = {
  sample: {
    PRIMARY: '#084B8A',
    BUTTON_PRIMARY: '#ABCCEC',
    BUTTON_DEFAULT_FONT: '#435A6F',
  },
};

export const darkTheme = {
  sample: {
    PRIMARY: '#084B8A',
    BUTTON_PRIMARY: '#565656',
    BUTTON_DEFAULT_FONT: '#999999',
  },
};

export type EmotionTheme = typeof lightTheme;

export { default as GlobalStyle } from './GlobalStyle';
