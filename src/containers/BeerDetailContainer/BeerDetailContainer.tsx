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

      if (scrollY > 190) {
        setIsScrolled(true);
        setIsTransparent(false);
      } else if (scrollY < 190) {
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
                  title: `[비어에어] 같이 떠나요!`,
                  text: `‘${nameKor}’ 이 맥주가 궁금하신가요? 지금 바로 비어에어에서 확인해 보세요!`,
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
          <img src={country?.backgroundImageUrl} alt="" />
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

    & > img {
      width: 100%;
      height: 237px;
      opacity: ${({ isScrolled }) => (isScrolled ? 0 : 1)};
      object-fit: cover;
      transition: opacity 0.5s;
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
