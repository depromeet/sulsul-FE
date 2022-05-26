import styled from '@emotion/styled';

import Header from '@/components/Header';
import { BackButton } from '@/components/Header/extras';

const PrivacyPolicyContainer = () => {
  return (
    <StyledPrivacyPolicyContainer>
      <Header leftExtras={<BackButton />}>개인정보 처리방침</Header>
    </StyledPrivacyPolicyContainer>
  );
};

export default PrivacyPolicyContainer;

const StyledPrivacyPolicyContainer = styled.div``;
