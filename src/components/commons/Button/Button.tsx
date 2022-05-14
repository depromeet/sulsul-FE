import React from 'react';
import styled from '@emotion/styled';
import cx from 'classnames';

import { ColorTheme } from '@/themes/types';

type ButtonType = 'primary' | 'secondary' | 'primary-line' | 'secondary-line' | 'ghost' | 'default';

interface ButtonProps {
  type?: ButtonType;
  htmlType?: 'button' | 'submit';
  line?: boolean;
  width?: 'small' | 'large' | string;

  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

interface StyledButtonProps {
  buttonType: ButtonType;
  buttonWidth?: string;
}

const Button: React.FC<ButtonProps> = ({
  type = 'default',
  htmlType = 'button',
  line = false,
  disabled = false,
  width: _width,
  className,
  leftAddon,
  rightAddon,
  children,
  onClick,
}) => {
  const width = getWidth(_width);

  return (
    <StyledButton
      buttonType={type}
      type={htmlType}
      buttonWidth={width}
      disabled={disabled}
      className={cx([className, line && 'common-button-line'])}
      onClick={onClick}
    >
      {leftAddon && <span className="common-button-icon-wrapper margin-right">{leftAddon}</span>}
      <span className="common-button-text">{children}</span>
      {rightAddon && <span className="common-button-icon-wrapper margin-left">{rightAddon}</span>}
    </StyledButton>
  );
};

const getWidth = (width?: 'small' | 'large' | string) => {
  switch (width) {
    case 'small':
      return '120px';
    case 'large':
      return '244px';
    default:
      return width;
  }
};

const getColorByType = (type: ButtonType, theme: ColorTheme) => {
  switch (type) {
    case 'primary':
      return theme.semanticColor.primary;
    case 'secondary':
      return theme.semanticColor.secondary;
    case 'ghost':
      return theme.color.whiteOpacity0;
    default:
      return theme.color.white;
  }
};

const getLineColorByType = (type: ButtonType, theme: ColorTheme) => {
  switch (type) {
    case 'primary':
      return theme.color.blueOpacity25;
    case 'secondary':
      return theme.color.yellowOpacity20;
    default:
      return theme.color.whiteOpacity20;
  }
};

const getFontColorByType = (type: ButtonType, theme: ColorTheme) =>
  ['secondary', 'default'].includes(type) ? theme.color.black100 : theme.color.white;

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${({ theme, buttonType }) => getColorByType(buttonType, theme)};
  color: ${({ theme, buttonType }) => getFontColorByType(buttonType, theme)};
  min-width: 125px;
  height: 48px;
  border-radius: 200px;
  padding: 1.12rem 2.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: filter 0.2s;
  ${({ buttonWidth }) => (buttonWidth ? ` width: ${buttonWidth};` : '')}

  & > .common-button-icon-wrapper {
    height: 20px;

    &.margin-right {
      margin-right: 0.75rem;
    }
    &.margin-left {
      margin-left: 0.75rem;
    }

    & svg {
      width: 20px;
      height: 20px;

      & path {
        fill: currentColor;
      }
    }
  }

  & > .common-button-text {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &.common-button-line {
    outline: ${({ theme, buttonType }) => getColorByType(buttonType, theme)} solid 2px;
    outline-offset: -2px;
    color: ${({ theme, buttonType }) => getColorByType(buttonType, theme)};
    background-color: ${({ theme, buttonType }) => getLineColorByType(buttonType, theme)};
  }

  &:active {
    filter: brightness(80%);
  }

  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.color.grey2};
    background-color: ${({ theme }) => theme.color.grey4};
  }
`;

export default Button;
