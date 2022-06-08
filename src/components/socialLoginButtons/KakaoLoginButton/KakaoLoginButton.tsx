import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import axios from '@/configs/axios';

const BACKGROUND_COLOR = '#FEE500';
const TEXT_COLOR = '#191919';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  height: 47px;
  padding: 0 14px;
  border-radius: 6px;

  background-color: ${BACKGROUND_COLOR};
  color: ${TEXT_COLOR};

  > img {
    width: 18px;
    height: 18px;
  }

  > p {
    flex: 1;
    font-size: 15px;
  }
`;

const KakaoLoginButton = () => {
  const router = useRouter();
  return (
    <StyledButton
      onClick={async () => {
        const res = await axios.get('/oauth2/authorization/kakao');
        console.log(JSON.stringify(res));
      }}
    >
      <img src="/images/kakao.png" alt="" />
      <p>카카오로 시작하기</p>
    </StyledButton>
  );
};

export default KakaoLoginButton;
