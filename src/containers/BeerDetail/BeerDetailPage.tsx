import styled from '@emotion/styled';

import BeerDetail, { BeerDetailProps } from '@/components/BeerDetail';
import AirPort, { AirPortProps } from '@/components/AirPort';
import TasteBoxAndBadge, { TasteBoxAndBadgeProps } from '@/components/TasteBoxAndBadge';
import Button from '@/components/commons/Button';
import Review, { ReviewProps } from '@/components/Review';
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
  const {
    beerDetail: { url, isCompact, beer },
    backgroundImageUrl,
    airPort: { departureKor, departureEng, destinationKor, destinationEng },
    beerContent,
  } = props;
  return (
    <StyledBeerDetailPage>
      <BackgroundImage>
        <div className="image-container">
          <img src={backgroundImageUrl} alt="" />
          <div className="gradient" />
        </div>
      </BackgroundImage>
      <div className="container">
        <StyledBeerDetail beer={beer} url="" />
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
      <div className="container">
        <ThisBeer>이 맥주는 말이지</ThisBeer>
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
      </div>
      <BottomGradientContainer>
        <Button type="primary" width="244px">
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
  background-color: black;

  & > .container {
    padding: 0 20px;
    z-index: 2;
  }
`;

const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;

  & > .image-container {
    position: relative;

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
      z-index: 1;
    }
  }
`;

const Container = styled.div`
  padding: 0 20px;
`;

const StyledBeerDetail = styled(BeerDetail)`
  width: 100%;
  z-index: 2;
  margin-top: 134px;
`;

const StyledAirPort = styled(AirPort)``;

const BeerContent = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #dddddd;
  margin-bottom: 22px;
  padding: 0 10px;
`;

const TasteBoxAndBadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  width: 100%;
`;

const BottomGradientContainer = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 118px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 48.75%);
  z-index: 3;
`;

const HorizontalDivider = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  margin: 26px 0;
`;

const ThisBeer = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin-right: auto;
  margin-bottom: 28px;
`;
