import styled from '@emotion/styled';
import type { PropsWithChildren } from 'react';

export interface IconProps {
  // width, height를 지정하지 않으면 size에 값이 들어갑니다 (기본 40*40)
  size?: number;
  // width, height는 svg의 크기가 아니라 Icon Wrapper의 크기입니다
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
  const { size = 40, width, height, children, className, ...rest } = props;
  return (
    <StyledIcon width={width ?? size} height={height ?? size} className={className} {...rest}>
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
