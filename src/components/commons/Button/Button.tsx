import React from 'react';
import styled from '@emotion/styled';

import { ColorTheme } from '@/themes/types';

type ButtonType = 'primary' | 'secondary' | 'ghost' | 'default';

interface ButtonProps {
  type?: ButtonType;
  htmlType?: 'button' | 'submit';
  width?: string;
  icon?: React.ReactNode;
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
  disabled = false,
  width,
  className,
  icon,
  children,
  onClick,
}) => {
  return (
    <StyledButton
      buttonType={type}
      type={htmlType}
      buttonWidth={width}
      disabled={disabled}
      className={className}
      onClick={onClick}
    >
      {icon && <span className="common-button-icon-wrapper">{icon}</span>}
      {children}
    </StyledButton>
  );
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
      return theme.color.whiteOpacity20;
  }
};

const getFontColorByType = (type: ButtonType, theme: ColorTheme) =>
  type === 'secondary' ? theme.semanticColor.backgroundLow : theme.color.white;

const StyledButton = styled.button<StyledButtonProps>`
  border: none;
  background-color: ${({ theme, buttonType }) => getColorByType(buttonType, theme)};
  color: ${({ theme, buttonType }) => getFontColorByType(buttonType, theme)};
  min-width: 125px;
  border-radius: 200px;
  padding: 1.12rem 2.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: filter 0.2s;
  ${({ buttonWidth }) => (buttonWidth ? ` width: ${buttonWidth};` : '')}
  cursor: pointer;

  & > .common-button-icon-wrapper {
    width: 20px;
    height: 20px;
    margin-right: 0.75rem;
  }

  &:active {
    filter: brightness(80%);
  }

  &:disabled {
    cursor: not-allowed;
    outline: ${({ theme }) => theme.color.whiteOpacity20} solid 2px;
    outline-offset: -2px;
    color: ${({ theme }) => theme.color.whiteOpacity20};
    background-color: ${({ theme }) => theme.color.black80};
  }
`;

export default Button;
