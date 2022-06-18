import styled from '@emotion/styled';

import Top3BeerFlavorListItem from '@/components/Top3BeerFlavorListItem';
import { ITop3BeerFlavor } from '@/apis';

interface Props {
  beerFlavor: ITop3BeerFlavor[];
}

const Top3BeerFlavorList = ({ beerFlavor }: Props) => {
  return (
    <StyledTop3BeerFlavorList>
      {beerFlavor?.map(({ content, count }) => (
        <Top3BeerFlavorListItem key={content} content={content} count={count} />
      ))}
    </StyledTop3BeerFlavorList>
  );
};

export default Top3BeerFlavorList;

const StyledTop3BeerFlavorList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  width: 100%;
  margin: 26px 0;
`;
