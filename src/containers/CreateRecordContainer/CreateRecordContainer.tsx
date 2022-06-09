import React from 'react';
import { NextPage, GetServerSideProps } from 'next';
import styled from '@emotion/styled';
import { RecoilRoot } from 'recoil';

import RecordFirstStepContainer from './RecordFirstStepContainer';
import RecordSecondStepContainer from './RecordSecondStepContainer';
import RecordThirdStepContainer from './RecordThirdStepContainer';

import { Beers } from '@/constants/Beers';
import Header from '@/components/Header';
import { BackButton } from '@/components/Header/extras';
import { IBeer } from '@/apis';
import SwiperLayout from '@/components/layouts/SwiperLayout';
import { useGtagPageView } from '@/hooks';

interface CreateRecordContainerProps {
  beer: IBeer;
}

const StyledCreateRecordContainer = styled.div`
  height: 100%;

  & .record-layout {
    height: calc(100vh - 60px);
  }
`;

const CreateRecordContainer: NextPage<CreateRecordContainerProps> = ({ beer }) => {
  return (
    <StyledCreateRecordContainer>
      <Header leftExtras={<BackButton />} />
      <SwiperLayout className="record-layout">
        <RecordFirstStepContainer beerName={beer.nameKor} />
        <RecordSecondStepContainer beerName={beer.nameKor} />
        <RecordThirdStepContainer beer={beer} />
      </SwiperLayout>
    </StyledCreateRecordContainer>
  );
};

const CreateRecordRecoilWrapper: NextPage<CreateRecordContainerProps> = (props) => {
  useGtagPageView('기록하기');

  return (
    <RecoilRoot>
      <CreateRecordContainer {...props} />
    </RecoilRoot>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      // TODO: 추후 api 연결
      beer: Beers[1],
    },
  };
};

export default CreateRecordRecoilWrapper;
