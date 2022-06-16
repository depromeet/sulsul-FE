import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';

import { IBeer } from '@/apis';
import BeerGridItem from '@/components/beerItem/BeerGridItem';
import BeerListItem from '@/components/beerItem/BeerListItem';
import { $beerListViewType } from '@/recoil/atoms';

interface Props {
  beers: IBeer[];
}

const BeerList = ({ beers, ...rest }: Props) => {
  const beerListViewType = useRecoilValue($beerListViewType);

  return (
    <StyledBeerList className={beerListViewType} {...rest}>
      {beers?.map((beer) =>
        beerListViewType === 'list' ? (
          <BeerListItem key={`${beer.id}${beerListViewType}`} beer={beer} />
        ) : (
          <BeerGridItem key={`${beer.id}${beerListViewType}`} beer={beer} />
        ),
      )}
    </StyledBeerList>
  );
};

export default BeerList;

const StyledBeerList = styled.div`
  width: 100%;
  box-sizing: border-box;

  &.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    gap: 26px 15px;
    padding: 20px;
  }

  &.list {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 1fr;
    gap: 16px;
    padding: 20px 20px 20px 14px;
  }
`;
