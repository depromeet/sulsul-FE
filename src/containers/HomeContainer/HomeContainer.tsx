import Head from 'next/head';
import { NextPage, GetServerSideProps } from 'next';
import React from 'react';
import styled from '@emotion/styled';
import Slider from 'react-slick';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';

import HomeSearchBar from './HomeSearchBar';

import hasAuth from '@/hocs/hasAuth';
import { hasAuthHeader } from '@/utils/auth';
import { $userSession } from '@/recoil/atoms';
import { useGtagPageView } from '@/hooks';
import { IGetMyRecordsResponseData, getMyRecords } from '@/apis';
import Icon, { IconNameType } from '@/components/commons/Icon';
import BottomNavigation from '@/components/BottomNavigation';
import BottomFloatingButtonArea from '@/components/BottomFloatingButtonArea';
import Button from '@/components/commons/Button';
import { useGetMyRecords } from '@/queries';
import HomeBeerTicket from '@/components/HomeBeerTicket';
import { PAGE_TITLES } from '@/constants';

const StyledHomeContainer = styled.div`
  & > header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
  }

  & > .home-welcome-wrapper {
    display: flex;
    align-items: flex-end;
    padding: 15px 27px 21px 27px;

    & > .home-welcome-message {
      ${({ theme }) => theme.fonts.H7};
      white-space: pre-wrap;
      margin-left: 16px;
    }
  }

  & .home-search-wrapper {
    padding: 0 20px 28px 20px;
  }

  & .home-record-item {
    padding: 0 15px;
  }

  & .home-record-slider {
    padding-left: calc(50vw - 140px);
    overflow: hidden;

    & .slick-list {
      overflow: visible;
    }

    @media (min-width: 768px) {
      padding-left: 244px;
    }
  }
`;

interface HomeContainerProps {
  myRecordResponse: IGetMyRecordsResponseData;
}

const HomeContainer: NextPage<HomeContainerProps> = ({ myRecordResponse: _myRecordResponse }) => {
  const user = useRecoilValue($userSession);
  const { data } = useGetMyRecords(_myRecordResponse);

  const [myRecords] = data?.pages || [];

  useGtagPageView(PAGE_TITLES.HOME);

  return (
    <StyledHomeContainer>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <header>
        <Icon name="Logo" width="80px" height="17.11px" />
      </header>
      <div className="home-welcome-wrapper">
        <Icon name={`Level${user?.memberLevelResponseDto.tier || 1}` as IconNameType} size={64} />
        <p className="home-welcome-message">{`${user?.nickname}님,\n이번 맥주 여행은 어떠셨나요?`}</p>
      </div>
      <div className="home-search-wrapper">
        <Link href="/search">
          <a>
            <HomeSearchBar />
          </a>
        </Link>
      </div>
      {myRecords.contents?.length > 0 ? (
        <Slider
          arrows={false}
          infinite={false}
          slidesToShow={1}
          slidesToScroll={1}
          variableWidth
          swipeToSlide
          className="home-record-slider"
        >
          {myRecords?.contents?.map((record) => (
            <div key={record.id} className="home-record-item">
              {record && <HomeBeerTicket record={record} type="stamp" className="beer-ticket" />}
            </div>
          ))}
        </Slider>
      ) : (
        <img
          src="images/no-record-ticket.png"
          width="250px"
          height="auto"
          style={{ margin: '0 auto' }}
          alt="기록된 티켓 없음"
        />
      )}
      <BottomFloatingButtonArea
        className="record-floating-area"
        bottomOffset={64}
        button={
          <Link href="/beer/recommend-and-liked">
            <a>
              <Button
                type="secondary"
                line
                rightAddon={<Icon name="Airplane" color="yellow" />}
                iconMargin={14}
                width="large"
              >
                {'이런 맥주는 어떠세요?'}
              </Button>
            </a>
          </Link>
        }
      />
      <BottomNavigation />
    </StyledHomeContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (!hasAuthHeader(context)) {
    return { props: {} };
  }
  const myRecordResponse = await getMyRecords();

  return { props: { myRecordResponse } };
};

export default HomeContainer;
