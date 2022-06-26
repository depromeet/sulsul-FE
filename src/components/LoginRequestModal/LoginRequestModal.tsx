import React from 'react';
import { useRouter } from 'next/router';

import Modal from '../Modal';

import Button from '@/components/commons/Button';

interface LoginRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  disabledDimClick?: boolean;
  withCloseButton?: boolean;
}

const LoginRequestModal: React.FC<LoginRequestModalProps> = ({
  isOpen,
  onClose,
  disabledDimClick,
  withCloseButton,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.replace('/login');
  };

  return (
    <Modal
      open={isOpen}
      closeModal={onClose}
      title="이용하려면 로그인이 필요합니다."
      description="계정 등록 후 이용해주세요."
      buttons={
        <Button type="primary" width="large" onClick={handleClick}>
          {'로그인 하러가기'}
        </Button>
      }
      disabledDimClick={disabledDimClick}
      withCloseButton={withCloseButton}
    />
  );
};

export default LoginRequestModal;
