import React from 'react';
import { NextPage, GetServerSideProps } from 'next';
import styled from '@emotion/styled';
import { RecoilRoot } from 'recoil';
import { useRouter } from 'next/router';

import RecordFirstStepContainer from './RecordFirstStepContainer';
import RecordSecondStepContainer from './RecordSecondStepContainer';
import RecordThirdStepContainer from './RecordThirdStepContainer';

import { useGetBeer, useGetRecord } from '@/queries';
import Header, { HEADER_HEIGHT } from '@/components/Header';
import { BackButton } from '@/components/Header/extras';
import { IBeer, getBeer, IRecord, getRecord } from '@/apis';
import SwiperLayout from '@/components/layouts/SwiperLayout';
import { useGtagPageView } from '@/hooks';
import { PAGE_TITLES } from '@/constants';

interface UpsertRecordContainerProps {
  beer: IBeer;
  record?: IRecord;
}

const StyledUpsertRecordContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const StyledSwiperLayout = styled(SwiperLayout)`
  height: ${`calc(100% - ${HEADER_HEIGHT}px)`};
`;

const UpsertRecordContainer: NextPage<UpsertRecordContainerProps> = ({
  beer: _beer,
  record: _record,
}) => {
  const router = useRouter();
  const { beerId, recordId } = router.query;

  const { contents: beer } = useGetBeer(_record?.beerResponseDto?.id || Number(beerId), _beer);
  const { contents: record } = useGetRecord(Number(recordId), {
    initialData: _record,
    enabled: !!recordId,
  });

  if (!beer) {
    return null;
  }

  return (
    <StyledUpsertRecordContainer>
      <Header leftExtras={<BackButton />} />
      <StyledSwiperLayout>
        <RecordFirstStepContainer beerName={beer.nameKor} defaultFeelValue={record?.feel} />
        <RecordSecondStepContainer
          beerName={beer.nameKor}
          defaultFlavorValue={record?.flavorDtos}
        />
        <RecordThirdStepContainer beer={beer} record={record} />
      </StyledSwiperLayout>
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
  const { beerId, recordId } = context.query;
  const id = recordId || beerId;

  if (id && typeof id === 'string' && Number(id)) {
    if (recordId) {
      const record = await getRecord(Number(id));
      const beer = await getBeer(record.beerResponseDto.id);

      return { props: { beer, record } };
    }

    const beer = await getBeer(Number(id));

    return { props: { beer } };
  }

  return { props: {} };
};

export default UpsertRecordRecoilWrapper;
