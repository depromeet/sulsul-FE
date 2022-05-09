import styled from '@emotion/styled';
import { useState } from 'react';
import * as clipboard from 'clipboard-polyfill/text';

import { ShareIcon, BookmarkIcon } from '@/assets/icon';
import { Beer } from '@/types/Beer';
import BeerImageMasking from '@/components/commons/BeerImageMasking';

export type BeerDetailType = Omit<Beer, 'id' | 'content' | 'feel'>;

export type BeerDetailProps = {
  isCompact?: boolean;
  beer: BeerDetailType;
};

const BeerDetail = (props: BeerDetailProps) => {
  const {
    beer: { country, type, name, nameEng, imageUrl, alcohol, price, volume, isLiked },
    isCompact = false,
    ...rest
  } = props;
  const [isBookMarked, setIsBookmarked] = useState(false);
  const beerInfo = [
    { title: '종류', content: type },
    { title: '원산지', content: country?.name },
    { title: '도수', content: `${alcohol}%` },
    { title: '용량', content: `${volume}ml` },
    { title: '가격', content: `${price}원` },
  ];

  return (
    <StyledBeerDetail isCompact={isCompact} {...rest}>
      {!isCompact ? (
        <TitleAndIconContainer>
          <BeerNameWrapper>
            <BeerName>{name}</BeerName>
            <BeerNameEng>{nameEng}</BeerNameEng>
          </BeerNameWrapper>
          <IconWrapper>
            <IconButton
              onClick={() => {
                clipboard.writeText(window.location.href);
                alert(`주소가 복사되었습니다. ${window.location.href}`);
              }}
            >
              <ShareIcon />
            </IconButton>
            <IconButton onClick={() => setIsBookmarked((prev) => !prev)}>
              <StyledBookMarkIcon isLiked={isLiked} isBookMarked={isBookMarked} />
            </IconButton>
          </IconWrapper>
        </TitleAndIconContainer>
      ) : undefined}
      <InfoAndBeerImage>
        <InfoTableWrapper>
          {beerInfo.map(({ title, content }) => (
            <InfoTable key={title}>
              <Title>{title}</Title>
              <Content>{content}</Content>
            </InfoTable>
          ))}
        </InfoTableWrapper>
        <StyledBeerImageMasking width="24%">
          <BeerImage src={imageUrl} />
        </StyledBeerImageMasking>
      </InfoAndBeerImage>
    </StyledBeerDetail>
  );
};

export default BeerDetail;

const StyledBeerDetail = styled.div<{ isCompact: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: auto;
  min-height: ${(p) => (p.isCompact ? '11.87rem' : '17.48rem')};
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
  gap: 0.6rem;
`;

const BeerName = styled.div`
  font-size: 1.7rem;
  font-weight: 700;
  line-height: 26px;
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 0.6rem;
`;

const BeerNameEng = styled.div`
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 17px;
  color: ${({ theme }) => theme.color.grey};
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const IconButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;

  > svg {
    width: 30px;
    height: 30px;
  }
`;

const StyledBookMarkIcon = styled(BookmarkIcon)<{ isLiked: boolean; isBookMarked: boolean }>`
  path {
    fill: ${({ theme, isLiked, isBookMarked }) =>
      isLiked || isBookMarked ? theme.color.white : 'none'};
  }
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
  //width: 200px;
`;

const Title = styled.p`
  font-size: 1.1rem;
  line-height: 160%;
  font-weight: 400;
  color: ${({ theme }) => theme.color.white};
  width: 5rem;
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

const StyledBeerImageMasking = styled(BeerImageMasking)`
  margin-left: auto;
  margin-right: 17px;
`;
