import React from 'react';
import { NextPage } from 'next';
import styled from '@emotion/styled';

import RecordFirstStepContainer from './RecordFirstStepContainer';
import RecordSecondStepContainer from './RecordSecondStepContainer';
import RecordThirdStepContainer from './RecordThirdStepContainer';

import { Beer } from '@/types/Beer';
import Header from '@/components/Header';
import { BackButton } from '@/components/Header/extras';
import SwiperLayout from '@/components/SwiperLayout';

interface CreateRecordContainerProps {
  beer: Beer;
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
        <RecordFirstStepContainer beerName={beer.name!} onSubmit={() => null} />
        <RecordSecondStepContainer beerName={beer.name!} onSubmit={() => null} />
        <RecordThirdStepContainer beer={beer} onSubmit={() => null} />
      </SwiperLayout>
    </StyledCreateRecordContainer>
  );
};

export default CreateRecordContainer;
