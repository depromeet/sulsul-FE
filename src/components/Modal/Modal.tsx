import styled from '@emotion/styled';
import React, { ReactNode } from 'react';

import ModalLayout from '@/components/ModalLayout';
import Icon from '@/components/commons/Icon';

interface ModalProps {
  openModal?: () => void;
  closeModal?: () => void;
  open: boolean;
  setOpen?: () => void;
  buttons?: ReactNode;
  header?: string;
  title?: string;
  description?: string | ReactNode;
  withCloseButton?: boolean;
  noMoreSee?: boolean;
}

const Modal = (props: ModalProps) => {
  const {
    openModal,
    closeModal,
    open,
    setOpen,
    buttons,
    header,
    title,
    description,
    withCloseButton,
    noMoreSee,
  } = props;

  return (
    <ModalLayout open={open} onClose={closeModal}>
      <StyledModal open={open}>
        <Header>
          {withCloseButton ? (
            <Icon name="Close" size={24} onClick={closeModal} style={{ cursor: 'pointer' }} />
          ) : (
            <Icon name="Close" size={24} color={'white'} />
          )}
          {header}
          <Icon name="Close" size={24} color={'white'} />
        </Header>
        {title && <Title>{title}</Title>}
        {description && <Description>{description}</Description>}
        {buttons && <ButtonContainer>{buttons}</ButtonContainer>}
        {noMoreSee && <NoMoreSee onClick={closeModal}>다시 보지 않기</NoMoreSee>}
      </StyledModal>
    </ModalLayout>
  );
};

export default Modal;

const StyledModal = styled.div<{ open: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 76px);
  padding: 16px 16px 20px 16px;
  border-radius: 12px;
  background-color: ${(p) => p.theme.color.white};

  ${(p) => !p.open && `display:none;`}

  > p {
    height: 3rem;
  }
`;

const Header = styled.div`
  width: 100%;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #323232;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.p`
  width: 100%;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #323232;
`;

const Description = styled.p`
  width: 100%;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: ${({ theme }) => theme.color.grey4};
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 13px;
  margin-bottom: 10px;
`;

const NoMoreSee = styled.div`
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  border-bottom: 1px solid #c7c7c7;
  color: ${({ theme }) => theme.color.grey3};
  height: fit-content;
  margin-top: 10px;
  cursor: pointer;
`;
