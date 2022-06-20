import styled from '@emotion/styled';

import Header from '@/components/Header';
import { BackButton } from '@/components/Header/extras';
import RequestedBeerItem from '@/components/RequestedBeerItem';
import { useGetRequestBeers } from '@/queries';

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
      <RequestedBeerItem
        id={2}
        beerNameKor="성산 일출봉"
        createdAt={new Date()}
        status="approved"
        completedAt={new Date()}
      />
      <RequestedBeerItem
        id={2}
        beerNameKor="성산 일출봉"
        createdAt={new Date()}
        status="approved"
        completedAt={new Date()}
      />
    </>
  );
};

export default BeerRequestListContainer;
