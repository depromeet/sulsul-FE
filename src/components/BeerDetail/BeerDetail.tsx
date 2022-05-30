import styled from '@emotion/styled';
import React from 'react';

import { IBeer } from '@/apis';
import BeerImageMasking from '@/components/commons/BeerImageMasking';

export type BeerDetailType = Omit<IBeer, 'id' | 'content' | 'feel'>;

export type BeerDetailProps = {
  beer: BeerDetailType;
};

const BeerDetail = (props: BeerDetailProps) => {
  const {
    beer: { country, type, nameKor, nameEng, imageUrl, alcohol, price, volume },
    ...rest
  } = props;

  const beerInfo = [
    { title: '종류', content: type?.nameKor },
    { title: '원산지', content: country?.nameKor },
    { title: '도수', content: `${alcohol}%` },
    { title: '용량', content: `${volume}ml` },
    { title: '가격', content: `${price}원` },
  ];

  return (
    <StyledBeerDetail {...rest}>
      <TitleAndIconContainer>
        <BeerNameWrapper>
          <BeerName>{nameKor}</BeerName>
          <BeerNameEng>{nameEng}</BeerNameEng>
        </BeerNameWrapper>
      </TitleAndIconContainer>
      <InfoAndBeerImage>
        <BeerImageMaskingWrapper>
          <BeerImageMasking width="24%">
            <BeerImage src={imageUrl} />
          </BeerImageMasking>
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
  width: auto;
  min-height: 17.48rem;
  padding: 1.7rem;
  background-color: ${({ theme }) => theme.color.black80};
  border-radius: 0.9rem;
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
  font-size: 1.7rem;
  font-weight: 700;
  line-height: 26px;
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 0.6rem;
`;

const BeerNameEng = styled.h1`
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 17px;
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
  gap: 5px;
`;

const InfoTable = styled.div`
  display: flex;
  min-width: 150px;
`;

const Title = styled.p`
  font-size: 1.1rem;
  line-height: 160%;
  font-weight: 400;
  color: ${({ theme }) => theme.color.whiteOpacity80};
  width: 40px;
  margin-right: 16px;
`;

const Content = styled.p`
  font-size: 1.2rem;
  line-height: 160%;
  font-weight: 700;
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
const StyledBeerImageMasking = styled(BeerImageMasking)`
  margin-left: auto;
  margin-right: 17px;
`;
