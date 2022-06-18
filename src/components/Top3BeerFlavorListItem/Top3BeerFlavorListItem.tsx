import React from 'react';
import styled from '@emotion/styled';

import LikeBadge from '@/components/commons/LikeBadge';
import TasteBox from '@/components/commons/TasteBox';
import { ITop3BeerFlavor } from '@/apis';

const Top3BeerFlavorListItem = ({ count, content }: ITop3BeerFlavor) => {
  return (
    <StyledTop3BeerFlavorListItem type="default">
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
