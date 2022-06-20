import styled from '@emotion/styled';

import Header from '@/components/Header';
import { BackButton } from '@/components/Header/extras';
import RequestedBeerItem from '@/components/RequestedBeerItem';
import { useGetRequestBeers } from '@/queries';
import { IRequestBeer } from '@/apis';

const StyledTotalNumber = styled.p`
  margin: 10px 22px 16px;
  ${(p) => p.theme.fonts.Body1};
  color: ${(p) => p.theme.color.whiteOpacity80};
  text-align: end;
`;

const BeerRequestListContainer = () => {
  const { contents: requestBeers, resultCount } = useGetRequestBeers();

  return (
    <>
      <Header leftExtras={<BackButton />}>요청한 맥주 현황</Header>
      <StyledTotalNumber>총 {resultCount}건</StyledTotalNumber>
      {requestBeers?.map((requestBeer: IRequestBeer) => (
        <RequestedBeerItem key={requestBeer.beerId} {...requestBeer} />
      ))}
    </>
  );
};

export default BeerRequestListContainer;
