import styled from '@emotion/styled';
import { GetServerSideProps, NextPage } from 'next';
import { useInView } from 'react-intersection-observer';

import Header from '@/components/Header';
import { BackButton } from '@/components/Header/extras';
import RequestedBeerItem from '@/components/RequestedBeerItem';
import { useGetRequestBeers } from '@/queries';
import { getRequestBeers, IGetRequestBeersResponse } from '@/apis';
import { useGtagPageView } from '@/hooks';
import { PAGE_TITLES } from '@/constants';
import Button from '@/components/commons/Button';
import LoadingIcon from '@/components/LoadingIcon';

interface IBeerRequestListContainerProps {
  requestBeersData?: IGetRequestBeersResponse;
}

const StyledTotalNumber = styled.p`
  margin: 10px 22px 16px;
  ${(p) => p.theme.fonts.Body1};
  color: ${(p) => p.theme.color.whiteOpacity80};
  text-align: end;
`;

const BeerRequestListContainer: NextPage<IBeerRequestListContainerProps> = ({
  requestBeersData: initialRequestBeersData,
}) => {
  useGtagPageView(PAGE_TITLES.BEER_REQUEST_LIST);

  const {
    contents: requestBeers,
    resultCount,
    fetchNextPage,
    isLoading,
    hasNextPage,
  } = useGetRequestBeers(initialRequestBeersData);

  const { ref } = useInView({
    onChange: (inView) => {
      if (inView && hasNextPage && !isLoading) {
        fetchNextPage();
      }
    },
  });

  return (
    <>
      <Header leftExtras={<BackButton />}>요청한 맥주 현황</Header>
      <StyledTotalNumber>총 {resultCount}건</StyledTotalNumber>
      {requestBeers?.map((requestBeer) => (
        <RequestedBeerItem key={requestBeer.beerId} {...requestBeer} />
      ))}
      {hasNextPage && <LoadingIcon ref={ref} />}
    </>
  );
};

export default BeerRequestListContainer;

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context.query) {
    const requestBeersData = await getRequestBeers({
      cursor: 0,
      limit: 21,
    });

    return { props: { requestBeersData } };
  }
  return { props: {} };
};
