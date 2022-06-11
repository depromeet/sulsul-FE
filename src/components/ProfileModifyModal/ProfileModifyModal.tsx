import styled from '@emotion/styled';
import { ChangeEvent, useState } from 'react';

import ModalLayout from '@/components/layouts/ModalLayout';
import Icon from '@/components/commons/Icon';
import Button from '@/components/commons/Button';

interface Props {
  isModifyModalOpen: boolean;
  openModifyModal: () => void;
  closeModifyModal: () => void;
  onSubmit: () => void;
}

const ProfileModifyModal = ({ isModifyModalOpen, closeModifyModal, onSubmit }: Props) => {
  const [nickname, setNickname] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (nickname.length > 15) return;

    setNickname(e.target.value);
  };

  const handleComplete = () => [
    closeModifyModal(),
    /** @todo api 호출: 유저 닉네임 업데이트 */
  ];

  return (
    <ModalLayout open={isModifyModalOpen} onClose={closeModifyModal}>
      <StyledModal open={isModifyModalOpen}>
        <Header>
          <Icon name="Close" size={24} onClick={closeModifyModal} style={{ cursor: 'pointer' }} />
          프로필 수정하기
          <Icon name="Close" size={24} color={'white'} />
        </Header>
        <InputContainer onSubmit={onSubmit}>
          <StyledInput
            id="nickname"
            type="text"
            value={nickname}
            onChange={handleInputChange}
            placeholder="닉네임 입력"
            maxLength={15}
          />
          <p className="helper-text">최대 15글자까지 입력할 수 있습니다</p>
        </InputContainer>
        <Button type="primary" width="large" disabled={!nickname} onClick={handleComplete}>
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

  .helper-text {
    ${({ theme }) => theme.fonts.Body1};
    color: ${({ theme }) => theme.color.grey3};
  }
`;

const StyledInput = styled.input`
  width: 240px;
  height: 40px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.grey2};
  margin-bottom: 12px;
  padding: 10px 0;
  ${({ theme }) => theme.fonts.SubTitle2};
  color: ${({ theme }) => theme.color.black100};
  text-align: center;

  &::placeholder {
    color: ${({ theme }) => theme.color.grey4};
  }
`;
