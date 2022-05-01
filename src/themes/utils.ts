import type {
  ColorToken,
  ColorScheme,
  SemanticColorKey,
  SemanticColorScheme,
  ColorTheme,
} from './types';

export const populateSemanticColors = (
  colors: ColorScheme,
  semantics: SemanticColorScheme,
): Readonly<SemanticColorScheme> => {
  const result = {} as SemanticColorScheme;
  for (const [k, v] of Object.entries(semantics)) {
    result[k as SemanticColorKey] = colors[v as ColorToken] ?? v;
  }
  return Object.freeze(result);
};

export const parseColorTheme = (colorTheme: Readonly<ColorTheme>) => {
  const { color, semanticColor } = colorTheme;
  return {
    color,
    semanticColor: populateSemanticColors(color, semanticColor),
  };
};
