import styled from '@emotion/styled';

import Icon from '../commons/Icon';
import Header from '../Header';
import { BackButton } from '../Header/extras';

interface ErrorPageProp {
  title?: string;
  subtitle?: string;
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 0 76px;
`;

const StyledIcon = styled(Icon)`
  margin-top: 50px;
`;

const StyledTitle = styled.b`
  ${(p) => p.theme.fonts.H3};
  white-space: pre-line;
  text-align: center;
`;

const StyledSubtitle = styled.b`
  margin-top: 18px;
  ${(p) => p.theme.fonts.Body3};
  white-space: pre-line;
  text-align: center;
`;

const ErrorPage = ({ title = '앗!', subtitle = '일시적인 오류가 발생했어요.' }: ErrorPageProp) => {
  return (
    <StyledWrapper>
      <Header leftExtras={<BackButton />} />
      <StyledIcon name="ConveyorBelt" size={224} />
      <StyledTitle>{title}</StyledTitle>
      <StyledSubtitle>{subtitle}</StyledSubtitle>
    </StyledWrapper>
  );
};

export default ErrorPage;
