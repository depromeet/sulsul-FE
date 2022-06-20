import React from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import Button from '@/components/commons/Button';
import ModalLayout from '@/components/layouts/ModalLayout';

interface LoginRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const StyledLoginRequestModal = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  height: 200px;
  padding: 16px 16px 20px 16px;
  border-radius: 12px;

  & p.login-modal-title,
  p.login-modal-description {
    ${({ theme }) => theme.fonts.Body3};
    color: ${({ theme }) => theme.color.grey4};

    &.login-modal-title {
      color: ${({ theme }) => theme.color.grey5};
    }
  }

  & .login-modal-content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 44px;
  }
`;

const LoginRequestModal: React.FC<LoginRequestModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();

  const handleClick = () => {
    router.replace('/login');
  };

  return (
    <ModalLayout open={isOpen} onClose={onClose}>
      <StyledLoginRequestModal>
        <div className="login-modal-content">
          <p className="login-modal-title">{'이용하려면 로그인이 필요합니다.'}</p>
          <p className="login-modal-description">{'계정 등록 후 이용해주세요'}</p>
        </div>
        <Button type="primary" width="large" onClick={handleClick}>
          {'로그인 하러가기'}
        </Button>
      </StyledLoginRequestModal>
    </ModalLayout>
  );
};

export default LoginRequestModal;
