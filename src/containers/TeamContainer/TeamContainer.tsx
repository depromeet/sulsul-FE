import styled from '@emotion/styled';

import Header from '@/components/Header';
import { BackButton } from '@/components/Header/extras';

const TeamContainer = () => {
  return (
    <StyledTeamContainer>
      <Header leftExtras={<BackButton />}>팀원 소개</Header>
      <img src="images/beerair_member.png" width="100%" height="auto" alt="비어에어멤버" />
    </StyledTeamContainer>
  );
};

export default TeamContainer;

const StyledTeamContainer = styled.div``;
