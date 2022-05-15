import { ReactNode, HTMLAttributes } from 'react';
import styled from '@emotion/styled';

import { ColorToken } from '@/themes/types';

interface BaseHeaderIconButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  /** 아이콘 색상 (default: white) */
  iconColor?: ColorToken;
  /** 아이콘 사이즈 (default: 30) */
  iconSize?: number;
}

const StyledButton = styled.button<{ iconColor: ColorToken; iconSize: number }>`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: ${(p) => p.iconSize}px;
    height: ${(p) => p.iconSize}px;
    fill: ${(p) => p.theme.color[p.iconColor]};
  }
`;

const BaseHeaderIconButton = ({
  children,
  iconColor = 'white',
  iconSize = 30,
  onClick = () => null,
  ...props
}: BaseHeaderIconButtonProps) => {
  return (
    <StyledButton
      type="button"
      iconColor={iconColor}
      iconSize={iconSize}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default BaseHeaderIconButton;
