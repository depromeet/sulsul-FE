import styled from '@emotion/styled';

import { IBeer } from '@/apis';
import BeerGridItem from '@/components/beerItem/BeerGridItem';
import BeerListItem from '@/components/beerItem/BeerListItem';
import { BeerListViewType } from '@/recoil/atoms';

interface Props {
  type: BeerListViewType;
  beers: IBeer[];
}

const BeerList = ({ type = 'grid', beers, ...rest }: Props) => {
  return (
    <StyledBeerList className={type} {...rest}>
      {beers?.map((beer) =>
        type === 'list' ? (
          <BeerListItem key={beer.id} beer={beer} />
        ) : (
          <BeerGridItem key={beer.id} beer={beer} />
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
    padding: 20px 20px 20vh;
  }

  &.list {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 1fr;
    gap: 16px;
    padding: 20px 20px 20vh 14px;
  }
`;
