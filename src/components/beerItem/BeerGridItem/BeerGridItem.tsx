import React, { useState } from 'react';
import styled from '@emotion/styled';

import { BookmarkIcon } from '@/assets/icon';
import Emoji from '@/components/Emoji';
import { Beer } from '@/types/Beer';
import BeerImageMasking from '@/components/commons/BeerImageMasking';

type BeerGridItemProps = Pick<Beer, 'name' | 'imageUrl' | 'feel' | 'isLiked'>;

interface Props {
  beer: BeerGridItemProps;
}

const BeerGridItem = (props: Props) => {
  const {
    beer: { name, imageUrl, feel, isLiked },
  } = props;
  const [isBookMarked, setIsBookmarked] = useState(false);

  return (
    <StyledBeerGridItem>
      <BeerGridItemContainer feel={feel}>
        <BookmarkButton onClick={() => setIsBookmarked((prev) => !prev)}>
          <StyledBookMarkIcon isLiked={isLiked} isBookMarked={isBookMarked} />
        </BookmarkButton>
        <StyledEmoji>
          <Emoji feel={feel} />
        </StyledEmoji>
        <BeerImageMasking width="30%">
          <BeerImage src={imageUrl} />
        </BeerImageMasking>
      </BeerGridItemContainer>
      <BeerName>{name}</BeerName>
    </StyledBeerGridItem>
  );
};

export default BeerGridItem;

const StyledBeerGridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
`;

const BeerName = styled.div`
  ${({ theme }) => theme.fonts.beerNameGrid}
  color: ${({ theme }) => theme.color.white};
  text-align: center;
  max-width: 7.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BeerGridItemContainer = styled.div<{ feel?: number | null }>`
  position: relative;
  aspect-ratio: 1 / 1;
  width: 100%;
  background: ${({ feel, theme }) =>
    feel !== null ? theme.color.blue : theme.color.whiteOpacity20};
  border-radius: 0.77rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BookmarkButton = styled.button`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 1px;
  right: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
`;

const BeerImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const StyledEmoji = styled.div`
  position: absolute;
  bottom: -3px;
  right: -3px;
`;

const StyledBookMarkIcon = styled(BookmarkIcon)<{ isLiked: boolean; isBookMarked: boolean }>`
  path {
    fill: ${({ theme, isLiked, isBookMarked }) =>
      isLiked || isBookMarked ? theme.color.white : 'none'};
  }
`;
