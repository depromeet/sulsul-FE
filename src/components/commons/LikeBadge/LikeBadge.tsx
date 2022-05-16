import React from 'react';
import styled from '@emotion/styled';
import type { HTMLAttributes } from 'react';

import Icon from '@/components/commons/Icon';

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  likeCount?: number;
}

const LikeBadge = (props: Props) => {
  const { className, likeCount, ...rest } = props;
  return (
    <StyledLikeBadge className={className} {...rest}>
      <span className="common-badge-icon-wrapper">
        <Icon name="Like" />
      </span>
      <span className="common-badge-text">{likeCount}</span>
    </StyledLikeBadge>
  );
};

export default LikeBadge;

const StyledLikeBadge = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.semanticColor.primary};
  border-radius: 38px;
  padding: 7px 13px;
  width: 60px;
  height: 28px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  & > .common-badge-icon-wrapper {
    height: 14px;

    & svg {
      width: 14px;
      height: 14px;
    }
  }

  & > .common-badge-text {
    display: inline-block;
  }
`;
