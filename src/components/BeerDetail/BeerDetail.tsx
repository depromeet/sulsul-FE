import styled from '@emotion/styled';
import React from 'react';

import { IBeer } from '@/apis';

interface Props {
  beerData: IBeer;
}

const BeerDetail = ({ beerData }: Props) => {
  const { country, type, nameKor, nameEng, imageUrl, alcohol, price, volume } = beerData;

  const beerInfo = [
    { title: '종류', content: type?.nameKor },
    { title: '원산지', content: country?.nameKor },
    { title: '도수', content: `${alcohol}%` },
    { title: '용량', content: `${volume}ml` },
    { title: '가격', content: `${price}원` },
  ];

  return (
    <StyledBeerDetail>
      <TitleAndIconContainer>
        <BeerNameWrapper>
          <BeerName>{nameKor}</BeerName>
          <BeerNameEng>{nameEng}</BeerNameEng>
        </BeerNameWrapper>
      </TitleAndIconContainer>
      <InfoAndBeerImage>
        <BeerImageMaskingWrapper>
          <BeerImage src={imageUrl} />
        </BeerImageMaskingWrapper>
        <InfoTableWrapper>
          {beerInfo.map(({ title, content }) => (
            <InfoTable key={title}>
              <Title>{title}</Title>
              <Content>{content}</Content>
            </InfoTable>
          ))}
        </InfoTableWrapper>
      </InfoAndBeerImage>
    </StyledBeerDetail>
  );
};

export default BeerDetail;

const StyledBeerDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 17.48rem;
  padding: 1.7rem;
  background-color: ${({ theme }) => theme.color.black80};
  border-radius: 12px;
  margin-top: 134px;
`;

const TitleAndIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 70px;
  margin-bottom: 10px;
`;

const BeerNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BeerName = styled.h1`
  ${({ theme }) => theme.fonts.H5};
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 8px;
`;

const BeerNameEng = styled.h1`
  ${({ theme }) => theme.fonts.Body1};
  color: ${({ theme }) => theme.color.whiteOpacity65};
  margin-bottom: 30px;
`;

const InfoAndBeerImage = styled.div`
  display: flex;
  align-items: center;
`;

const InfoTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const InfoTable = styled.div`
  display: flex;
  min-width: 150px;
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.Body1};
  color: ${({ theme }) => theme.color.whiteOpacity80};
  width: 40px;
  margin-right: 16px;
`;

const Content = styled.p`
  ${({ theme }) => theme.fonts.Body1};
  color: ${({ theme }) => theme.color.white};
`;

const BeerImage = styled.img`
  width: auto;
  height: 100%;
`;

const BeerImageMaskingWrapper = styled.div`
  width: 90px;
  aspect-ratio: 1 / 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.whiteOpacity20};
  margin-right: 30px;
`;
