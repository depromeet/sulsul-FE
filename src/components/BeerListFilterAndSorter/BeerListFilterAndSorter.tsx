import styled from '@emotion/styled';

import Icon from '../commons/Icon';
import { HEADER_HEIGHT } from '../Header/Header';
import FilterChipList from '../filter/FilterChipList';

import { beerListSortTextAlias, BeerListSortType } from '@/types/Beer';

const MOCK_FILTER_VALUES = [
  '아시아',
  '필스너',
  'IPA',
  '페일에일',
  '아시아',
  '필스너',
  'IPA',
  '페일에일',
];

interface FilterAndSorterProps {
  resultCount: number;
  totalCount: number;
}

const StyledWrapper = styled.div`
  position: sticky;
  top: ${HEADER_HEIGHT};

  .filter-and-sorter {
    display: flex;
    align-items: center;
    padding: 0 20px 10px;

    .result {
      margin: 0 auto 0 8px;
      ${(p) => p.theme.fonts.Body4};
      color: ${(p) => p.theme.color.whiteOpacity80};
    }
  }
`;

const StyledSortButton = styled.button`
  display: flex;
  align-items: center;

  .sort-text {
    ${(p) => p.theme.fonts.Body4};
    color: ${(p) => p.theme.color.whiteOpacity80};
  }
`;

const BeerListFilterAndSorter = ({ resultCount, totalCount }: FilterAndSorterProps) => {
  const hasAppliedFilter = true;
  const selectedSortType: BeerListSortType = 'REVIEW';

  const openFilterBottomSheet = () => null;

  const openSortBottomSheet = () => null;

  return (
    <StyledWrapper>
      <div className="filter-and-sorter">
        <button type="button" onClick={openFilterBottomSheet}>
          <Icon name={hasAppliedFilter ? 'FilterApplied' : 'Filter'} size={30} />
        </button>
        <p className="result">
          검색 결과 {resultCount}/{totalCount}
        </p>
        <StyledSortButton type="button" onClick={openSortBottomSheet}>
          <p className="sort-text">{beerListSortTextAlias[selectedSortType]}</p>
          <Icon name="ArrowDown" />
        </StyledSortButton>
      </div>
      <FilterChipList currentFilterValues={MOCK_FILTER_VALUES} />
    </StyledWrapper>
  );
};

export default BeerListFilterAndSorter;
