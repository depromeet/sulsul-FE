import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import BeerDetail from '@/components/BeerDetail';
import AirPort from '@/components/AirPort';
import TasteBoxAndBadge from '@/components/TasteBoxAndBadge';
import Button from '@/components/commons/Button';
import Icon from '@/components/commons/Icon';
import Review from '@/components/Review';
import Header from '@/components/Header';
import BottomFloatingButtonArea from '@/components/BottomFloatingButtonArea';
import { ShareButton, LikeToggleButton, BackButton } from '@/components/Header/extras';
import { share } from '@/utils/share';
import { useGetBeer, useGetRecordsByBeer, useGetTop3BeerFlavor } from '@/queries';

const BeerDetailContainer = () => {
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


  const [isScrolled, setIsScrolled] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

  const router = useRouter();
  const beerId = Number(router.query.id);
  const { contents: beer } = useGetBeer(beerId);
  const { beerFlavor } = useGetTop3BeerFlavor(beerId);

  const payload = {
    beerId: beerId,
    recordId: 0,
  };

  const { recordsByBeer = [] } = useGetRecordsByBeer(payload);

  if (!beer || !beerFlavor) {
    return null;
  }

  const { country, nameKor, startCountry, endCountry, content } = beer;

  return (
    <StyledBeerDetailPage>
      <Header
        leftExtras={<StyledBackButton isScrolled={isScrolled} />}
        rightExtras={
          <>
            <ShareButton
              onClick={() =>
                share({
                  title: `BEER:AiR`,
                  text: `맥주 상세정보 페이지입니다.`,
                  url: window.location.href,
                })
              }
            />
            <LikeToggleButton
              defaultIsLiking={true}
              onLike={async () => alert('좋아요')}
              onUnLike={async () => alert('좋아요 해제')}
            />
          </>
        }
        isTransparent={isTransparent}
      >
        {nameKor}
      </Header>
      <BackgroundImage isScrolled={isScrolled}>
        <div className="image-container">
          <img src={country?.imageUrl} alt="" />
          <div className="gradient" />
        </div>
      </BackgroundImage>
      <div className="container">
        <BeerDetail beerData={beer} />
        <AirPort startCountry={startCountry} endCountry={endCountry} />
        <BeerContent>{content}</BeerContent>
        <TasteBoxAndBadgeContainer>
          {beerFlavor?.map(({ content, count }) => (
            <TasteBoxAndBadge key={content} content={content} count={count} />
          ))}
        </TasteBoxAndBadgeContainer>
      </div>
      <HorizontalDivider />
      <div className="container" style={{ backgroundColor: 'black' }}>
        <ThisBeer>이 맥주는 어땠냐면,</ThisBeer>
        {recordsByBeer?.map((review) => (
          <Review review={review} key={review.id} />
        ))}
        <div style={{ height: '90px' }} />
      </div>
      <BottomFloatingButtonArea
        button={
          <Button type="primary" width="244px" rightAddon={<Icon name="FlightTakeOff" />}>
            기록하기
          </Button>
        }
      />
    </StyledBeerDetailPage>
  );
};

export default BeerDetailContainer;

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
