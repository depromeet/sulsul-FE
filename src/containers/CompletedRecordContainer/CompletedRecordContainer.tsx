import { NextPage, GetServerSideProps } from 'next';
import styled from '@emotion/styled';
import { useRef } from 'react';

import CreateImage, { CreateImageRef } from './CreateImage';

import Header from '@/components/Header';
import { BackButton, WriteButton, SaveButton } from '@/components/Header/extras';
import { IRecord } from '@/apis/record';
import BeerTicket from '@/components/BeerTicket';
import BottomFloatingButtonArea from '@/components/BottomFloatingButtonArea';
import Button from '@/components/commons/Button';

interface CompletedRecordContainerProps {
  record: IRecord;
}

const StyledCompletedRecordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & .complete-record-title {
    ${({ theme }) => theme.fonts.H2}
    text-align: center;
    margin-bottom: 10px;
  }

  & .complete-record-sub-title {
    ${({ theme }) => theme.fonts.Body2}
    color: ${({ theme }) => theme.semanticColor.secondary};
    text-align: center;
    margin-bottom: 24px;
  }

  & .completed-record-ticket {
    margin-bottom: 100px;
  }
`;

const CompletedRecordContainer: NextPage<CompletedRecordContainerProps> = ({ record }) => {
  const createImageRef = useRef<CreateImageRef>(null);

  return (
    <StyledCompletedRecordContainer>
      <Header
        leftExtras={<BackButton />}
        rightExtras={
          <>
            <WriteButton />
            <SaveButton
              onClick={async () => {
                if (createImageRef.current) {
                  await createImageRef.current.create();
                }
              }}
            />
          </>
        }
      />
      <h2 className="complete-record-title">{'티켓 발행이 완료되었어요!'}</h2>
      <p className="complete-record-sub-title">{'친구들에게 이미지로 공유해보세요!'}</p>
      <BeerTicket record={record} className="completed-record-ticket" />
      <CreateImage record={record} ref={createImageRef} />
      <BottomFloatingButtonArea
        withHomeButton
        button={
          <Button type="primary" width="large">
            맥주 정보 보기
          </Button>
        }
      />
    </StyledCompletedRecordContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      // TODO: 추후 api 연결
    },
  };
};

export default CompletedRecordContainer;
