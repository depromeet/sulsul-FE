import React from 'react';
import styled from '@emotion/styled';
import type { HTMLAttributes } from 'react';

import LikeBadge from '@/components/commons/LikeBadge';
import TasteBox from '@/components/commons/TasteBox';

export interface Top3BeerFlavorListItemProps extends HTMLAttributes<HTMLDivElement> {
  content?: string;
  count?: number;
  className?: string;
}

const Top3BeerFlavorListItem = (props: Top3BeerFlavorListItemProps) => {
  const { content, count, className, ...rest } = props;
  return (
    <StyledTop3BeerFlavorListItem type="default" className={className} {...rest}>
      {content}
      <LikeBadge count={count} />
    </StyledTop3BeerFlavorListItem>
  );
};

export default Top3BeerFlavorListItem;

const StyledTop3BeerFlavorListItem = styled(TasteBox)`
  justify-content: space-between;
  box-sizing: border-box;
`;
