import styled from '@emotion/styled';

import ModalLayout from '@/components/layouts/ModalLayout';
import Icon from '@/components/commons/Icon';
import Button from '@/components/commons/Button';

interface Props {
  isModifyModalOpen: boolean;
  openModifyModal: () => void;
  closeModifyModal: () => void;
  onSubmit: () => void;
}

const ProfileModifyModal = ({
  isModifyModalOpen,
  openModifyModal,
  closeModifyModal,
  onSubmit,
}: Props) => {
  return (
    <ModalLayout open={isModifyModalOpen} onClose={closeModifyModal}>
      <StyledModal open={isModifyModalOpen}>
        <Header>
          <Icon name="Close" size={24} onClick={closeModifyModal} style={{ cursor: 'pointer' }} />
          프로필 수정하기
          <Icon name="Close" size={24} color={'white'} />
        </Header>
        <InputContainer onSubmit={onSubmit}>
          <Input placeholder="닉네임 입력" />
          <p>최대 15글자까지 입력할 수 있습니다</p>
        </InputContainer>
        <Button type="primary" width="large" onClick={closeModifyModal}>
          완료
        </Button>
      </StyledModal>
    </ModalLayout>
  );
};

export default ProfileModifyModal;

const StyledModal = styled.div<{ open: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  height: 260px;
  padding: 16px 16px 20px 16px;
  border-radius: 12px;
  background-color: ${(p) => p.theme.color.white};

  ${(p) => !p.open && `display:none;`}
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

const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    ${({ theme }) => theme.fonts.Body1};
    color: ${({ theme }) => theme.color.grey3};
  }
`;

const Input = styled.input`
  width: 240px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.grey2};
  text-align: center;
  margin-bottom: 12px;
  padding: 10px 0;

  &::placeholder {
    ${({ theme }) => theme.fonts.SubTitle2};
    color: ${({ theme }) => theme.color.grey4};
  }
`;
