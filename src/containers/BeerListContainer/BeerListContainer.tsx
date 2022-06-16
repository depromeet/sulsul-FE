import { useRouter } from 'next/router';
import { isNil } from 'lodash';
import { useRecoilValue } from 'recoil';
import { useInView } from 'react-intersection-observer';

import { $beerListFilter, $beerListSortBy } from './recoil/atoms';

import Icon from '@/components/commons/Icon';
import LoadingIcon from '@/components/LoadingIcon';
import BeerListPageHeader from '@/components/BeerListPageHeader';
import BeerListFilterAndSorter from '@/components/BeerListFilterAndSorter';
import BeerListSearchResult from '@/components/BeerSearchResultList';
import BottomNavigation from '@/components/BottomNavigation';
import { useGetBeersCount, useGetBeers } from '@/queries';

const BeerListContainer = () => {
  const router = useRouter();
  const query = isNil(router.query.query) ? undefined : decodeURI(String(router.query.query));

  const filter = useRecoilValue($beerListFilter);
  const sortBy = useRecoilValue($beerListSortBy);

  const { data: beersCountData } = useGetBeersCount();
  const {
    contents: beersData,
    pageInfo,
    fetchNextPage,
    isLoading,
  } = useGetBeers({
    query,
    filter,
    sortBy: [sortBy],
  });

  const { ref } = useInView({
    onChange: (inView) => {
      const { nextCursor, hasNext } = pageInfo;

      if (inView && nextCursor && hasNext && !isLoading) {
        fetchNextPage({ pageParam: nextCursor });
      }
    },
  });

  return (
    <>
      <BeerListPageHeader />
      <BeerListFilterAndSorter
        resultCount={pageInfo?.resultCount}
        totalCount={beersCountData?.contents?.totalCount}
      />
      <BeerListSearchResult query={query} isLoading={isLoading} beers={beersData} />
      <div ref={ref}>
        <Icon name="AirPlaneLoading" size={40} style={{ margin: '50px auto' }} />
      </div>
      {/* <LoadingIcon ref={ref} /> */}
      <BottomNavigation />
    </>
  );
};

export default BeerListContainer;
