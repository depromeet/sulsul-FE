import React from 'react';
import { NextPage, GetServerSideProps } from 'next';
import styled from '@emotion/styled';
import { RecoilRoot } from 'recoil';
import { useRouter } from 'next/router';

import RecordFirstStepContainer from './RecordFirstStepContainer';
import RecordSecondStepContainer from './RecordSecondStepContainer';
import RecordThirdStepContainer from './RecordThirdStepContainer';

import { useGetBeer } from '@/queries';
import Header from '@/components/Header';
import { BackButton } from '@/components/Header/extras';
import { IBeer, getBeer } from '@/apis';
import SwiperLayout from '@/components/layouts/SwiperLayout';
import { useGtagPageView } from '@/hooks';
import { PAGE_TITLES } from '@/constants';

interface UpsertRecordContainerProps {
  beer: IBeer;
}

const StyledUpsertRecordContainer = styled.div`
  height: 100%;

  & .record-layout {
    height: calc(100vh - 60px);
  }
`;

const UpsertRecordContainer: NextPage<UpsertRecordContainerProps> = ({ beer: _beer }) => {
  const router = useRouter();
  const { id } = router.query;
  const { contents: beer } = useGetBeer(Number(id), _beer);

  if (!beer) {
    return null;
  }

  return (
    <StyledUpsertRecordContainer>
      <Header leftExtras={<BackButton />} />
      <SwiperLayout className="record-layout">
        <RecordFirstStepContainer beerName={beer.nameKor} />
        <RecordSecondStepContainer beerName={beer.nameKor} />
        <RecordThirdStepContainer beer={beer} />
      </SwiperLayout>
    </StyledUpsertRecordContainer>
  );
};

const UpsertRecordRecoilWrapper: NextPage<UpsertRecordContainerProps> = (props) => {
  useGtagPageView(PAGE_TITLES.CREATE_RECORD);

  return (
    <RecoilRoot>
      <UpsertRecordContainer {...props} />
    </RecoilRoot>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context.query.id && typeof context.query.id === 'string' && Number(context.query.id)) {
    const { id } = context.query;
    const contents = await getBeer(Number(id));

    return { props: { beer: contents } };
  }

  return { props: {} };
};

export default UpsertRecordRecoilWrapper;
