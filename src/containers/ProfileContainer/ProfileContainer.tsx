import styled from '@emotion/styled';
import { useState } from 'react';
import Link from 'next/link';

import BottomNavigation from '@/components/BottomNavigation';
import ListButtonBox from '@/components/ListButtonBox';
import Modal from '@/components/Modal';
import Icon from '@/components/commons/Icon';
import Button from '@/components/commons/Button';

interface Props {
  nickname: string;
  email: string;
  drinkedBeerCount: number;
  ticketCount: number;
  travelCount: number;
  likedBeerCount: number;
  requestBeerCount: number;
}
const ProfileContainer = (props: Props) => {
  const {
    nickname,
    email,
    drinkedBeerCount,
    ticketCount,
    travelCount,
    likedBeerCount,
    requestBeerCount,
  } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <StyledProfileContainer>
        <ToolTip>여행 1번만 더 하면 Level UP!</ToolTip>
        <Icon name="Level1" size={160} />
        <NickName>
          {nickname}
          <Icon
            name="Modify"
            size={24}
            onClick={() => setIsModalOpen(true)}
            style={{ cursor: 'pointer' }}
          />
        </NickName>
        <Email>{email}</Email>
        <TextItemContainer>
          <TextItem>
            <NumberAndUnit>
              <Number>{drinkedBeerCount}</Number>
              <Unit>캔</Unit>
            </NumberAndUnit>
            <Title>마신 맥주</Title>
          </TextItem>
          <TextItem>
            <NumberAndUnit>
              <Number>{ticketCount}</Number>
              <Unit>개</Unit>
            </NumberAndUnit>
            <Title>기록한 티켓</Title>
          </TextItem>
          <TextItem>
            <NumberAndUnit>
              <Number>{travelCount}</Number>
              <Unit>개국</Unit>
            </NumberAndUnit>
            <Title>여행한 나라</Title>
          </TextItem>
        </TextItemContainer>
        <ListButtonBoxContainer>
          <ListButtonBox iconName="Heart" text="내가 반한 맥주" count={likedBeerCount} />
          <ListButtonBox iconName="PlusCircle" text="요청한 맥주 현황" count={requestBeerCount} />

          <Link href="./etc">
            <ListButtonBox iconName="ThreeDot" text="기타" />
          </Link>
        </ListButtonBoxContainer>
      </StyledProfileContainer>
      {isModalOpen && (
        <Modal
          open={isModalOpen}
          openModal={openModal}
          closeModal={closeModal}
          withCloseButton
          header="프로필 수정하기"
          buttons={
            <Button type="primary" width="large" onClick={closeModal}>
              완료
            </Button>
          }
        />
      )}
      <BottomNavigation />
    </>
  );
};

export default ProfileContainer;

const StyledProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NickName = styled.div`
  display: flex;
  gap: 12px;
  ${({ theme }) => theme.fonts.H2}
  margin-bottom:6px;
`;

const Email = styled.p`
  ${({ theme }) => theme.fonts.Body4}
  color:${({ theme }) => theme.color.whiteOpacity80};
  margin-bottom: 36px;
`;

const TextItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NumberAndUnit = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  color: ${({ theme }) => theme.color.white};
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  margin-bottom: 10px;
`;

const Number = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.color.white};
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
`;

const Unit = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.color.white};
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
`;

const Title = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.color.whiteOpacity90};
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
`;

const TextItemContainer = styled.div`
  display: flex;
  gap: 40px;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const ListButtonBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 31px;
  width: 100%;
`;

const ToolTip = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 184px;
  height: 40px;
  margin-top: 60px;
  background: ${({ theme }) => theme.semanticColor.primary};
  border-radius: 8px;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  color: ${({ theme }) => theme.color.white};

  ::after {
    border-top: 10px solid ${({ theme }) => theme.semanticColor.primary};
    border-left: 10px solid transparent;
    border-right: 10px solid ${({ theme }) => theme.semanticColor.primary};
    border-bottom: 10px solid transparent;
    content: '';
    position: absolute;
    bottom: -15px;
    left: 62px;
  }
`;
