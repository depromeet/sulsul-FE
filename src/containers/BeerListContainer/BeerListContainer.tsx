import { useRouter } from 'next/router';
import { isNil } from 'lodash';
import { useRecoilValue } from 'recoil';
import { useInView } from 'react-intersection-observer';
import { GetServerSideProps, NextPage } from 'next';

import { $beerListFilter, $beerListSortBy } from './recoil/atoms';

import Icon from '@/components/commons/Icon';
import BeerListPageHeader from '@/components/BeerListPageHeader';
import BeerListFilterAndSorter from '@/components/BeerListFilterAndSorter';
import BeerListSearchResult from '@/components/BeerSearchResultList';
import BottomNavigation from '@/components/BottomNavigation';
import { useGetBeersCount, useGetBeers } from '@/queries';
import { getBeers, IGetBeersResponseData } from '@/apis';
import { useGtagPageView } from '@/hooks';
import { PAGE_TITLES } from '@/constants';

interface BeerListContainerProps {
  beersData: IGetBeersResponseData;
}

const BeerListContainer: NextPage<BeerListContainerProps> = ({ beersData: _beersData }) => {
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
  } = useGetBeers({ limit: 21 }, _beersData);

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
  });

  return (
    <>
      <BeerListPageHeader />
      <BeerListFilterAndSorter
        resultCount={resultCount}
        totalCount={beersCountData?.contents?.totalCount}
      />
      <BeerListSearchResult query={query} isLoading={isLoading} beers={beersData} />

      {pageInfo.hasNext && (
        <div ref={ref}>
          <Icon name="AirPlaneLoading" size={40} style={{ margin: '50px auto' }} />
        </div>
      )}

      <BottomNavigation />
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async () => {
  // TODO: recoil url로 변경, any 제거
  const beersData = await getBeers({
    pageParam: {
      payload: { limit: 21 },
      auth: undefined,
    },
  } as any);

  return { props: { beersData } };
};

export default BeerListContainer;
