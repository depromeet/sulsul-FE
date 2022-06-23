import { useRouter } from 'next/router';
import { isNil } from 'lodash';
import { useRecoilValue } from 'recoil';
import { useInView } from 'react-intersection-observer';
import { GetServerSideProps, NextPage } from 'next';

import {
  $beerListFilter,
  $beerListSortBy,
  BEER_LIST_FILTER_ATOM_KEY,
  BEER_LIST_SORT_BY_ATOM_KEY,
} from './recoil/atoms';

import BeerListPageHeader from '@/components/BeerListPageHeader';
import BeerListFilterAndSorter from '@/components/BeerListFilterAndSorter';
import BeerListSearchResult from '@/components/BeerSearchResultList';
import BottomNavigation from '@/components/BottomNavigation';
import { useGetBeersCount, useGetBeers } from '@/queries';
import { getBeers, IGetBeersResponseData } from '@/apis';
import { useGtagPageView } from '@/hooks';
import { PAGE_TITLES } from '@/constants';
import LoadingIcon from '@/components/LoadingIcon';

interface BeerListContainerProps {
  beersData: IGetBeersResponseData;
}

const BeerListContainer: NextPage<BeerListContainerProps> = ({ beersData: initialBeersData }) => {
  useGtagPageView(PAGE_TITLES.BEER_LIST);

  const router = useRouter();
  const query = isNil(router.query.query) ? undefined : decodeURI(String(router.query.query));

  const filter = useRecoilValue($beerListFilter);
  const sortBy = useRecoilValue($beerListSortBy);

  const { data: beersCountData } = useGetBeersCount();
  const {
    contents: beersData,
    resultCount,
    fetchNextPage,
    isLoading,
    hasNext,
  } = useGetBeers({ query, filter, sortBy: [sortBy] }, initialBeersData);

  const { ref } = useInView({
    onChange: (inView) => {
      if (inView && hasNext && !isLoading) {
        fetchNextPage();
      }
    },
  });

  return (
    <>
      <BeerListPageHeader />
      <BeerListFilterAndSorter
        resultCount={resultCount}
        totalCount={beersCountData?.contents?.totalCount}
      />
      <BeerListSearchResult query={query} isLoading={isLoading} beers={beersData} />
      {hasNext && <LoadingIcon ref={ref} />}
      <BottomNavigation />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context.query) {
    const filter = context.query[BEER_LIST_FILTER_ATOM_KEY]
      ? JSON.parse(context.query[BEER_LIST_FILTER_ATOM_KEY] as string)
      : undefined;
    const sortBy = context.query[BEER_LIST_SORT_BY_ATOM_KEY]
      ? [(context.query[BEER_LIST_SORT_BY_ATOM_KEY] as string).replace(/["]/g, '')]
      : undefined;

    const beersData = await getBeers({
      payload: {
        ...(filter ? filter : {}),
        ...(sortBy ? sortBy : {}),
        limit: 21,
      },
      /** @todo auth */
      auth: false,
    });

    return { props: { beersData } };
  }
  return { props: {} };
};

export default BeerListContainer;
