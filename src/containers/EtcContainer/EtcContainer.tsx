import styled from '@emotion/styled';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useQueryClient } from 'react-query';

import Header, { HEADER_HEIGHT } from '@/components/Header';
import Modal from '@/components/Modal';
import Button from '@/components/commons/Button';
import { BackButton } from '@/components/Header/extras';
import { BASE_URL } from '@/configs/axios';
import { useDeleteUser } from '@/queries';

const EtcContainer = () => {
  const queryClient = useQueryClient();

  const router = useRouter();

  const { mutateAsync: deleteUserMutation } = useDeleteUser();

  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isWithdrawalModalOpen, setIsWithdrawalModalOpen] = useState(false);

  const openLogoutModal = () => setIsLogoutModalOpen(true);
  const closeLogoutModal = () => {
    queryClient.clear();
    router.push(`${BASE_URL}/logout`);
  };
  const openWithdrawalModal = () => setIsWithdrawalModalOpen(true);
  const closeWithdrawalModal = async () => {
    setIsWithdrawalModalOpen(false);
    try {
      await deleteUserMutation();
      alert('회원탈퇴 되었습니다');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header leftExtras={<BackButton />}>기타</Header>
      <ListRowContainer>
        <ListRow>
          <a href="mailto:beerair.official@gmail.com" target="_blank" rel="noreferrer">
            문의하기
          </a>
        </ListRow>
        <ListRow>
          <Link href="/profile/terms" passHref>
            <a>서비스 정책 약관</a>
          </Link>
        </ListRow>
        <ListRow>
          <Link href="/profile/privacy-policy" passHref>
            <a>개인정보 처리방침</a>
          </Link>
        </ListRow>
        <ListRow>
          <Link href="/profile/team" passHref>
            <a>팀원 소개</a>
          </Link>
        </ListRow>
        <ListRow>
          <a onClick={openLogoutModal}>로그아웃</a>
        </ListRow>
        <Withdrawal>
          <a onClick={openWithdrawalModal}>회원탈퇴</a>
        </Withdrawal>
      </ListRowContainer>
      {isLogoutModalOpen && (
        <Modal
          open={isLogoutModalOpen}
          openModal={openLogoutModal}
          closeModal={closeLogoutModal}
          buttons={
            <>
              <Button type="grey" onClick={closeLogoutModal}>
                취소
              </Button>
              <Button type="primary" onClick={closeLogoutModal}>
                확인
              </Button>
            </>
          }
          title="로그아웃 하시겠어요?"
        />
      )}
      {isWithdrawalModalOpen && (
        <Modal
          open={isWithdrawalModalOpen}
          openModal={openWithdrawalModal}
          closeModal={closeWithdrawalModal}
          buttons={
            <>
              <Button type="grey" onClick={closeWithdrawalModal}>
                취소
              </Button>
              <Button type="red" onClick={closeWithdrawalModal}>
                확인
              </Button>
            </>
          }
          title="정말 회원 탈퇴 하시겠어요?"
          description="회원 탈퇴 시 저장된 모든 정보가 삭제됩니다."
        />
      )}
    </>
  );
};

export default EtcContainer;

const ListRowContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - ${HEADER_HEIGHT}px);
  padding: 0 20px;
`;
const ListRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 58px;
  border-bottom: 1px solid ${({ theme }) => theme.color.whiteOpacity35};

  a {
    ${({ theme }) => theme.fonts.SubTitle4};
    color: ${({ theme }) => theme.color.white};
    margin-left: 10px;
    cursor: pointer;
  }
`;

const Withdrawal = styled(ListRow)`
  border: none;
  margin-top: auto;
  a {
    ${({ theme }) => theme.fonts.SubTitle4};
    color: ${({ theme }) => theme.color.whiteOpacity50};
  }
`;
