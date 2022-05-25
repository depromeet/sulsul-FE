import styled from '@emotion/styled';

import { IBeer } from '@/apis';
import BeerGridItem from '@/components/beerItem/BeerGridItem';
import BeerListItem from '@/components/beerItem/BeerListItem';
import { ListViewType } from '@/components/Header/extras/ListViewToggleButton';

interface Props {
  type: ListViewType;
  beers: IBeer[];
}

const BeerList = (props: Props) => {
  const { type = 'grid', beers, ...rest } = props;

  if (type === 'list') {
    return (
      <StyledBeerList className={`${type}`} type={type} {...rest}>
        {beers?.map((beer) => (
          <BeerListItem key={beer.id} beer={beer} />
        ))}
      </StyledBeerList>
    );
  }

  return (
    <StyledBeerList className={`${type}`} type={type} {...rest}>
      {beers?.map((beer) => (
        <BeerGridItem key={beer.id} beer={beer} />
      ))}
    </StyledBeerList>
  );
};

export default BeerList;

const StyledBeerList = styled.div<{ type?: string }>`
  width: 100%;
  box-sizing: border-box;
  padding: ${(p) => (p.type === 'grid' ? '20px' : '20px 20px 20px 14px')};

  &.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    gap: 26px 15px;
  }
  &.list {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 1fr;
    gap: 16px;
  }
`;
