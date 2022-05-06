import React, { useState } from 'react';
import styled from '@emotion/styled';

import { BookmarkIcon } from '@/assets/icon';
import Emoji from '@/components/Emoji';
import { Beer } from '@/types/Beer';
import BeerImageMasking from '@/components/commons/BeerImageMasking';

// type BeerListItemProps = Pick<
//   Beer,
//   'country' | 'type' | 'name' | 'imageUrl' | 'alcohol' | 'feel' | 'isLiked'
// >;

const BeerListItem = (props: Beer) => {
  const { name, type, alcohol, country, imageUrl, feel, isLiked } = props;
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
      <StyledBeerImageMasking width="9%">
        <BeerImage src={imageUrl} />
      </StyledBeerImageMasking>
      <TextContainer>
        <BeerName>{name}</BeerName>
        <BeerInfo>
          {country?.name} · {type} · {alcohol?.toFixed(1)}%
        </BeerInfo>
      </TextContainer>
    </StyledBeerListItem>
  );
};

export default BeerListItem;

const StyledBeerListItem = styled.div`
  width: calc(100% - 26px);
  aspect-ratio: 315 / 80;
  background-color: ${({ theme }) => theme.color.whiteOpacity20};
  border-radius: 0.46rem;
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 26px;
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

const ColorBar = styled.div<{ feel?: number | null }>`
  width: 4%;
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

const StyledBeerImageMasking = styled(BeerImageMasking)`
  margin: 0 3%;
`;

const BeerImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
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
