import { useRouter } from 'next/router';
import { isNil } from 'lodash';
import { useRecoilValue } from 'recoil';
import { useInView } from 'react-intersection-observer';
import { GetServerSideProps, NextPage } from 'next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  $beerListFilter,
  $beerListSortBy,
  BEER_LIST_FILTER_ATOM_KEY,
  BEER_LIST_SORT_BY_ATOM_KEY,
  DEFAULT_BEER_LIST_SORT_BY,
} from './recoil/atoms';

import BeerListPageHeader from '@/components/BeerListPageHeader';
import BeerListFilterAndSorter from '@/components/BeerListFilterAndSorter';
import BeerListSearchResult from '@/components/BeerSearchResultList';
import BottomNavigation from '@/components/BottomNavigation';
import { useGetBeersCount, useGetBeers } from '@/queries';
import { EBeerSortBy, getBeers, IGetBeersResponseData } from '@/apis';
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
    hasNextPage,
  } = useGetBeers({ query, filter, sortBy: [sortBy] }, initialBeersData);

  const { ref } = useInView({
    onChange: (inView) => {
      if (inView && hasNextPage && !isLoading) {
        fetchNextPage();
      }
    },
  });

  return (
    <>
      <BeerListPageHeader />
      <ToastContainer />
      <BeerListFilterAndSorter
        resultCount={resultCount}
        totalCount={beersCountData?.contents?.totalCount}
      />
      <BeerListSearchResult query={query} isLoading={isLoading} beers={beersData} />
      {hasNextPage && <LoadingIcon ref={ref} />}
      <BottomNavigation />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context.query) {
    const query = isNil(context.query.query) ? undefined : decodeURI(String(context.query.query));
    const filter = context.query[BEER_LIST_FILTER_ATOM_KEY]
      ? JSON.parse(context.query[BEER_LIST_FILTER_ATOM_KEY] as string)
      : undefined;
    const sortBy = context.query[BEER_LIST_SORT_BY_ATOM_KEY]
      ? [(context.query[BEER_LIST_SORT_BY_ATOM_KEY] as string).replace(/["]/g, '') as EBeerSortBy]
      : undefined;

    const payload = {
      ...(query ? { query } : {}),
      ...(filter ? { filter } : {}),
      sortBy: sortBy || [DEFAULT_BEER_LIST_SORT_BY],
    };

    const beersData = await getBeers({
      payload: {
        ...payload,
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
