import React, { useState } from 'react';
import styled from '@emotion/styled';

import { IBeer } from '@/apis';
import Emoji from '@/components/Emoji';
import BeerImageMasking from '@/components/commons/BeerImageMasking';
import Icon from '@/components/commons/Icon-new';
import { ellipsis } from '@/styles/common';

type BeerGridItemProps = Pick<IBeer, 'nameKor' | 'imageUrl' | 'feel' | 'isLiked'>;

interface Props {
  beer: BeerGridItemProps;
}

const BeerGridItem = (props: Props) => {
  const {
    beer: { nameKor, imageUrl, feel, isLiked },
  } = props;
  const [isBookMarked, setIsBookmarked] = useState(false);

  return (
    <StyledBeerGridItem>
      <BeerGridItemContainer feel={feel}>
        <BookmarkButton onClick={() => setIsBookmarked((prev) => !prev)}>
          {isLiked || isBookMarked ? (
            <Icon name="Heart" size={30} color="white" />
          ) : (
            <Icon name="HeartOutlined" size={30} color="white" />
          )}
        </BookmarkButton>
        <StyledEmoji>
          <Emoji feel={feel} />
        </StyledEmoji>
        <BeerImageMasking width="30%">
          <BeerImage src={imageUrl} />
        </BeerImageMasking>
      </BeerGridItemContainer>
      <BeerName>{nameKor}</BeerName>
    </StyledBeerGridItem>
  );
};

export default BeerGridItem;

const StyledBeerGridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const BeerName = styled.div`
  ${({ theme }) => theme.fonts.SubTitle5}
  color: ${({ theme }) => theme.color.white};
  text-align: center;
  width: 95%;
  ${ellipsis()};
`;

const BeerGridItemContainer = styled.div<{ feel?: number | null }>`
  position: relative;
  aspect-ratio: 1 / 1;
  width: 100%;
  background: ${({ feel, theme }) =>
    feel !== null ? theme.color.blue : theme.color.whiteOpacity20};
  border-radius: 10px;
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
  z-index: 1;
`;

const BeerImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const StyledEmoji = styled.div`
  position: absolute;
  bottom: -4px;
  right: -4px;
  z-index: 1;
`;
