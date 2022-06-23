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
    pageInfo,
    fetchNextPage,
    isLoading,
  } = useGetBeers({ query, filter, sortBy: [sortBy], limit: 21 }, initialBeersData);

  const { ref } = useInView({
    onChange: (inView) => {
      const { nextCursor, hasNext } = pageInfo;
      const auth = undefined;

      if (inView && nextCursor && hasNext && !isLoading) {
        fetchNextPage({
          pageParam: {
            payload: { query, filter, sortBy: [sortBy], cursor: nextCursor, limit: 21 },
            auth,
          },
        });
      }
    },
    triggerOnce: true,
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

      {pageInfo.hasNext && <LoadingIcon ref={ref} />}

      <BottomNavigation />
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context.query) {
    const beersData = await getBeers({
      pageParam: {
        payload: {
          filter: context.query[BEER_LIST_FILTER_ATOM_KEY]
            ? JSON.parse(context.query[BEER_LIST_FILTER_ATOM_KEY] as string)
            : undefined,
          sortBy: context.query[BEER_LIST_SORT_BY_ATOM_KEY]
            ? [(context.query[BEER_LIST_SORT_BY_ATOM_KEY] as string).replace(/["]/g, '')]
            : undefined,
          limit: 21,
        },
        auth: undefined,
      },
    } as any);

    return { props: { beersData } };
  }
  return { props: {} };
};

export default BeerListContainer;
