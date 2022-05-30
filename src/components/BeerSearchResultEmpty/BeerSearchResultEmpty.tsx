import styled from '@emotion/styled';

import Button from '../commons/Button';
import Icon from '../commons/Icon';

interface BeerSearchResultEmptyProp {
  title: string;
  subtitle: string;
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 0 76px;
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

const StyledRequestButton = styled(Button)`
  margin: 56px 0 0;
`;

const StyledRecordButton = styled(Button)`
  margin: 10px 0 0;
`;

const BeerSearchResultEmpty = ({ title, subtitle }: BeerSearchResultEmptyProp) => {
  return (
    <StyledWrapper>
      <Icon name="ConveyorBelt" size={224} />
      <StyledTitle>{title}</StyledTitle>
      <StyledSubtitle>{subtitle}</StyledSubtitle>
      <StyledRequestButton type="primary" width="244px">
        맥주 등록 요청하기
      </StyledRequestButton>
      <StyledRecordButton type="primary" line width="244px">
        미등록 맥주 기록하기
      </StyledRecordButton>
    </StyledWrapper>
  );
};

export default BeerSearchResultEmpty;
