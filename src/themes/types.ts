import { SerializedStyles } from '@emotion/react';

const globalColorGroupNames = [
  'white',
  'black',
  'whiteOpacity',
  'grey',
  'blueOpacity',
  'yellowOpacity',
] as const;
export type GlobalColorGroup = typeof globalColorGroupNames[number];
export function isGlobalColorGroup(str: string): str is GlobalColorGroup {
  return globalColorGroupNames.includes(str as GlobalColorGroup);
}

type MakeTokenSet<
  TGroup extends GlobalColorGroup,
  TLightness extends number[],
> = `${TGroup}${TLightness[number]}`;
export type ColorToken =
  | 'white'
  | 'blue'
  | MakeTokenSet<'blueOpacity', [25]>
  | MakeTokenSet<'yellowOpacity', [20]>
  | 'yellow'
  | MakeTokenSet<'grey', [0, 1, 2, 3, 4, 5]>
  | 'red'
  | MakeTokenSet<'black', [100, 80]>
  | MakeTokenSet<'whiteOpacity', [80, 65, 50, 35, 20, 0]>;

export type ColorScheme = Record<ColorToken, string>;

export type SemanticColorKey = 'background' | 'backgroundLow' | 'primary' | 'secondary';

export type SemanticColorScheme = Record<SemanticColorKey, string>;

export type ColorTheme = {
  /**
   * Raw color tokens
   */
  color: ColorScheme;

  /**
   * Sematic color object
   */
  semanticColor: SemanticColorScheme;
};

export type FontToken =
  | 'mainTitle'
  | 'subTitle'
  | 'subTitleEng'
  | 'contentTitle'
  | 'content'
  | 'beerNameGrid'
  | 'beerNameList';

export type FontScheme = Record<FontToken, SerializedStyles>;

export type FontTheme = {
  fonts: FontScheme;
};
