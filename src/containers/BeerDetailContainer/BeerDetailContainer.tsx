import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps, NextPage } from 'next';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoadingIcon from '@/components/LoadingIcon';
import BeerDetail from '@/components/BeerDetail';
import AirPort from '@/components/AirPort';
import Top3BeerFlavorList from '@/components/Top3BeerFlavorList';
import Button from '@/components/commons/Button';
import Icon from '@/components/commons/Icon';
import ReviewList from '@/components/ReviewList';
import Header from '@/components/Header';
import BottomFloatingButtonArea from '@/components/BottomFloatingButtonArea';
import { ShareButton, LikeToggleButton, BackButton } from '@/components/Header/extras';
import { share } from '@/utils/share';
import {
  useGetBeer,
  useGetRecordsByBeer,
  useGetTop3BeerFlavor,
  useLikeBeer,
  useUnLikeBeer,
} from '@/queries';
import {
  IBeer,
  IGetRecordsByBeer,
  ITop3BeerFlavor,
  getBeer,
  getTop3BeerFlavor,
  getRecordsByBeer,
} from '@/apis';
import { useGtagPageView } from '@/hooks';
import { PAGE_TITLES } from '@/constants';
import { $isLikeBeer } from '@/recoil/atoms';

interface BeerDetailContainerProps {
  beerResponse: IBeer;
  top3BeerFlavor: ITop3BeerFlavor[];
  recordsByBeer: IGetRecordsByBeer;
}

const BeerDetailContainer: NextPage<BeerDetailContainerProps> = ({
  beerResponse: initialBeerResponse,
  top3BeerFlavor: initialTop3BeerFlavor,
  recordsByBeer: initialRecordsByBeer,
}) => {
  useGtagPageView(PAGE_TITLES.BEER_DETAIL);

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

  const { mutateAsync: likeBeerMutation } = useLikeBeer();
  const { mutateAsync: UnLikeBeerMutation } = useUnLikeBeer();

  const handleLikeBeer = async () => {
    await likeBeerMutation(beerId);
  };

  const handleUnLikeBeer = async () => {
    await UnLikeBeerMutation(beerId);
  };

  const { contents: beer } = useGetBeer(beerId, initialBeerResponse);
  const { contents: beerFlavor } = useGetTop3BeerFlavor(beerId, initialTop3BeerFlavor);

  const {
    contents: recordsByBeer,
    pageInfo,
    fetchNextPage,
    isLoading,
  } = useGetRecordsByBeer({ beerId }, initialRecordsByBeer);

  const { ref } = useInView({
    onChange: (inView) => {
      const { nextCursor, hasNext } = pageInfo;
      const auth = undefined;

      if (inView && nextCursor && hasNext && !isLoading) {
        fetchNextPage({ pageParam: { payload: { beerId: beerId, recordId: nextCursor }, auth } });
      }
    },
    triggerOnce: true,
  });

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
              defaultIsLiking={false}
              onLike={handleLikeBeer}
              onUnLike={handleUnLikeBeer}
            />
          </>
        }
        isTransparent={isTransparent}
      >
        {nameKor}
      </Header>
      <ToastContainer />
      <BackgroundImage isScrolled={isScrolled}>
        <img src={country?.backgroundImageUrl} alt={country?.nameKor} />
      </BackgroundImage>
      <section className="container">
        <BeerDetail beerData={beer} />
        <AirPort startCountry={startCountry} endCountry={endCountry} />
        <BeerContent>{content}</BeerContent>
        <Top3BeerFlavorList beerFlavor={beerFlavor} />
      </section>
      <HorizontalDivider />
      <ReviewList recordsByBeer={recordsByBeer} lastItemRef={ref} />
      {pageInfo.hasNext && <LoadingIcon ref={ref} />}
      <BottomFloatingButtonArea
        button={
          <Link href={`/record/create/${beerId}`} passHref>
            <Button type="primary" width="244px" rightAddon={<Icon name="FlightTakeOff" />}>
              기록하기
            </Button>
          </Link>
        }
      />
    </StyledBeerDetailPage>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context.query.id && typeof context.query.id === 'string' && Number(context.query.id)) {
    const { id } = context.query;

    const beerResponse = await getBeer(Number(id));
    const top3BeerFlavor = await getTop3BeerFlavor(Number(id));
    const recordsByBeer = await getRecordsByBeer({
      pageParam: { payload: { beerId: Number(id) }, auth: undefined },
    } as any);

    return { props: { beerResponse, top3BeerFlavor, recordsByBeer } };
  }

  return { props: {} };
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

  & > img {
    width: 100%;
    height: 237px;
    opacity: ${({ isScrolled }) => (isScrolled ? 0 : 1)};
    object-fit: cover;
    transition: opacity 0.5s;
  }
`;

const BeerContent = styled.p`
  ${({ theme }) => theme.fonts.Body5};
  color: ${({ theme }) => theme.color.grey1};
`;

const HorizontalDivider = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${({ theme }) => theme.color.whiteOpacity10};
`;

const StyledBackButton = styled(BackButton)<{ isScrolled: boolean }>`
  svg {
    fill: ${(p) => (p.isScrolled ? p.theme.color.white : p.theme.color.whiteOpacity50)};
  }
`;
