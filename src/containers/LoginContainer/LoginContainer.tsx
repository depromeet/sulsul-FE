import styled from '@emotion/styled';

import LoginLayout from '@/components/layouts/LoginLayout';
import { KakaoLoginButton, NaverLoginButton } from '@/components/socialLoginButtons';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 38px;

  .subtitle {
    ${(p) => p.theme.fonts.Body4};
    color: ${(p) => p.theme.color.whiteOpacity65};
    margin: 0 0 10px;
    text-align: center;
  }

  > * {
    margin-top: 10px;
  }
`;

const LoginContainer: React.FC = () => {
  return (
    <LoginLayout title={`계정을 등록하면\n맥주에 대한 평가를\n기록하고 공유할 수 있습니다!`}>
      <StyledWrapper>
        <p className="subtitle">간편 로그인</p>
        <KakaoLoginButton />
        <NaverLoginButton />
      </StyledWrapper>
    </LoginLayout>
  );
};

export default LoginContainer;
