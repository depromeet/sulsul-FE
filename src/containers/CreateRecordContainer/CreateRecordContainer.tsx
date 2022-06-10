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

interface CreateRecordContainerProps {
  beer: IBeer;
}

const StyledCreateRecordContainer = styled.div`
  height: 100%;

  & .record-layout {
    height: calc(100vh - 60px);
  }
`;

const CreateRecordContainer: NextPage<CreateRecordContainerProps> = ({ beer: _beer }) => {
  const router = useRouter();
  const { id } = router.query;
  const { contents: beer } = useGetBeer(Number(id), _beer);

  if (!beer) {
    return null;
  }

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
  return (
    <RecoilRoot>
      <CreateRecordContainer {...props} />
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

export default CreateRecordRecoilWrapper;
