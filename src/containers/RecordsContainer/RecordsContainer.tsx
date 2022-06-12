import React, { useMemo } from 'react';
import { NextPage, GetServerSideProps } from 'next';
import styled from '@emotion/styled';
import { useInView } from 'react-intersection-observer';

import {
  IRecentlyVisitedCountry,
  getRecentlyVisitedCountry,
  getMyRecords,
  IGetMyRecordsResponseData,
  IRecord,
} from '@/apis';
import BottomNavigation from '@/components/BottomNavigation';
import RecordList from '@/components/RecordList';
import { useGetMyRecords, useGetRecentlyVisitedCountry } from '@/queries';

interface RecordsContainerProps {
  myRecordResponse: IGetMyRecordsResponseData;
  recentlyVisitedCountry: IRecentlyVisitedCountry;
}

const StyledRecordsContainer = styled.section`
  padding: 20px;

  & > h5.records-title {
    white-space: pre-wrap;
    margin-bottom: 38px;
    ${({ theme }) => theme.fonts.H5};

    & > .slim-weight {
      font-weight: 400;
    }
  }
`;

const RecordsContainer: NextPage<RecordsContainerProps> = ({
  myRecordResponse: _myRecordResponse,
  recentlyVisitedCountry: _recentlyVisitedCountry,
}) => {
  const {
    contents: myRecordResponses,
    fetchNextPage,
    isLoading,
  } = useGetMyRecords(_myRecordResponse);
  const { contents: recentlyVisitedCountry } =
    useGetRecentlyVisitedCountry(_recentlyVisitedCountry);

  const { ref } = useInView({
    onChange: (inView) => {
      if (!myRecordResponses) {
        return;
      }

      const { nextCursor, hasNext } = myRecordResponses.pages[myRecordResponses.pages.length - 1];

      if (inView && nextCursor && hasNext && !isLoading) {
        fetchNextPage({ pageParam: nextCursor });
      }
    },
    triggerOnce: true,
  });

  const records = useMemo(() => {
    return (
      myRecordResponses?.pages.reduce<IRecord[]>(
        (_records, page) => [..._records, ...page.contents],
        [],
      ) || []
    );
  }, [myRecordResponses?.pages]);

  return (
    <>
      <StyledRecordsContainer>
        <h5 className="records-title">
          <span className="slim-weight">{`최근에 `}</span>
          <span>{recentlyVisitedCountry?.nameKor}</span>
          <span className="slim-weight">{`를 다녀오셨군요!\n`}</span>
          <span>{recentlyVisitedCountry?.nameKor}</span>
          <span className="slim-weight">{` 여행 티켓은 총 `}</span>
          <span>{`${recentlyVisitedCountry?.count}개`}</span>
          <span className="slim-weight">{` 있어요.`}</span>
        </h5>

        <RecordList records={records} lastItemRef={ref} />
      </StyledRecordsContainer>
      <BottomNavigation />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const myRecordResponse = await getMyRecords();
  const recentlyVisitedCountry = await getRecentlyVisitedCountry();

  return { props: { myRecordResponse, recentlyVisitedCountry } };
};

export default RecordsContainer;
