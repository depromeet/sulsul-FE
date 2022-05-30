import styled from '@emotion/styled';

import Icon from '@/components/commons/Icon-new';

const BACKGROUND_COLOR = '#03C75A';
const TEXT_COLOR = '#FFFFFF';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  height: 47px;
  padding: 0 14px;
  border-radius: 6px;

  background-color: ${BACKGROUND_COLOR};
  color: ${TEXT_COLOR};

  > p {
    flex: 1;
    font-size: 15px;
  }
`;

const NaverLoginButton = () => {
  return (
    <StyledButton onClick={() => null}>
      <Icon name="Naver" color="white" size={18} />
      <p>네이버로 시작하기</p>
    </StyledButton>
  );
};

export default NaverLoginButton;
