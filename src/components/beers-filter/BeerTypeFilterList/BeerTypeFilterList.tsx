import { useRecoilState } from 'recoil';
import styled from '@emotion/styled';

import BeerTypeFilterItem from '../BeerTypeFilterItem';
import { $nextBeerListFilterChips } from '../BeerListFilterBottomSheet/recoil/atoms';
import { $selectedBeerTypeIds } from '../BeerListFilterBottomSheet/recoil/selectors';

import { IBeerType } from '@/apis';
import { useGetBeerTypes } from '@/queries';

const StyledWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
`;

/** @note beerType.nameEng이 id의 역할로 사용됨 */
const BeerTypeFilterList = () => {
  const { beerTypes } = useGetBeerTypes();

  const [selectedBeerTypeIds, setSelectedBeerTypeIds] = useRecoilState($selectedBeerTypeIds);
  const [nextFilterChips, setNextFilterChips] = useRecoilState($nextBeerListFilterChips);

  const selectItem = (beerType: IBeerType) => {
    setSelectedBeerTypeIds([...selectedBeerTypeIds, beerType.nameEng]);
    setNextFilterChips([
      ...nextFilterChips,
      { id: beerType.nameEng, text: beerType.nameKor, type: 'beerType' },
    ]);
  };

  const unselectItem = (beerType: IBeerType) => {
    setSelectedBeerTypeIds(
      selectedBeerTypeIds.filter((beerTypeId) => beerType.nameEng !== beerTypeId),
    );
    setNextFilterChips(
      nextFilterChips.filter((v) => !(v.id === beerType.nameEng && v.type === 'beerType')),
    );
  };

  return (
    <StyledWrapper>
      {beerTypes?.map((beerType) => {
        const isSelected = selectedBeerTypeIds.includes(beerType.nameEng);
        return (
          <BeerTypeFilterItem
            key={beerType.nameKor}
            {...beerType}
            isSelected={isSelected}
            onClick={() => (isSelected ? unselectItem(beerType) : selectItem(beerType))}
          />
        );
      })}
    </StyledWrapper>
  );
};

export default BeerTypeFilterList;
