import { useRouter } from 'next/router';
import { isNil } from 'lodash';
import { useRecoilValue } from 'recoil';

import { $beerListFilter, $beerListSortBy } from './recoil/atoms';

import BeerListPageHeader from '@/components/BeerListPageHeader';
import BeerListFilterAndSorter from '@/components/BeerListFilterAndSorter';
import BeerListSearchResult from '@/components/BeerSearchResultList';
import BottomNavigation from '@/components/BottomNavigation';
import { useGetBeers } from '@/queries';

const BeerListContainer = () => {
  const router = useRouter();
  const query = isNil(router.query.query) ? undefined : decodeURI(String(router.query.query));

  const filter = useRecoilValue($beerListFilter);
  const sortBy = useRecoilValue($beerListSortBy);

  const { data, isLoading } = useGetBeers({
    query,
    filter,
    sortBy: [sortBy],
  });

  return (
    <>
      <BeerListPageHeader />
      <BeerListFilterAndSorter resultCount={data?.resultCount} />
      <BeerListSearchResult query={query} isLoading={isLoading} beers={data?.contents} />
      <BottomNavigation />
    </>
  );
};

export default BeerListContainer;
