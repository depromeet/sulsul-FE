import styled from '@emotion/styled';

import Header from '@/components/Header';
import { BackButton } from '@/components/Header/extras';

const EtcContainer = () => {
  return (
    <StyledEtcContainer>
      <Header leftExtras={<BackButton />}>기타</Header>
    </StyledEtcContainer>
  );
};

export default EtcContainer;

const StyledEtcContainer = styled.div``;
