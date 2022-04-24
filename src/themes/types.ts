const globalColorGroupNames = ['white', 'black', 'whiteOpacity'] as const;
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
  | MakeTokenSet<'black', [100, 80]>
  | MakeTokenSet<'whiteOpacity', [80, 65, 50, 35, 20]>;

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
