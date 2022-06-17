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
  | 'darkblue'
  | MakeTokenSet<'blueOpacity', [25]>
  | MakeTokenSet<'yellowOpacity', [20]>
  | 'yellow'
  | MakeTokenSet<'grey', [0, 1, 2, 3, 4, 5]>
  | 'red'
  | MakeTokenSet<'black', [100, 80]>
  | MakeTokenSet<'whiteOpacity', [90, 80, 65, 50, 35, 20, 10, 0]>;

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
  | 'H1'
  | 'H2'
  | 'H3'
  | 'H4'
  | 'H5'
  | 'H6'
  | 'H7'
  | 'SubTitle1'
  | 'SubTitle2'
  | 'SubTitle3'
  | 'SubTitle4'
  | 'SubTitle5'
  | 'Body1'
  | 'Body2'
  | 'Body3'
  | 'Body4'
  | 'Body5'
  | 'SmallBold1'
  | 'SmallBold2'
  | 'SmallBold3'
  | 'Abbr1'
  | 'Abbr2'
  | 'Abbr3'
  | 'BarlowBig'
  | 'BarlowSmall';

export type FontScheme = Record<FontToken, SerializedStyles>;

export type FontTheme = {
  fonts: FontScheme;
};
