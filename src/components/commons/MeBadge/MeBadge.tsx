import React from 'react';
import styled from '@emotion/styled';
import type { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLSpanElement> {
  className?: string;
  lable?: string;
}

const MeBadge = (props: Props) => {
  const { className, lable = 'ME', ...rest } = props;
  return (
    <StyledMeBadge className={className} {...rest}>
      {lable}
    </StyledMeBadge>
  );
};

export default MeBadge;

const StyledMeBadge = styled.span`
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.semanticColor.primary};
  border-radius: 13px;
  padding: 2px 8px;
  height: 16px;
`;
