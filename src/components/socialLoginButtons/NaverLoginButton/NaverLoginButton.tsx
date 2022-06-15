import styled from '@emotion/styled';

import { BASE_URL } from '@/configs/axios';
import Icon from '@/components/commons/Icon';

const BACKGROUND_COLOR = '#03C75A';
const TEXT_COLOR = '#FFFFFF';

const StyledButton = styled.a`
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
    text-align: center;
  }
`;

const NaverLoginButton = () => {
  return (
    <StyledButton href={`${BASE_URL}oauth2/authorization/kakao`} onClick={() => null}>
      <Icon name="Naver" color="white" size={18} />
      <p>네이버로 시작하기</p>
    </StyledButton>
  );
};

export default NaverLoginButton;
