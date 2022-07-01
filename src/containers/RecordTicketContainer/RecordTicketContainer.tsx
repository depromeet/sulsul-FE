import { NextPage, GetServerSideProps } from 'next';
import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import { useReward } from 'react-rewards';

import CreateImage, { CreateImageRef } from './CreateImage';

import Header from '@/components/Header';
import { BackButton, WriteButton, SaveButton, DeleteButton } from '@/components/Header/extras';
import { IRecord } from '@/apis/record';
import BeerTicket from '@/components/BeerTicket';
import BottomFloatingButtonArea from '@/components/BottomFloatingButtonArea';
import Button from '@/components/commons/Button';
import Modal from '@/components/Modal';
import { getRecord } from '@/apis';
import { useGetRecord, useDeleteRecord } from '@/queries';

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

const StyledConfetti = styled.span`
  position: fixed;
  top: 70%;
  left: 50%;
`;

export const NEW_TYPE = 'new';

const RecordTicketContainer: NextPage<RecordTicketContainerProps> = ({ record: _record }) => {
  const router = useRouter();
  const { type, id } = router.query;

  const { contents: record } = useGetRecord(Number(id), { initialData: _record });
  const { mutateAsync: deleteRecordMutation } = useDeleteRecord(Number(id));
  const createImageRef = useRef<CreateImageRef>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { reward } = useReward('rewardId', 'confetti');

  useEffect(() => {
    if (type === NEW_TYPE) {
      reward();
    }
  }, []);

  const handleDeleteRecord = async () => {
    setIsModalOpen(false);
    await deleteRecordMutation(Number(id));
    router.push('/records/my');
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <StyledRecordTicketContainer>
      <Header
        leftExtras={<>{type !== NEW_TYPE && <BackButton />}</>}
        rightExtras={
          <>
            {type !== NEW_TYPE && <DeleteButton onClick={openModal} />}
            <Link href={`/record/edit/${id}`}>
              <a>
                <WriteButton />
              </a>
            </Link>
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
      <ToastContainer />
      {type === NEW_TYPE && (
        <>
          <h2 className="complete-record-title">{'티켓 발행이 완료되었어요!'}</h2>
          <p className="complete-record-sub-title">{'친구들에게 이미지로 공유해보세요!'}</p>
          <StyledConfetti id="rewardId" />
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
      <Modal
        open={isModalOpen}
        openModal={openModal}
        closeModal={closeModal}
        buttons={
          <>
            <Button type="grey" onClick={closeModal}>
              취소
            </Button>
            <Button type="red" onClick={handleDeleteRecord}>
              삭제
            </Button>
          </>
        }
        title="기록을 삭제할까요?"
        description="한번 기록을 삭제하면 되돌릴 수 없습니다."
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
