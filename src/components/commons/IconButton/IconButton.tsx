import styled from '@emotion/styled';
import type { PropsWithChildren } from 'react';
import type { HTMLAttributes } from 'react';

import Icon, { IconNameType } from '@/components/commons/Icon';

export interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {
  name: IconNameType;
  size?: number;
  width?: number;
  height?: number;
  backgroundColor?: string;
  iconSize?: number;
  iconWidth?: number;
  iconHeight?: number;
  iconColor?: string;
  className?: string;
}

interface StyledIconButtonProps {
  width?: number;
  height?: number;
  backgroundColor?: string;
}

const IconButton = (props: PropsWithChildren<IconButtonProps>) => {
  const {
    name,
    size = 40,
    width,
    height,
    children,
    iconSize,
    iconWidth,
    iconHeight,
    iconColor,
    className,
    ...rest
  } = props;
  return (
    <StyledIconButton width={width ?? size} height={height ?? size} className={className} {...rest}>
      <Icon name={name} size={iconSize} width={iconWidth} height={iconHeight} color={iconColor}>
        {children}
      </Icon>
    </StyledIconButton>
  );
};

export default IconButton;

const StyledIconButton = styled.button<StyledIconButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: 50%;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
