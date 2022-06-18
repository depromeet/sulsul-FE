import styled from '@emotion/styled';
import { useState } from 'react';
import Link from 'next/link';
import { GetServerSideProps, NextPage } from 'next';

import ListButtonBox from '@/components/ListButtonBox';
import BottomNavigation from '@/components/BottomNavigation';
import LevelModal from '@/components/LevelModal';
import ProfileModifyModal from '@/components/ProfileModifyModal';
import Icon from '@/components/commons/Icon';
import { getProfile, IProfile, getLevels, ILevel } from '@/apis';
import { useGetProfile, useGetLevels } from '@/queries';
import { useGtagPageView } from '@/hooks';
import { PAGE_TITLES } from '@/constants';

interface ProfileContainerProps {
  profileData: IProfile;
  levels: ILevel[];
}
const ProfileContainer: NextPage<ProfileContainerProps> = ({
  profileData: _profileData,
  levels: _levels,
}) => {
  useGtagPageView(PAGE_TITLES.PROFILE);
  const [isModifyModalOpen, setIsModifyModalOpen] = useState(false);
  const [isLevelModalOpen, setIsLevelModalOpen] = useState(false);

  const openModifyModal = () => setIsModifyModalOpen(true);
  const closeModifyModal = () => setIsModifyModalOpen(false);
  const openLevelModal = () => setIsLevelModalOpen(true);
  const closeLevelModal = () => setIsLevelModalOpen(false);

  const { contents: profileData } = useGetProfile(_profileData);
  const { contents: levels } = useGetLevels(_levels);

  if (!profileData) {
    return null;
  }

  const { beerCount, countryCount, memberBeerCount, name, recordCount, requestbeerCount } =
    profileData;

  const email = 'beerair.official@gmail.com'; //TODO: user data에서 받아와야함

  console.log(levels);
  return (
    <>
      <StyledProfileContainer>
        <ToolTip>
          여행 1번만 더 하면 Level UP!
          <InfoIcon name="Info" size={20} onClick={openLevelModal} />
        </ToolTip>
        <Icon name="Level1" size={160} />
        <NickName>
          {name}
          <ModifyIcon name="Modify" size={24} onClick={openModifyModal} />
        </NickName>
        <Email>{email}</Email>
        <TextItemContainer>
          <TextItem>
            <NumberAndUnit>
              <Number>{beerCount}</Number>
              <Unit>캔</Unit>
            </NumberAndUnit>
            <Title>마신 맥주</Title>
          </TextItem>
          <TextItem>
            <NumberAndUnit>
              <Number>{recordCount}</Number>
              <Unit>개</Unit>
            </NumberAndUnit>
            <Title>기록한 티켓</Title>
          </TextItem>
          <TextItem>
            <NumberAndUnit>
              <Number>{countryCount}</Number>
              <Unit>개국</Unit>
            </NumberAndUnit>
            <Title>여행한 나라</Title>
          </TextItem>
        </TextItemContainer>
        <ListButtonBoxContainer>
          <Link href={`/beer/recommend-and-liked?tab="liked"`} passHref>
            <ListButtonBox iconName="Heart" text="내가 반한 맥주" count={memberBeerCount} />
          </Link>
          <Link href="" passHref>
            <ListButtonBox iconName="PlusCircle" text="요청한 맥주 현황" count={requestbeerCount} />
          </Link>
          <Link href="/profile/etc" passHref>
            <ListButtonBox iconName="ThreeDot" text="기타" />
          </Link>
        </ListButtonBoxContainer>
      </StyledProfileContainer>
      {isModifyModalOpen && (
        <ProfileModifyModal
          isModifyModalOpen={isModifyModalOpen}
          openModifyModal={openModifyModal}
          closeModifyModal={closeModifyModal}
          onSubmit={() => alert('닉네임 수정 완료')}
        />
      )}
      {isLevelModalOpen && (
        <LevelModal
          isLevelModalOpen={isLevelModalOpen}
          openLevelModal={openLevelModal}
          closeLevelModal={closeLevelModal}
          levels={levels}
        />
      )}
      <BottomNavigation />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const profileData = await getProfile();
  const levels = await getLevels();
  return { props: { profileData, levels } };
};

export default ProfileContainer;

const StyledProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoIcon = styled(Icon)`
  cursor: pointer;
`;

const NickName = styled.div`
  position: relative;
  display: flex;

  ${({ theme }) => theme.fonts.H2}
  margin-bottom: 6px;
`;

const ModifyIcon = styled(Icon)`
  cursor: pointer;
  position: absolute;
  left: calc(100% + 12px);
`;

const Email = styled.p`
  ${({ theme }) => theme.fonts.Body4}
  color: ${({ theme }) => theme.color.whiteOpacity80};
  margin-bottom: 36px;
`;

const TextItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NumberAndUnit = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2px;
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 10px;
`;

const Number = styled.p`
  ${({ theme }) => theme.fonts.H1};
  color: ${({ theme }) => theme.color.white};
`;

const Unit = styled.p`
  ${({ theme }) => theme.fonts.SubTitle4};
  color: ${({ theme }) => theme.color.white};
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.SubTitle5};
  color: ${({ theme }) => theme.color.whiteOpacity90};
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
  gap: 10px;
  width: 214px;
  height: 44px;
  margin-top: 60px;
  background: ${({ theme }) => theme.semanticColor.primary};
  border-radius: 8px;
  ${({ theme }) => theme.fonts.SubTitle5};
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
