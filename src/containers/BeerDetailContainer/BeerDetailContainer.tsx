import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import BeerDetail, { BeerDetailProps } from '@/components/BeerDetail';
import AirPort, { AirPortProps } from '@/components/AirPort';
import TasteBoxAndBadge, { TasteBoxAndBadgeProps } from '@/components/TasteBoxAndBadge';
import Button from '@/components/commons/Button';
import Icon from '@/components/commons/Icon';
import Review, { ReviewProps } from '@/components/Review';
import Header from '@/components/Header';
import { ShareButton, LikeToggleButton, BackButton } from '@/components/Header/extras';
import { Reviews } from '@/constants/Reviews';
import { TasteBoxAndBadges } from '@/constants/TasteBoxAndBadge';

interface Props {
  beerDetail: BeerDetailProps;
  backgroundImageUrl: string;
  airPort: AirPortProps;
  beerContent: string;
  tasteBoxAndBadge: TasteBoxAndBadgeProps[];
  review: ReviewProps[];
}

const BeerDetailPage = (props: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const scrollEventListener = () => {
      const scrollY = window.scrollY ?? window.pageYOffset;

      // TODO: scrollY 값 수정 필요
      if (scrollY > 198) {
        setIsScrolled(true);
        setIsTransparent(false);
      } else if (scrollY < 198) {
        setIsScrolled(false);
        setIsTransparent(true);
      }
    };
    window.addEventListener('scroll', scrollEventListener, { passive: true });
    return () => {
      window.removeEventListener('scroll', scrollEventListener);
    };
  }, []);

  const {
    beerDetail: { beer },
    backgroundImageUrl,
    airPort: { departureKor, departureEng, destinationKor, destinationEng },
    beerContent,
    ...rests
  } = props;
  return (
    <StyledBeerDetailPage {...rests}>
      <Header
        leftExtras={<StyledBackButton isScrolled={isScrolled} />}
        rightExtras={
          <>
            <ShareButton />
            <LikeToggleButton
              defaultIsLiking={true}
              onLike={async () => alert('좋아요')}
              onUnLike={async () => alert('좋아요 해제')}
            />
          </>
        }
        isTransparent={isTransparent}
      >
        {beer.name}
      </Header>
      <BackgroundImage isScrolled={isScrolled}>
        <div className="image-container">
          <img src={backgroundImageUrl} alt="" />
          <div className="gradient" />
        </div>
      </BackgroundImage>
      <div className="container">
        <StyledBeerDetail beer={beer} isCompact={isScrolled ? true : false} />
        <StyledAirPort
          departureKor={departureKor}
          departureEng={departureEng}
          destinationKor={destinationKor}
          destinationEng={destinationEng}
        />
        <BeerContent>{beerContent}</BeerContent>
        <TasteBoxAndBadgeContainer>
          {TasteBoxAndBadges.map((box, index) => (
            <TasteBoxAndBadge key={index} text={box.text} likeCount={box.likeCount} />
          ))}
        </TasteBoxAndBadgeContainer>
      </div>
      <HorizontalDivider />
      <div className="container" style={{ backgroundColor: 'black' }}>
        <ThisBeer>이 맥주는 어땠냐면,</ThisBeer>
        {Reviews.map((review, index) => (
          <Review
            key={index}
            feel={review.feel}
            me={review.me}
            userName={review.userName}
            reviewCount={2}
            content={review.content}
            date={review.date}
            tags={review.tags}
            border={review.border}
          />
        ))}
        <div style={{ height: '90px' }} />
      </div>
      <BottomGradientContainer>
        <Button type="primary" width="244px" rightAddon={<Icon name="FlightTakeOff" />}>
          기록하기
        </Button>
      </BottomGradientContainer>
    </StyledBeerDetailPage>
  );
};

export default BeerDetailPage;

const StyledBeerDetailPage = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  z-index: 0;

  & > .container {
    padding: 0 20px;
  }
`;

const BackgroundImage = styled.div<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  max-width: 768px;
  margin: 0 auto;
  width: 100%;
  z-index: -1;

  & > .image-container {
    position: relative;
    display: ${({ isScrolled }) =>
      isScrolled ? 'none' : 'block'}; // TODO: scroll 인터랙션 추가하며 수정 필요

    & > img {
      width: 100%;
      height: 237px;
      object-fit: cover;
    }

    & > .gradient {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 79px;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 76.88%);
    }
  }
`;

const StyledBeerDetail = styled(BeerDetail)`
  width: 100%;
  margin-top: 134px;
`;

const StyledAirPort = styled(AirPort)``;

const BeerContent = styled.p`
  ${({ theme }) => theme.fonts.Body5};
  color: ${({ theme }) => theme.color.grey1};
`;

const TasteBoxAndBadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  width: 100%;
  margin: 26px 0;
`;

const BottomGradientContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  max-width: 768px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 40.1%);
`;

const HorizontalDivider = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${({ theme }) => theme.color.whiteOpacity10};
`;

const ThisBeer = styled.p`
  ${({ theme }) => theme.fonts.SubTitle2};
  color: ${({ theme }) => theme.color.white};
  margin-right: auto;
  margin: 26px 0;
`;

const StyledBackButton = styled(BackButton)<{ isScrolled: boolean }>`
  svg {
    fill: ${(p) => (p.isScrolled ? p.theme.color.white : p.theme.color.whiteOpacity50)};
  }
`;
