import styled from '@emotion/styled';
import type { PropsWithChildren } from 'react';

export interface IconProps {
  size?: number;
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

interface StyledIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const Icon = (props: PropsWithChildren<IconProps>) => {
  const { size, width, height, children, className, ...rest } = props;
  return (
    <StyledIcon
      width={width ?? size ?? 40}
      height={height ?? size ?? 40}
      className={className}
      {...rest}
    >
      {children}
    </StyledIcon>
  );
};

export default Icon;

const StyledIcon = styled.div<StyledIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  > svg {
    width: 30px;
    height: 30px;

    path {
      fill: ${({ color }) => (color ? color : 'none')};
    }
  }
`;
