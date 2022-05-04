import React from 'react';
import styled from '@emotion/styled';
import type { HTMLAttributes } from 'react';
import cx from 'classnames';

type TasteBoxType = 'primary' | 'secondary' | 'ghost' | 'default';

type TasteBoxSize = 'long' | 'short';

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  type?: TasteBoxType;
  size?: TasteBoxSize;
  width?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

interface StyledBadgeProps {
  boxType: TasteBoxType;
  boxSize: TasteBoxSize;
  boxWidth?: string;
}

const TasteBox = (props: BadgeProps) => {
  const { type = 'primary', size = 'long', width, children, className, onClick, ...attrs } = props;

  return (
    <StyledTasteBox
      boxType={type}
      boxSize={size}
      boxWidth={width}
      className={cx(`tasteBox--${type}`, `tasteBox--size-${size}`, className)}
      onClick={onClick}
      {...attrs}
    >
      {children}
    </StyledTasteBox>
  );
};

export default TasteBox;

const StyledTasteBox = styled.div<StyledBadgeProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ boxSize }) => (boxSize === 'long' ? 'flex-start' : 'center')};
  box-sizing: border-box;
  height: 49px;
  border-radius: 8px;
  padding: 16px 20px;
  font-weight: 700;
  font-size: 12px;
  line-height: 155.02%;

  &.tasteBox--primary {
    background-color: ${({ theme }) => theme.semanticColor.primary};
    color: ${({ theme }) => theme.color.white};
  }

  &.tasteBox--secondary {
    background-color: ${({ theme }) => theme.semanticColor.secondary};
    color: ${({ theme }) => theme.color.black100};
  }
  &.tasteBox--ghost {
    background-color: ${({ theme }) => theme.color.whiteOpacity0};
    color: ${({ theme }) => theme.color.white};
  }
  &.tasteBox--default {
    background-color: ${({ theme }) => theme.color.whiteOpacity20};
    color: ${({ theme }) => theme.color.white};
  }
  &.tasteBox--size-long {
    width: calc(100% - 20px);
  }
  &.tasteBox--size-short {
    text-align: center;
    width: calc(50% - 20px);
  }
`;
