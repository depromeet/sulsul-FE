import React, { useState } from 'react';
import styled from '@emotion/styled';

import { BookmarkIcon } from '@/assets/icon';
import Emoji from '@/components/Emoji';

interface BeerGridItemProps {
  name: string;
  imageUrl: string;
  feel: number | null;
  isLiked?: boolean;
}

const BeerGridItem = (props: BeerGridItemProps) => {
  const { name, imageUrl, feel, isLiked } = props;
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
        <BeerImageMask>
          <BeerImage src={imageUrl} />
        </BeerImageMask>
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

const BeerGridItemContainer = styled.div<{ feel: number | null }>`
  position: relative;
  width: 8rem;
  height: 8rem;
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
`;

// NOTE: 마스킹 참고 : https://www.w3schools.com/css/css3_masking.asp
const BeerImageMask = styled.div`
  width: 2.6rem;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-mask-box-image: url('https://ifh.cc/g/KQ8NLv.png');
  mask-image: url('https://ifh.cc/g/KQ8NLv.png');
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
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
