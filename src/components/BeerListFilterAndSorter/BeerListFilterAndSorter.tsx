import styled from '@emotion/styled';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useRouter } from 'next/router';

import Icon from '../commons/Icon';
import { HEADER_HEIGHT } from '../Header/Header';
import BeerListFilterChipList, {
  BeerListFilterChipType,
} from '../beers-filter/BeerListFilterChipList';
import BeerListFilterBottomSheet from '../beers-filter/BeerListFilterBottomSheet';
import BeerListSortBottomSheet from '../BeerListSortBottomSheet';

import {
  $beerListFilter,
  $beerListFilterChips,
  $beerListSortBy,
  beerListSortTypeTextAlias,
} from '@/containers/BeerListContainer/recoil/atoms';
import { useModal } from '@/hooks';
import { IBeerListFilter } from '@/apis';
import QueryParams from '@/utils/query-params';

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

interface FilterButtonProps {
  hasAppliedFilter: boolean;
  onClick: () => void;
}

const FilterButton = ({ hasAppliedFilter, onClick }: FilterButtonProps) => {
  return (
    <button type="button" onClick={onClick}>
      <Icon name={hasAppliedFilter ? 'FilterApplied' : 'Filter'} />
    </button>
  );
};

interface SortByButtonProps {
  onClick: () => void;
}

const SortButton = ({ onClick }: SortByButtonProps) => {
  const sortBy = useRecoilValue($beerListSortBy);

  return (
    <StyledSortButton type="button" onClick={onClick}>
      <p className="sort-text">{beerListSortTypeTextAlias[sortBy]}</p>
      <Icon name="ArrowDown" />
    </StyledSortButton>
  );
};

const BeerListFilterAndSorter = () => {
  const router = useRouter();

  const [filter, setFilter] = useRecoilState($beerListFilter);
  const [filterChips, setFilterChips] = useRecoilState($beerListFilterChips);

  const filterBottomSheet = useModal(false);
  const sortBottomSheet = useModal(false);

  const replaceUrl = (nextFiler: IBeerListFilter) => {
    QueryParams.set('filter', JSON.stringify(nextFiler), router.replace);
  };

  const handleFilterChipRemove = (chip: BeerListFilterChipType) => {
    const nextFilter = {
      ...filter,
      ...(chip.type === 'country'
        ? { countryIds: filter.countryIds?.filter((id) => id !== chip.id) }
        : { beerTypes: filter.beerTypes?.filter((id) => id !== chip.id) }),
    };
    const nextFilterChips = filterChips.filter((v) => !(v.id === chip.id && v.type === chip.type));

    setFilter(nextFilter);
    setFilterChips(nextFilterChips);
    replaceUrl(nextFilter);
  };

  const handleApplyFilter = (
    nextFilter: IBeerListFilter,
    nextFilterChips: BeerListFilterChipType[],
  ) => {
    setFilter(nextFilter);
    setFilterChips(nextFilterChips);
    replaceUrl(nextFilter);
  };

  return (
    <>
      <StyledWrapper>
        <div className="filter-and-sorter">
          <FilterButton hasAppliedFilter={!!filterChips.length} onClick={filterBottomSheet.open} />
          {/** @todo 맥주 개수 api 연동 (resultCount, totalCount) */}
          <p className="result">검색 결과 12/394</p>
          <SortButton onClick={sortBottomSheet.open} />
        </div>
        {!!filterChips.length && (
          <BeerListFilterChipList filterChips={filterChips} onRemove={handleFilterChipRemove} />
        )}
      </StyledWrapper>
      <BeerListFilterBottomSheet
        open={filterBottomSheet.isOpen}
        defaultFilter={filter}
        defaultFilerChips={filterChips}
        onClose={filterBottomSheet.close}
        onApply={handleApplyFilter}
      />
      <BeerListSortBottomSheet open={sortBottomSheet.isOpen} onClose={sortBottomSheet.close} />
    </>
  );
};

export default BeerListFilterAndSorter;
