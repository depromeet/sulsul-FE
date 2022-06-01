import { NextPage, GetServerSideProps } from 'next';
import styled from '@emotion/styled';

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

  & > h2 {
    ${({ theme }) => theme.fonts.H2}
    text-align: center;
    margin-bottom: 10px;
  }

  & p.body-1 {
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
  return (
    <StyledCompletedRecordContainer>
      <Header
        leftExtras={<BackButton />}
        rightExtras={
          <>
            <WriteButton />
            <SaveButton />
          </>
        }
      />
      <h2>{'티켓 발행이 완료되었어요!'}</h2>
      <p className="body-1">{'친구들에게 이미지로 공유해보세요!'}</p>
      <BeerTicket record={record} className="completed-record-ticket" />
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
