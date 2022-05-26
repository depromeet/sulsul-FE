import styled from '@emotion/styled';

import Header from '@/components/Header';
import { BackButton } from '@/components/Header/extras';

const TeamContainer = () => {
  return (
    <StyledTeamContainer>
      <Header leftExtras={<BackButton />}>팀 소개</Header>
    </StyledTeamContainer>
  );
};

export default TeamContainer;

const StyledTeamContainer = styled.div``;
