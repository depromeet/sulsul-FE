import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';

import Icon from '../commons/Icon';
import { HEADER_HEIGHT } from '../Header/Header';
import BeerListFilterChipList, {
  BeerListFilterChipType,
} from '../beers-filter/BeerListFilterChipList';
import BeerListFilterBottomSheet from '../beers-filter/BeerListFilterBottomSheet';
import BeerListSortBottomSheet from '../BeerListSortBottomSheet';

import {
  $beerListFilter,
  $beerListSortBy,
  BeerListSortType,
  beerListSortTypeTextAlias,
  BEER_LIST_FILTER_ATOM_KEY,
  BEER_LIST_SORT_BY_ATOM_KEY,
} from '@/containers/BeerListContainer/recoil/atoms';
import { useModal } from '@/hooks';
import { IBeerListFilter, IBeerType, ICountry } from '@/apis';
import { useGetBeerTypes, useGetCountries } from '@/queries';
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
  const [sortBy, setSortBy] = useRecoilState($beerListSortBy);

  useEffect(() => {
    const paramValue = QueryParams.get(BEER_LIST_SORT_BY_ATOM_KEY);
    paramValue && setSortBy(paramValue);
  }, [setSortBy]);

  return (
    <StyledSortButton type="button" onClick={onClick}>
      <p className="sort-text">{beerListSortTypeTextAlias[sortBy as BeerListSortType]}</p>
      <Icon name="ArrowDown" />
    </StyledSortButton>
  );
};

interface BeerListFilterAndSorterProps {
  resultCount?: number;
}

const BeerListFilterAndSorter = ({ resultCount }: BeerListFilterAndSorterProps) => {
  const [filter, setFilter] = useRecoilState($beerListFilter);
  const [filterChips, setFilterChips] = useState<BeerListFilterChipType[]>([]);

  const { beerTypes = [] } = useGetBeerTypes();
  const { countries = [] } = useGetCountries();

  const filterBottomSheet = useModal(false);
  const sortBottomSheet = useModal(false);

  useEffect(() => {
    const paramValue = QueryParams.get(BEER_LIST_FILTER_ATOM_KEY);
    paramValue && setFilter(paramValue);
  }, [setFilter]);

  useEffect(() => {
    if (!filter || !beerTypes.length || !countries.length) return;

    setFilterChips(initFilterChips({ filter, beerTypes, countries }));
  }, [beerTypes, countries, filter]);

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
  };

  const handleApplyFilter = (
    nextFilter: IBeerListFilter,
    nextFilterChips: BeerListFilterChipType[],
  ) => {
    setFilter(nextFilter);
    setFilterChips(nextFilterChips);
  };

  return (
    <>
      <StyledWrapper>
        <div className="filter-and-sorter">
          <FilterButton hasAppliedFilter={!!filterChips.length} onClick={filterBottomSheet.open} />
          {/** @todo 맥주 개수 api 연동 (resultCount, totalCount) */}
          <p className="result">검색 결과 {resultCount ?? '-'}/394</p>
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

const getBeerTypeNameKor = (beerTypes: IBeerType[], nameEng: IBeerType['nameEng']) => {
  return beerTypes.find((beerType) => beerType.nameEng === nameEng)?.nameKor || '';
};

const getCountryNameKor = (countries: ICountry[], countryId: ICountry['id']) => {
  return countries.find((country) => country.id === countryId)?.nameKor || '';
};

const initFilterChips = ({
  filter,
  beerTypes,
  countries,
}: {
  filter: IBeerListFilter;
  beerTypes: IBeerType[];
  countries: ICountry[];
}): BeerListFilterChipType[] => {
  const beerTypesFilterChips: BeerListFilterChipType[] =
    filter.beerTypes?.map((nameEng) => ({
      id: nameEng,
      text: getBeerTypeNameKor(beerTypes, nameEng),
      type: 'beerType',
    })) || [];

  const beerCountryFilterChips: BeerListFilterChipType[] =
    filter.countryIds?.map((countryId) => ({
      id: countryId,
      text: getCountryNameKor(countries, countryId),
      type: 'country',
    })) || [];

  return [...beerTypesFilterChips, ...beerCountryFilterChips];
};
