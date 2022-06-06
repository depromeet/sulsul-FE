import React, { useState } from 'react';
import styled from '@emotion/styled';

import { IBeer } from '@/apis';
import Emoji from '@/components/Emoji';
import BeerImageMasking from '@/components/commons/BeerImageMasking';
import Icon from '@/components/commons/Icon';
import { ellipsis } from '@/styles/common';

type BeerListItemProps = Pick<
  IBeer,
  'country' | 'type' | 'nameKor' | 'imageUrl' | 'alcohol' | 'feel' | 'isLiked'
>;

interface Props {
  beer: BeerListItemProps;
}

const BeerListItem = (props: Props) => {
  const {
    beer: { nameKor, type, alcohol, country, imageUrl, feel, isLiked },
  } = props;
  const [isBookMarked, setIsBookmarked] = useState(false);

  return (
    <StyledBeerListItem>
      <ColorBar feel={feel} />
      <StyledEmoji>
        <Emoji feel={feel} />
      </StyledEmoji>
      <BookmarkButton onClick={() => setIsBookmarked((prev) => !prev)}>
        {isLiked || isBookMarked ? (
          <Icon name="Heart" size={30} color="white" />
        ) : (
          <Icon name="HeartOutlined" size={30} color="white" />
        )}
      </BookmarkButton>
      <StyledBeerImageMasking width="9%">
        <BeerImage src={imageUrl} />
      </StyledBeerImageMasking>
      <TextContainer>
        <BeerName>{nameKor}</BeerName>
        <BeerInfo>
          {country?.nameKor} · {type?.nameKor} · {alcohol?.toFixed(1)}%
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
  border-radius: 6px;
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
  width: 16px;
  height: 100%;
  background: ${({ feel, theme }) =>
    feel !== null ? theme.color.blue : theme.color.whiteOpacity20};
  border-radius: 6px 0 0 6px;
`;

const StyledEmoji = styled.div`
  position: absolute;
  left: -26px;
  top: 50%;
  transform: translateY(-50%);
`;

const StyledBeerImageMasking = styled(BeerImageMasking)`
  margin: 0 14px;
`;

const BeerImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`;

const BeerName = styled.div`
  width: calc(100% - 60px);
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.fonts.SubTitle4};
  ${ellipsis()};
  text-align: left;
`;

const BeerInfo = styled.div`
  color: ${({ theme }) => theme.color.whiteOpacity80};
  ${({ theme }) => theme.fonts.SubTitle5};
  text-align: left;
`;
