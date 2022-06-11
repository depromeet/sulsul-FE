import { ChangeEvent, useState } from 'react';
import styled from '@emotion/styled';

import OnBoardingLayout from '@/components/layouts/OnBoardingLayout';
import Button from '@/components/commons/Button';

const StyledWrapper = styled.div`
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

const SignUpContainer = () => {
  const [nickname, setNickname] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (nickname.length > 15) return;

    setNickname(e.target.value);
  };

  const handleComplete = () => [
    /** @todo api 호출: 유저 닉네임 업데이트 */
  ];

  return (
    <OnBoardingLayout title={`사용하실 닉네임을\n입력해 주세요.`} cloudColor="whiteOpacity35">
      <StyledWrapper>
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
      </StyledWrapper>
    </OnBoardingLayout>
  );
};

export default SignUpContainer;
