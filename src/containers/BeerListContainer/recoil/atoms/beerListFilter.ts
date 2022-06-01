import { atom } from 'recoil';

import { IBeerListFilter } from '@/apis';
import { BeerListFilterChipType } from '@/components/beers-filter/BeerListFilterChipList';
import QueryParams from '@/utils/query-params';

/** url 파라미터 값으로 필터 초기값 설정 */
const getDefaultFilterFromQueryParams = (): IBeerListFilter => {
  const filter = QueryParams.get('filter');

  return filter ? JSON.parse(filter) : {};
};

export const $beerListFilter = atom<IBeerListFilter>({
  key: 'beer-list-filter',
  default: getDefaultFilterFromQueryParams(),
});

const getDefaultFilterChipsFromQueryParams = (): BeerListFilterChipType[] => {
  const filter = getDefaultFilterFromQueryParams();

  const beerTypesFilterChips: BeerListFilterChipType[] =
    filter.beerTypes?.map((beerType) => ({
      id: beerType,
      /** @todo */
      text: `맥주 종류 이름: ${beerType}`,
      type: 'beerType',
    })) || [];

  const beerCountryFilterChips: BeerListFilterChipType[] =
    filter.countryIds?.map((countryId) => ({
      id: countryId,
      /** @todo */
      text: `지역 id: ${countryId}`,
      type: 'country',
    })) || [];
  console.log([...beerTypesFilterChips, ...beerCountryFilterChips]);

  return [...beerTypesFilterChips, ...beerCountryFilterChips];
};

export const $beerListFilterChips = atom<BeerListFilterChipType[]>({
  key: 'beer-list-filter-chips',
  default: getDefaultFilterChipsFromQueryParams(),
});
