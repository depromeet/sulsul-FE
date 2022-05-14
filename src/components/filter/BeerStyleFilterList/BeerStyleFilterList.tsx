import styled from '@emotion/styled';
import { useState } from 'react';

import BeerStyleFilterItem from '../BeerStyleFilterItem';

const MOCK_BEER_STYLES = Array(10)
  .fill(0)
  .map((_, index) => ({
    id: index,
    title: '필스너',
    description: '투명한 황금빛으로 단 맛과 쓴 맛이 어우러진 깔끔한 맛',
    imageUrl: '',
  }));

const StyledWrapper = styled.div`
  overflow-y: auto;
`;

const BeerStyleFilterList = () => {
  /** @todo 맥주 종류 리스트 api 호출, selectedBeerStyleIds 상태 관리 로직 추가 */
  const [selectedBeerStyleIds, setSelectedBeerStyleIds] = useState<number[]>([]);

  const selectItem = (id: number) => {
    setSelectedBeerStyleIds([...selectedBeerStyleIds, id]);
  };

  const unselectItem = (id: number) => {
    const newSelectedBeerStyleIds = selectedBeerStyleIds.filter(
      (beerStyleId) => id !== beerStyleId,
    );
    setSelectedBeerStyleIds(newSelectedBeerStyleIds);
  };

  const handleItemClick = (id: number) => () => {
    const isSelected = selectedBeerStyleIds.includes(id);
    isSelected ? unselectItem(id) : selectItem(id);
  };

  return (
    <StyledWrapper>
      {MOCK_BEER_STYLES.map((beerStyle) => (
        <BeerStyleFilterItem
          key={beerStyle.id}
          {...beerStyle}
          isSelected={selectedBeerStyleIds.includes(beerStyle.id)}
          onClick={handleItemClick(beerStyle.id)}
        />
      ))}
    </StyledWrapper>
  );
};

export default BeerStyleFilterList;
