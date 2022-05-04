import React from 'react';
import styled from '@emotion/styled';
import type { HTMLAttributes } from 'react';
import cx from 'classnames';

import { ColorTheme } from '@/themes/types';

type BadgeType = 'primary' | 'secondary' | 'ghost' | 'default';

type BadgeSize = 'small' | 'medium' | 'large';

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  type?: BadgeType;
  size?: BadgeSize;
  width?: string;
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
}

interface StyledBadgeProps {
  badgeType: BadgeType;
  badgeSize: BadgeSize;
  badgeWidth?: string;
}

const Badge: React.FC<BadgeProps> = ({
  type = 'default',
  size = 'large',
  width,
  className,
  leftAddon,
  rightAddon,
  children,
  ...attrs
}) => {
  return (
    <StyledBadge
      badgeType={type}
      badgeSize={size}
      badgeWidth={width}
      className={cx(`badge--${size}`, className)}
      {...attrs}
    >
      {leftAddon && <span className="common-badge-icon-wrapper margin-right">{leftAddon}</span>}
      <span className={cx('common-badge-text', `badge--text-${size}`)}>{children}</span>
      {rightAddon && <span className={`common-badge-icon-wrapper margin-left`}>{rightAddon}</span>}
    </StyledBadge>
  );
};

const getColorByType = (type: BadgeType, theme: ColorTheme) => {
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

const getFontColorByType = (type: BadgeType, theme: ColorTheme) => {
  switch (type) {
    case 'primary':
      return theme.color.white;
    case 'secondary':
      return theme.semanticColor.backgroundLow;
    case 'ghost':
      return theme.color.white;
    default:
      return theme.semanticColor.secondary;
  }
};
const StyledBadge = styled.div<StyledBadgeProps>`
  background-color: ${({ theme, badgeType }) => getColorByType(badgeType, theme)};
  color: ${({ theme, badgeType }) => getFontColorByType(badgeType, theme)};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: filter 0.2s;
  box-sizing: border-box;
  width: fit-content;
  ${({ badgeWidth }) => (badgeWidth ? ` width: ${badgeWidth};` : '')};

  &.badge--small {
    border-radius: 13px;
    padding: 2px 8px;
    height: 16px;
  }
  &.badge--medium {
    border-radius: 12px;
    padding: 6px 11px;
    height: 24px;
  }
  &.badge--large {
    border-radius: 38px;
    padding: 7px 13px;
    height: 28px;
  }

  & > .common-badge-icon-wrapper {
    height: 14px;

    &.margin-right {
      margin-right: 5px;
    }
    &.margin-left {
      margin-left: 5px;
    }

    & svg {
      width: 14px;
      height: 14px;
    }
  }

  & > .common-badge-text {
    display: inline-block;
  }

  & > .badge--text-small {
    font-weight: 700;
    font-size: 10px;
    line-height: 12px;
  }

  & > .badge--text-medium {
    font-weight: 700;
    font-size: 10px;
    line-height: 12px;
  }

  & > .badge--text-large {
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
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

export default Badge;
