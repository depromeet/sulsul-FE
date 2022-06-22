import React from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import { IBeer } from '@/apis';
import Emoji from '@/components/Emoji';
import BeerImageMasking from '@/components/commons/BeerImageMasking';
import { ellipsis } from '@/styles/common';
import { useLikeBeer, useUnLikeBeer } from '@/queries';
import { LikeToggleButton } from '@/components/Header/extras';

type BeerGridItemProps = Pick<IBeer, 'id' | 'nameKor' | 'imageUrl' | 'feel' | 'isLiked'>;

interface Props {
  beer: BeerGridItemProps;
}

const BeerGridItem = (props: Props) => {
  const {
    beer: { id, nameKor, imageUrl, feel, isLiked },
  } = props;

  const router = useRouter();

  const goToBeerDetail = (beerId: number) => {
    router.push(`/beers/${beerId}`);
  };

  const { mutateAsync: likeBeerMutation } = useLikeBeer(id);
  const { mutateAsync: UnLikeBeerMutation } = useUnLikeBeer(id);

  const handleLikeBeer = async () => {
    likeBeerMutation(id);
  };

  const handleUnLikeBeer = async () => {
    UnLikeBeerMutation(id);
  };

  return (
    <StyledBeerGridItem onClick={() => goToBeerDetail(id)}>
      <BeerGridItemContainer feel={feel}>
        <LikeToggleButtonWrapper>
          <LikeToggleButton isLiked={isLiked} onLike={handleLikeBeer} onUnLike={handleUnLikeBeer} />
        </LikeToggleButtonWrapper>
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

const LikeToggleButtonWrapper = styled.div`
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
  max-height: 100%;
  object-fit: contain;
`;

const StyledEmoji = styled.div`
  position: absolute;
  bottom: -4px;
  right: -4px;
  z-index: 1;
`;
