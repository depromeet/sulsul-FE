import { SVGProps } from 'react';
import styled from '@emotion/styled';

import * as icon from '@/assets/icon';
import { ColorTheme } from '@/themes/types';
import { theme } from '@/themes';

export type IconNameType = keyof typeof icon;
export type ColorThemeNameType = keyof ColorTheme['color'];
export type SemanticColorThemeNameType = keyof ColorTheme['semanticColor'];

const DEFAULT_SIZE = 30;

interface SvgIconProps extends SVGProps<SVGSVGElement> {
  name: IconNameType;
  size?: number;
  width?: string;
  height?: string;
  color?: ColorThemeNameType;
  /** semanticColor가 color보다 적용 우선순위가 높습니다. */
  semanticColor?: SemanticColorThemeNameType;
}

const Icon = ({
  name,
  size = DEFAULT_SIZE,
  width,
  height,
  color,
  semanticColor,
  style,
  ...props
}: SvgIconProps) => {
  const SvgIcon = icon[name];

  const StyledSvgIcon = styled(SvgIcon)<Pick<SvgIconProps, 'color' | 'semanticColor'>>`
    &,
    path {
      ${(p) => (p.color ? `fill: ${theme.color[color as ColorThemeNameType]} !important` : '')};
      ${(p) =>
        p.semanticColor
          ? `fill: ${theme.semanticColor[semanticColor as SemanticColorThemeNameType]} !important`
          : ''};
    }
  `;

  return (
    <StyledSvgIcon
      {...props}
      color={color}
      semanticColor={semanticColor}
      style={{
        width: width ?? `${size}px`,
        height: height ?? 'auto',
        ...style,
      }}
    />
  );
};

export default Icon;
