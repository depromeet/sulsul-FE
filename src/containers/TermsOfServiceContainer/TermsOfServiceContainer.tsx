import styled from '@emotion/styled';

import Header from '@/components/Header';
import { BackButton } from '@/components/Header/extras';

const TermsOfServiceContainer = () => {
  return (
    <StyledTermsOfServiceContainer>
      <Header leftExtras={<BackButton />}>이용 약관</Header>
    </StyledTermsOfServiceContainer>
  );
};

export default TermsOfServiceContainer;

const StyledTermsOfServiceContainer = styled.div``;
