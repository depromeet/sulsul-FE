import React from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import { IBeer } from '@/apis';
import Emoji from '@/components/Emoji';
import { ellipsis } from '@/styles/common';
import { LikeBeerToggleButton } from '@/components/Header/extras';
import { useElementSize } from '@/hooks';

type BeerGridItemProps = Pick<IBeer, 'id' | 'nameKor' | 'imageUrl' | 'feel' | 'isLiked'>;

interface Props {
  beer: BeerGridItemProps;
}

const BeerGridItem = (props: Props) => {
  const {
    beer: { id, nameKor, imageUrl, feel, isLiked },
  } = props;

  const router = useRouter();

  const { ref, size } = useElementSize<HTMLDivElement>();
  const itemHeight = size?.width;

  const goToBeerDetail = (beerId: number) => {
    router.push(`/beers/${beerId}`);
  };

  return (
    <StyledBeerGridItem onClick={() => goToBeerDetail(id)}>
      <BeerGridItemContainer ref={ref} feel={feel} height={itemHeight}>
        <LikeBeerToggleButtonWrapper>
          <LikeBeerToggleButton isLiked={isLiked} id={id} />
        </LikeBeerToggleButtonWrapper>
        <StyledEmoji>
          <Emoji feel={feel} />
        </StyledEmoji>
        <BeerImage src={imageUrl} maxHeight={itemHeight ? itemHeight - 20 : undefined} />
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

const BeerGridItemContainer = styled.div<{ feel?: number | null; height?: number }>`
  position: relative;
  width: 100%;
  ${({ height }) => (height ? `height: ${height}px;` : '')};
  background: ${({ feel, theme }) =>
    feel !== null ? theme.color.blue : theme.color.whiteOpacity20};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LikeBeerToggleButtonWrapper = styled.div`
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

const BeerImage = styled.img<{ maxHeight?: number }>`
  width: 30%;
  height: auto;
  ${({ maxHeight }) => `max-height: ${maxHeight ? `${maxHeight}px` : '100%'};`};
  object-fit: contain;
`;

const StyledEmoji = styled.div`
  position: absolute;
  bottom: -4px;
  right: -4px;
  z-index: 1;
`;
