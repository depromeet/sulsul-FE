import { NextPage, GetServerSideProps } from 'next';
import styled from '@emotion/styled';
import { useRef } from 'react';
import { useRouter } from 'next/router';

import CreateImage, { CreateImageRef } from './CreateImage';

import Header from '@/components/Header';
import { BackButton, WriteButton, SaveButton } from '@/components/Header/extras';
import { IRecord } from '@/apis/record';
import BeerTicket from '@/components/BeerTicket';
import BottomFloatingButtonArea from '@/components/BottomFloatingButtonArea';
import Button from '@/components/commons/Button';
import { getRecord } from '@/apis/record';
import { useGetRecord } from '@/queries';

interface RecordTicketContainerProps {
  record: IRecord;
}

const StyledRecordTicketContainer = styled.div`
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
    margin-bottom: 8px;
  }

  & .completed-record-ticket {
    margin-top: 16px;
    margin-bottom: 100px;
  }
`;

export const NEW_TYPE = 'new';

const RecordTicketContainer: NextPage<RecordTicketContainerProps> = ({ record: _record }) => {
  const router = useRouter();
  const { type, id } = router.query;

  const { contents: record } = useGetRecord(Number(id), _record);
  const createImageRef = useRef<CreateImageRef>(null);

  return (
    <StyledRecordTicketContainer>
      <Header
        leftExtras={<>{type !== NEW_TYPE && <BackButton />}</>}
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
      {type === NEW_TYPE && (
        <>
          <h2 className="complete-record-title">{'티켓 발행이 완료되었어요!'}</h2>
          <p className="complete-record-sub-title">{'친구들에게 이미지로 공유해보세요!'}</p>
        </>
      )}
      {record && (
        <>
          <BeerTicket record={record} className="completed-record-ticket" />
          <CreateImage record={record} ref={createImageRef} />
        </>
      )}
      <BottomFloatingButtonArea
        withHomeButton
        button={
          <Button
            type="primary"
            width="large"
            onClick={() => router.push(`/beers/${record?.beerResponseDto.id}`)}
          >
            맥주 정보 보기
          </Button>
        }
      />
    </StyledRecordTicketContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context.query.id && typeof context.query.id === 'string' && Number(context.query.id)) {
    const { id } = context.query;
    const contents = await getRecord(Number(id));

    return { props: { beer: contents } };
  }

  return { props: {} };
};

export default RecordTicketContainer;
