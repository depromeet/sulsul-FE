import styled from '@emotion/styled';

import { Level as LevelList } from '@/constants/Level';
import ModalLayout from '@/components/layouts/ModalLayout';
import Icon from '@/components/commons/Icon';
import { ILevel } from '@/apis';

interface Props {
  isLevelModalOpen: boolean;
  openLevelModal: () => void;
  closeLevelModal: () => void;
  levels?: ILevel[];
}

const LevelModal = ({ isLevelModalOpen, closeLevelModal, levels }: Props) => {
  if (!levels) {
    return null;
  }

  // const { id, imageUrl, req, tier } = levels;
  return (
    <ModalLayout open={isLevelModalOpen} onClose={closeLevelModal}>
      <StyledModal open={isLevelModalOpen}>
        <Header>
          <Icon name="Close" size={24} onClick={closeLevelModal} style={{ cursor: 'pointer' }} />
          Level 안내
          <Icon name="Close" size={24} color="white" />
        </Header>
        <LevelContainer>
          {levels.map(({ id, imageUrl, req, tier }) => (
            <Level key={id}>
              <img src={imageUrl} alt={tier.toString()} width="64px" height="auto" />
              <p>
                기록한 티켓 {req}개 이상 Level {tier}
              </p>
            </Level>
          ))}
        </LevelContainer>
      </StyledModal>
    </ModalLayout>
  );
};

export default LevelModal;

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
  height: 470px;
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

const LevelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  margin-top: 20px;
`;

const Level = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.fonts.Body4};
  color: ${({ theme }) => theme.color.grey4};
  margin-bottom: 15px;
`;
