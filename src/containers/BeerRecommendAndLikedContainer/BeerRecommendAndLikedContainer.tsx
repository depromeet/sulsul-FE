import styled from '@emotion/styled';

import Header from '@/components/Header';
import { BackButton, BeerListViewToggleButton } from '@/components/Header/extras';
import Tab from '@/components/Tab';
import BeerList from '@/components/BeerList';
import BottomFloatingButtonArea from '@/components/BottomFloatingButtonArea';
import Button from '@/components/commons/Button';
import Icon from '@/components/commons/Icon';
import Swiper from '@/components/Swiper';
import { useGetBeersLiked, useGetBeersRecommend } from '@/queries';

const TITLES = ['새로운 맥주를 도전해볼까요?', '예전에 찜해둔 맥주들이에요'];
const TAB_ITEMS = ['안 마셔본 맥주', '반한 맥주'];

const StyledFixedArea = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;
  padding-bottom: 10px;
  background: ${(p) =>
    `linear-gradient(180deg, ${p.theme.semanticColor.background} 93%, rgba(0, 0, 0, 0) 100%)`};
`;

const StyledTitle = styled.h1`
  padding: 10px 20px;
  ${(p) => p.theme.fonts.H1};
`;

const StyledSwiper = styled(Swiper)`
  flex: 1;
  overflow-y: auto;

  .carousel-slider,
  .slider-wrapper,
  .slider,
  .slide {
    height: 100%;
  }

  .slide {
    overflow-y: auto;
  }
`;

interface BeerRecommendButtonProps {
  onClick: () => void;
}

const BeerRecommendButton = ({ onClick }: BeerRecommendButtonProps) => {
  return (
    <BottomFloatingButtonArea>
      <Button
        type="primary"
        width="large"
        leftAddon={<Icon name="Random" size={30} />}
        onClick={onClick}
      >
        다른 맥주 추천 받기
      </Button>
    </BottomFloatingButtonArea>
  );
};

interface BeerRecommendAndLikedContainerProps {
  activatedIndex: number;
  setActivatedIndex: (activatedIndex: number) => void;
}

const BeerRecommendAndLikedContainer: React.FC<BeerRecommendAndLikedContainerProps> = ({
  activatedIndex,
  setActivatedIndex,
}) => {
  const { contents: beersRecommend = [], refetch: refetchBeersRecommend } = useGetBeersRecommend();
  const { contents: beersLiked = [], isLoading, hasNextPage, fetchNextPage } = useGetBeersLiked({});

  const handleRecommendClick = () => {
    refetchBeersRecommend();
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      <StyledFixedArea>
        <Header leftExtras={<BackButton />} rightExtras={<BeerListViewToggleButton />} />
        <StyledTitle>{TITLES[activatedIndex]}</StyledTitle>
        <Tab
          tabItems={TAB_ITEMS}
          type="secondary"
          outerActivatedIndex={activatedIndex}
          onChange={setActivatedIndex}
        />
      </StyledFixedArea>
      <StyledSwiper selectedItem={activatedIndex} onChange={setActivatedIndex}>
        <BeerList beers={beersRecommend} />
        <BeerList
          beers={beersLiked}
          isLoading={isLoading}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
        />
      </StyledSwiper>
      {activatedIndex === 0 && <BeerRecommendButton onClick={handleRecommendClick} />}
    </>
  );
};

export default BeerRecommendAndLikedContainer;
