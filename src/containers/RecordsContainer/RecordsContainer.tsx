import React from 'react';
import { NextPage } from 'next';
import styled from '@emotion/styled';

import { IRecord, IRecentlyVisitedCountry } from '@/apis';
import BottomNavigation from '@/components/BottomNavigation';
import RecordList from '@/components/RecordList';

interface RecordsContainerProps {
  records: IRecord[];
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

const RecordsContainer: NextPage<RecordsContainerProps> = ({ records, recentlyVisitedCountry }) => {
  return (
    <>
      <StyledRecordsContainer>
        <h5 className="records-title">
          <span className="slim-weight">{`최근에 `}</span>
          <span>{recentlyVisitedCountry?.countryDto.nameKor}</span>
          <span className="slim-weight">{`를 다녀오셨군요!\n`}</span>
          <span>{recentlyVisitedCountry?.countryDto.nameKor}</span>
          <span className="slim-weight">{` 여행 티켓은 총 `}</span>
          <span>{`${recentlyVisitedCountry?.count}개`}</span>
          <span className="slim-weight">{` 있어요.`}</span>
        </h5>
        <RecordList records={records} />
      </StyledRecordsContainer>
      <BottomNavigation />
    </>
  );
};

export default RecordsContainer;
