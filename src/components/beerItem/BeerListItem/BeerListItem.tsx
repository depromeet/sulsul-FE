import React, { useState } from 'react';
import styled from '@emotion/styled';

import { BookmarkIcon } from '@/assets/icon';
import Emoji from '@/components/Emoji';

interface CountryType {
  id: number;
  name: string;
  continent: {
    id: number;
    name: string;
  };
}

interface BeerListItemProps {
  country: CountryType;
  type: string;
  name: string;
  imageUrl: string;
  alcohol: number;
  feel: number | null;
  isLiked?: boolean;
}

const BeerListItem = ({
  name,
  type,
  alcohol,
  country,
  imageUrl,
  feel,
  isLiked,
}: BeerListItemProps) => {
  const [isBookMarked, setIsBookmarked] = useState(false);

  return (
    <StyledBeerListItem>
      <ColorBar feel={feel} />
      <StyledEmoji>
        <Emoji feel={feel} />
      </StyledEmoji>
      <BookmarkButton onClick={() => setIsBookmarked((prev) => !prev)}>
        <StyledBookMarkIcon isLiked={isLiked} isBookMarked={isBookMarked} />
      </BookmarkButton>
      <BeerImageMask>
        <BeerImage src={imageUrl} />
      </BeerImageMask>
      <TextContainer>
        <BeerName>{name}</BeerName>
        <BeerInfo>
          {country.name} · {type} · {alcohol.toFixed(1)}%
        </BeerInfo>
      </TextContainer>
    </StyledBeerListItem>
  );
};

export default BeerListItem;

const StyledBeerListItem = styled.div`
  width: 24.2rem;
  height: 6.15rem;
  background-color: ${({ theme }) => theme.color.whiteOpacity20};
  border-radius: 0.46rem;
  position: relative;
  display: flex;
  align-items: center;
`;

const BookmarkButton = styled.button`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0px;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
`;

const ColorBar = styled.div<{ feel: number | null }>`
  width: 1.23rem;
  height: 100%;
  background: ${({ feel, theme }) =>
    feel !== null ? theme.color.blue : theme.color.whiteOpacity20};
  border-radius: 0.46rem 0rem 0rem 0.46rem;
`;

const StyledEmoji = styled.div`
  position: absolute;
  left: -2rem;
  top: 50%;
  transform: translateY(-50%);
`;

// NOTE: 마스킹 참고 : https://www.w3schools.com/css/css3_masking.asp
const BeerImageMask = styled.div`
  width: 2.5rem;
  height: 4.5rem;
  margin: 0 1.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-mask-box-image: url('https://ifh.cc/g/KQ8NLv.png');
  mask-image: url('https://ifh.cc/g/KQ8NLv.png');
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
`;

const BeerImage = styled.img`
  width: 100%;
  height: auto;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const BeerName = styled.div`
  ${({ theme }) => theme.fonts.beerNameList}
  color:  ${({ theme }) => theme.color.white};
  max-width: 14rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BeerInfo = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.color.whiteOpacity80};
`;

const StyledBookMarkIcon = styled(BookmarkIcon)<{ isLiked: boolean; isBookMarked: boolean }>`
  path {
    fill: ${({ theme, isLiked, isBookMarked }) =>
      isLiked || isBookMarked ? theme.color.white : 'none'};
  }
`;
