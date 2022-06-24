import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { useInView } from 'react-intersection-observer';

import { IBeer } from '@/apis';
import BeerGridItem from '@/components/beerItem/BeerGridItem';
import BeerListItem from '@/components/beerItem/BeerListItem';
import { $beerListViewType } from '@/recoil/atoms';

interface Props {
  beers: IBeer[];
  hasNextPage?: boolean;
  isLoading?: boolean;
  fetchNextPage?: () => void;
}

const BeerList = ({ beers, hasNextPage, isLoading, fetchNextPage }: Props) => {
  const beerListViewType = useRecoilValue($beerListViewType);

  const { ref } = useInView({
    onChange: (inView) => {
      if (inView && hasNextPage && !isLoading && fetchNextPage) {
        fetchNextPage();
      }
    },
  });

  return (
    <StyledBeerList className={beerListViewType}>
      {beers?.map((beer) =>
        beerListViewType === 'list' ? (
          <BeerListItem key={`list-${beer.id}`} beer={beer} />
        ) : (
          <BeerGridItem key={`grid-${beer.id}`} beer={beer} />
        ),
      )}
      {hasNextPage && <div ref={ref} />}
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
