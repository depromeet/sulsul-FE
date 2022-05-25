import styled from '@emotion/styled';

import Icon from '../commons/Icon';
import { HEADER_HEIGHT } from '../Header/Header';
import FilterChipList from '../filter/FilterChipList';

import { EBeerSortBy } from '@/apis';

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

export type BeerListSortType =
  | EBeerSortBy.NAME_KOR_ASC
  | EBeerSortBy.RECORD_DESC
  | EBeerSortBy.ALCOHOL_ASC
  | EBeerSortBy.ALCOHOL_DESC;

export const beerListSortTypeTextAlias: Record<BeerListSortType, string> = {
  [EBeerSortBy.NAME_KOR_ASC]: '맥주 이름 순',
  [EBeerSortBy.RECORD_DESC]: '리뷰 많은 순',
  [EBeerSortBy.ALCOHOL_DESC]: '높은 도수 순',
  [EBeerSortBy.ALCOHOL_ASC]: '낮은 도수 순',
};

interface FilterAndSorterProps {
  hasAppliedFilter: boolean /** @todo 대신 적용된 필터 리스트를 받던가 스토어로 관리 */;
  resultCount: number;
  totalCount: number;
  sortType: BeerListSortType;
  openFilterBottomSheet: () => void;
  openSortBottomSheet: () => void;
}

const StyledWrapper = styled.div`
  position: sticky;
  top: ${HEADER_HEIGHT}px;
  z-index: 10;

  background-color: ${(p) => p.theme.semanticColor.background};
  border-bottom: 1px solid ${(p) => p.theme.color.whiteOpacity20};

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

const BeerListFilterAndSorter = ({
  hasAppliedFilter,
  resultCount,
  totalCount,
  sortType,
  openFilterBottomSheet,
  openSortBottomSheet,
}: FilterAndSorterProps) => {
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
          <p className="sort-text">{beerListSortTypeTextAlias[sortType]}</p>
          <Icon name="ArrowDown" />
        </StyledSortButton>
      </div>
      <FilterChipList currentFilterValues={MOCK_FILTER_VALUES} />
    </StyledWrapper>
  );
};

export default BeerListFilterAndSorter;
