import styled from '@emotion/styled';

import BeerDetail, { BeerDetailProps } from '@/components/BeerDetail';
import AirPort, { AirPortProps } from '@/components/AirPort';
import TasteBoxAndBadge from '@/components/TasteBoxAndBadge';
import Button from '@/components/commons/Button';
import Review from '@/components/Review';

interface Props {
  beer: BeerDetailProps;
  backgroundImageUrl?: string;
  airPort: AirPortProps;
}

const BeerDetailPage = (props: Props) => {
  const {
    beer,
    backgroundImageUrl,
    airPort: { departureKor, departureEng, destinationKor, destinationEng },
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
        <BeerContent>
          ‘제주 위트 에일’은 제주 청정 재료인 유기농 제주 감귤 껍질을 사용해 은은한 감귤 향의 산뜻한
          끝 맛이 특징이다. 독일산 보리 맥아와 밀 맥아를 함께 사용해 부드러운 음용감으로 에일 맥주
          입문자들도 편하게 즐길 수 있다.
        </BeerContent>
        <TasteBoxAndBadgeContainer>
          <TasteBoxAndBadge text="맛있어요" likeCount={10} />
          <TasteBoxAndBadge text="맛있어요" likeCount={10} />
          <TasteBoxAndBadge text="맛있어요" likeCount={10} />
        </TasteBoxAndBadgeContainer>
      </div>
      <HorizontalDivider />
      <div className="container">
        <ThisBeer>이 맥주는 말이지</ThisBeer>
        <Review
          feel={5}
          me
          userName="호딩"
          reviewCount={2}
          content="날씨도 좋은데 놀러가지도 못하고..! 기분 내려고 한 잔 한다. 이순간 만큼은 제주다 이거야~"
          date="1주전"
          tags={['목넘김이 부드러워요', '과일향이 나요', '깔끔해요', '어쩌구저쩌구']}
          border
        />
        <Review
          feel={1}
          userName="만만수"
          reviewCount={3}
          content="날씨도 좋은데 놀러가지도 못하고..! 기분 내려고 한 잔 한다. 이순간 만큼은 제주다 이거야~"
          date="1주전"
          tags={['목넘김이 부드러워요', '과일향이 나요', '깔끔해요']}
          border
        />
        <Review
          feel={3}
          userName="호딩"
          reviewCount={2}
          content="날씨도 좋은데 놀러가지도 못하고..! 기분 내려고 한 잔 한다. 이순간 만큼은 제주다 이거야~"
          date="1주전"
          tags={['목넘김이 부드러워요', '과일향이 나요', '깔끔해요']}
          border
        />
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
