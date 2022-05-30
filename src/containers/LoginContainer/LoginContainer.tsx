import { ChangeEvent, ReactElement, useState } from 'react';
import styled from '@emotion/styled';

import LoginLayout from '@/components/layouts/LoginLayout';
import { KakaoLoginButton, NaverLoginButton } from '@/components/socialLoginButtons';
import Button from '@/components/commons/Button';

const StyledLoginStep1 = styled.div`
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

/** 소셜 로그인 */
const LoginStep1 = () => {
  return (
    <StyledLoginStep1>
      <p className="subtitle">간편 로그인</p>
      <KakaoLoginButton />
      <NaverLoginButton />
    </StyledLoginStep1>
  );
};

const StyledLoginStep2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  label {
    width: 0;
    height: 0;
    overflow: hidden;
  }

  .helper-text {
    margin: 30px 0 10vh;
    ${(p) => p.theme.fonts.Body5};
    color: ${(p) => p.theme.color.whiteOpacity50};
  }
`;

const StyledInput = styled.input`
  width: 240px;
  height: 40px;
  border-bottom: 1px solid ${(p) => p.theme.color.white};
  color: ${(p) => p.theme.color.white};
  ${(p) => p.theme.fonts.SubTitle2};
  text-align: center;

  &::placeholder {
    color: ${(p) => p.theme.color.whiteOpacity50};
  }
`;

/** 닉네임 입력 */
const LoginStep2 = () => {
  const [nickname, setNickname] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (nickname.length > 15) return;

    setNickname(e.target.value);
  };

  const handleComplete = () => [
    /** @todo api 호출: 유저 닉네임 업데이트 */
  ];

  return (
    <StyledLoginStep2>
      <label htmlFor="nickname">닉네임</label>
      <StyledInput
        id="nickname"
        type="text"
        value={nickname}
        onChange={handleInputChange}
        placeholder="닉네임 입력"
        maxLength={15}
      />
      <p className="helper-text">최대 15글자까지 입력 할 수 있습니다.</p>
      <Button width="244px" type="primary" disabled={!nickname} onClick={handleComplete}>
        완료
      </Button>
    </StyledLoginStep2>
  );
};

const LOGIN_STEP_COMPONENTS: Record<number, ReactElement> = {
  1: <LoginStep1 />,
  2: <LoginStep2 />,
};

interface LoginContainerProps {
  step: number;
}

const LoginContainer: React.FC<LoginContainerProps> = ({ step }) => {
  const title = {
    1: `계정을 등록하면\n맥주에 대한 평가를\n기록하고 공유할 수 있습니다!`,
    2: `사용하실 닉네임을\n입력해 주세요.`,
  }[step];

  return <LoginLayout title={title}>{LOGIN_STEP_COMPONENTS[step]}</LoginLayout>;
};

export default LoginContainer;
