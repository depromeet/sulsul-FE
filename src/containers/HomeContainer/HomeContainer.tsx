import { NextPage, GetServerSideProps } from 'next';
import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import Slider from 'react-slick';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';

import HomeSearchBar from './HomeSearchBar';

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
import LoginRequestModal from '@/components/LoginRequestModal';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  myRecordResponse?: IGetMyRecordsResponseData;
}

const HomeContainer: NextPage<HomeContainerProps> = ({ myRecordResponse: _myRecordResponse }) => {
  const user = useRecoilValue($userSession);

  const [isLoginRequestModalOpen, setIsLoginRequestModalOpen] = useState(false);

  const { contents: myRecords = [] } = useGetMyRecords(_myRecordResponse);

  useGtagPageView(PAGE_TITLES.HOME);

  const openModal = useCallback(() => {
    setIsLoginRequestModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsLoginRequestModalOpen(false);
  }, []);

  const renderRecommendButton = () => {
    const recommendButton = (
      <Button
        type="secondary"
        line
        rightAddon={<Icon name="Airplane" color="yellow" />}
        iconMargin={14}
        width="large"
        {...(!user ? { onClick: openModal } : {})}
      >
        {'?????? ????????? ?????????????'}
      </Button>
    );

    return user ? (
      <Link href="/beer/recommend-and-liked">
        <a>{recommendButton}</a>
      </Link>
    ) : (
      recommendButton
    );
  };

  return (
    <>
      <StyledHomeContainer>
        <header>
          <Icon name="Logo" width="80px" height="17.11px" />
        </header>
        <div className="home-welcome-wrapper">
          <Icon name={`Level${user?.memberLevelResponseDto.tier || 1}` as IconNameType} size={64} />
          <p className="home-welcome-message">
            {!user
              ? `??????????????? ???????????????\n??????????????????`
              : `${user?.nickname}???,\n?????? ?????? ????????? ????????????????`}
          </p>
        </div>
        <div className="home-search-wrapper">
          {!user ? <HomeSearchBar onClick={openModal} /> : <HomeSearchBar href="/search" />}
        </div>
        {myRecords.length > 0 ? (
          <Slider
            arrows={false}
            infinite={false}
            slidesToShow={1}
            slidesToScroll={1}
            variableWidth
            swipeToSlide
            className="home-record-slider"
          >
            {myRecords.map((record) => (
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
            alt="????????? ?????? ??????"
          />
        )}
        <BottomFloatingButtonArea
          className="record-floating-area"
          bottomOffset={64}
          button={renderRecommendButton()}
        />
        <BottomNavigation />
      </StyledHomeContainer>
      <LoginRequestModal
        isOpen={isLoginRequestModalOpen}
        onClose={closeModal}
        disabledDimClick
        withCloseButton
      />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    if (!hasAuthHeader(context)) {
      return { props: {} };
    }

    const myRecordResponse = await getMyRecords();

    return { props: { myRecordResponse } };
  } catch (error) {
    return { props: {} };
  }
};

export default HomeContainer;
