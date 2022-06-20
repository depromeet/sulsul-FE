import styled from '@emotion/styled';
import { GetServerSideProps, NextPage } from 'next';

import Header from '@/components/Header';
import { BackButton } from '@/components/Header/extras';
import RequestedBeerItem from '@/components/RequestedBeerItem';
import { useGetRequestBeers } from '@/queries';
import { getRequestBeers, IGetRequestBeersResponse } from '@/apis';

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
  const { contents: requestBeers, resultCount } = useGetRequestBeers(initialRequestBeersData);

  return (
    <>
      <Header leftExtras={<BackButton />}>요청한 맥주 현황</Header>
      <StyledTotalNumber>총 {resultCount}건</StyledTotalNumber>
      {requestBeers?.map((requestBeer) => (
        <RequestedBeerItem key={requestBeer.beerId} {...requestBeer} />
      ))}
    </>
  );
};

export default BeerRequestListContainer;

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context.query) {
    const requestBeersData = await getRequestBeers({
      cursor: 0,
      limit: 20,
    });

    return { props: { requestBeersData } };
  }
  return { props: {} };
};
