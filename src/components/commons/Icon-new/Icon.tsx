import { SVGProps } from 'react';
import styled from '@emotion/styled';

import * as icon from '@/assets/icon';
import { ColorTheme } from '@/themes/types';
import { theme } from '@/themes';

export type IconNameType = keyof typeof icon;
export type ColorThemeNameType = keyof ColorTheme['color'];

const DEFAULT_SIZE = 30;

interface SvgIconProps extends SVGProps<SVGSVGElement> {
  name: IconNameType;
  size?: number;
  width?: string;
  height?: string;
  colorTheme?: ColorThemeNameType;
}

const Icon = ({ name, size = DEFAULT_SIZE, width, height, colorTheme, ...props }: SvgIconProps) => {
  const SvgIcon = icon[name];

  const StyledSvgIcon = styled(SvgIcon)<Pick<SvgIconProps, 'colorTheme'>>`
    path {
      ${(p) => (p.colorTheme ? `fill: ${theme.color[p.colorTheme as ColorThemeNameType]}` : '')};
    }
  `;

  return (
    <StyledSvgIcon
      {...props}
      colorTheme={colorTheme}
      style={{
        width: width ?? `${size}px`,
        height: height ?? 'auto',
      }}
    />
  );
};

export default Icon;
