import styled from '@emotion/styled';

import { HEADER_HEIGHT } from '../Header';

interface OKTextButton {
  onClick?: () => void;
}

const StyledTextButton = styled.button`
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  height: ${HEADER_HEIGHT}px;

  color: ${(p) => p.theme.color.white};
`;

const OKTextButton = ({ onClick }: OKTextButton) => {
  return (
    <StyledTextButton type="button" onClick={onClick}>
      확인
    </StyledTextButton>
  );
};

export default OKTextButton;
